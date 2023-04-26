import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import React, { useState } from "react";

// import backgroundImg from "../img/3.jpg";
import backgroundImg from "../img/6.png";
import DetailMap from "./detailMap";

function Click_culture(props: any) {
  const { id }: any = useParams();
  let [title, setTitle] = useState("");
  let [fee, setFee] = useState("");
  let [phone, setPhone] = useState("");
  let [event_dates, setEvent_dates] = useState("");
  let [hoursOfOperation, setHoursOfOperation] = useState("");
  let [explain, setExplain] = useState("");
  let [address, setAddress] = useState("");
  let [transportation, setTransportation] = useState("");
  let modifiedId = id.slice(0, id.indexOf("."));

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
          <textarea
            className="comment"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div>{props.userCheck}</div>
      </div>
    </>
  );
}

// function Festivals() {
//   return (
//     <>
//       {/* <Navbar2></Navbar2> */}
//       <div className="example">gogo</div>
//     </>
//   );
// }

export default Click_culture;
