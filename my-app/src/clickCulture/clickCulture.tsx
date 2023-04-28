import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import Signin2 from "../signin/signin2";

import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import backgroundImg from "../img/3.jpg";
import backgroundImg from "../img/6.png";
import DetailMap from "./detailMap";

function Click_culture(props: any) {
  const navigate = useNavigate();

  const { id }: any = useParams();
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

  let modifiedId = id.slice(0, id.indexOf("."));
  // let data = [props.userCheck, modifiedId];
  let [data, setData] = useState([props.userCheck, modifiedId]);

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
  return (
    <>
      {/* <Routes>
        <Route path="/festivals" element={<Festivals></Festivals>}></Route>
      </Routes> */}
      <Signin2 name={signInModal}></Signin2>
      <Navbar2 user={props.userCheck}></Navbar2>
      <div className="example">
        <div className="upperSide">
          {/* <Figure className="imgContainer"> */}
          <Figure.Image
            src={backgroundImg}
            className="upperSideImg"
          ></Figure.Image>
          {/* <p className="upperSideTxt">MUST GO</p> */}
          {/* </Figure> */}
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
              aria-label="With textarea"
              onChange={function (e) {
                e.preventDefault();
                setWrittenComment(e.target.value);
              }}
              onClick={(e) => {
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
          {/* {
            axios
              .post("http://localhost:8081/auth/bringComments", data) //
              .then((res) => {
                console.log(res);
                return <div>재</div>;
              }) //
          } */}
          {/* <BringComments data={data}></BringComments> */}
          <div></div>
        </div>
        <div>{props.userCheck}</div>
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
