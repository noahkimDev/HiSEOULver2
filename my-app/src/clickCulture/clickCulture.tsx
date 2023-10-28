import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import Signin2 from "../signin/signin2";

import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import backgroundImg from "../img/6.png";
import DetailMap from "./detailMap";

function Click_culture(props: any) {
  const { id }: any = useParams();
  let modifiedId = id.slice(0, id.indexOf("."));

  //댓글 삭제
  function deleteComment(commentNum: any) {
    axios.delete(`http://localhost:8081/auth/deleteComment/${commentNum}`);
  }
  function update() {
    axios
      .post(
        "http://localhost:8081/auth/bringComments",
        {
          // memberName: data,
          contentName: modifiedId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res: any) => {
        console.log(chgCommentsList);
        setAllComments(res.data);
        setChgCommentsList("");
        // setChgCommentsList("change");
        // console.log("let's go", res.data);
      }); //
  }

  let [chgCommentsList, setChgCommentsList] = useState("change");
  let [signInModal, setSignInModal] = useState("black-bg");
  let [title, setTitle] = useState("");
  let [fee, setFee] = useState("");
  let [phone, setPhone] = useState("");
  let [event_dates, setEvent_dates] = useState("");
  let [hoursOfOperation, setHoursOfOperation] = useState("");
  let [explain, setExplain] = useState("");
  let [address, setAddress] = useState("");
  let [transportation, setTransportation] = useState("");
  let [writtenComment, setWrittenComment] = useState("");

  let [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8081/auth/bringComments",
        {
          contentName: modifiedId,
        },
        {
          withCredentials: true,
        }
      ) //
      .then(async function (res: any) {
        console.log(res.data);
        setAllComments(res.data);
        console.log(allComments);
      }); //
  }, [writtenComment, chgCommentsList]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8081/auth/exhibition_detail",
        { clickedEvent: modifiedId },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.event_name);
        setFee(res.data.fee);
        setPhone(res.data.phone);
        setEvent_dates(res.data.event_dates);
        setHoursOfOperation(res.data.hours_of_operation);
        setExplain(res.data.explain);
        setAddress(res.data.address);
        setTransportation(res.data.transportation);
      });
  }, []);
  return (
    <>
      <Signin2 name={signInModal}></Signin2>
      <Navbar2 user={props.userCheck}></Navbar2>

      <div className="example">
        <div className="upperSide">
          <Figure.Image
            src={backgroundImg}
            className="upperSideImg"
          ></Figure.Image>
        </div>
        <div className="lowerSideContainer">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="imgBox">
            <img
              className="imgContent"
              src={require(`../img/bringCultures/${id}`)}
              alt=""
            />
          </div>
          <div className="infoBox">
            <div className="txtContent">
              <div className="h1Content">
                <p className="badge1">Event Dates</p>
                <p className="badgeTxt">{event_dates}</p>
              </div>

              <div className="h1Content">
                <p className="badge1">Fee</p>
                <p className="badgeTxt">{fee}</p>
              </div>
              <div className="h1Content">
                <p className="badge1">Phone</p>
                <p className="badgeTxt">{phone}</p>
              </div>
              <div className="h1Content">
                <p className="badge1">Address</p>
                <p className="badgeTxt">{address}</p>
              </div>
              <div className="h1Content">
                <p className="badge1">Transportation</p>
                <p className="badgeTxt">{transportation}</p>
              </div>
              <div className="h1Content">
                <p className="badge1">Hours of Operation</p>
                <p className="badgeTxt">{hoursOfOperation}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="detailInfo">
          <p>{explain}</p>
        </div>
        <div style={{ padding: "100px" }}>
          <DetailMap address={address}></DetailMap>
        </div>
        <div className="commentContainer">
          <InputGroup className="comment">
            <InputGroup.Text>Comment</InputGroup.Text>
            <Form.Control
              placeholder="If you want to leave comment, you should sign in first"
              className="txtArea"
              as="textarea"
              value={writtenComment}
              aria-label="With textarea"
              onChange={function (e) {
                e.preventDefault();
                setWrittenComment(e.target.value);
              }}
              onClick={function (e) {
                e.preventDefault();
                if (!props.userCheck) {
                  alert("you can't make the comment without sign-in");
                  setSignInModal("black-bg show-bg");
                }
              }}
            />
            <Button
              className="commentBtn"
              variant="success"
              id="button-addon2"
              onClick={function (e) {
                e.preventDefault();
                setWrittenComment("");
                if (props.userCheck) {
                  let data = {
                    userId: props.userCheck,
                    comment: writtenComment,
                    contentName: modifiedId,
                    idNum: props.userIdNum,
                  };
                  axios
                    .post("http://localhost:8081/auth/comment", data, {
                      withCredentials: true,
                    }) //
                    .then((res) => {
                      // console.log(res.data);
                      update();
                    });
                }
              }}
            >
              Click
            </Button>
          </InputGroup>
          {/*
          보내줄 데이터
            1. 컨텐츠 hiseoudl1.jpg 등
            2. 로그인 한 member 이름    
           */}
          {allComments.map((e: any, i: any) =>
            props.userIdNum === e.commenter ? (
              <Alert key={i} variant="secondary" className="alertContainer">
                writer : {e.member_id}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="alertBtn"
                  onClick={async () => {
                    await deleteComment(e.id);
                    await update();
                    setChgCommentsList("change");
                  }}
                >
                  delete
                </Button>
                <Alert className="insideAlert">{e.comment}</Alert>
              </Alert>
            ) : (
              <Alert key={i} variant="secondary" className="alertContainer">
                writer : {e.member_id}
                <Alert className="insideAlert">{e.comment}</Alert>
              </Alert>
            )
          )}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Click_culture;
