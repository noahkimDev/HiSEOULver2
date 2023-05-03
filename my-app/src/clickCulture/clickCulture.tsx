import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import Signin2 from "../signin/signin2";

import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import backgroundImg from "../img/3.jpg";
import backgroundImg from "../img/6.png";
import DetailMap from "./detailMap";

function Click_culture(props: any) {
  const { id }: any = useParams();
  let modifiedId = id.slice(0, id.indexOf("."));

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
      ) //
      .then((res: any) => {
        setAllComments(res.data);
        console.log("let's go", res.data);
      }); //
  }

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
      .then((res: any) => {
        setAllComments(res.data);
        console.log("let's go", res.data);
      }); //
  }, [writtenComment]);

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
                  // navigate("/signIn");
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
                  };
                  axios
                    .post("http://localhost:8081/auth/comment", data, {
                      withCredentials: true,
                    }) //
                    .then((res) => {
                      console.log(res.data);
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
          {allComments.map(
            (e: any, i: any) =>
              props.userCheck === e.Member.member_id ? (
                <Alert key={i} variant="secondary" className="alertContainer">
                  Member {e.Member.member_id}
                  <Button
                    variant="warning"
                    size="sm"
                    className="alertBtn"
                    onClick={() => {
                      // console.log(e.id);
                      deleteComment(e.id);
                      update();
                    }}
                  >
                    delete
                  </Button>
                  {/* <button className="alertBtn">수정</button> */}
                  {/* <button className="alertBtn">삭제</button> */}
                  <Alert className="insideAlert">{e.comment}</Alert>
                </Alert>
              ) : (
                <Alert key={i} variant="secondary" className="alertContainer">
                  Member {e.Member.member_id}
                  <Alert className="insideAlert">{e.comment}</Alert>
                </Alert>
              )

            // <div key={i}>{e.comment}</div>
          )}
          {/* <BringComments data={data}></BringComments> */}
          <div></div>
        </div>
      </div>
    </>
  );
}

// function BringComments(props: any) {
//   //

//   axios
//     .post("http://localhost:8081/auth/bringComments", props.data) //
//     .then((res) => {
//       console.log(res);
//     }); //

//   return (
//     <>
//       <div className="example">gogo</div>
//     </>
//   );
// }

export default Click_culture;
