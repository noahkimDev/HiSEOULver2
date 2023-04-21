import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
// import backgroundImg from "../img/3.jpg";
import backgroundImg from "../img/6.png";
import DetailMap from "./detailMap";

function Click_culture() {
  const { id } = useParams();
  axios
    .post(
      "http://localhost:8081/auth/exhibition_detail",
      { clickedEvent: id },
      {
        withCredentials: true,
      }
    )
    .then((res) => console.log(res));
  return (
    <>
      {/* <Routes>
        <Route path="/festivals" element={<Festivals></Festivals>}></Route>
      </Routes> */}

      <Navbar2></Navbar2>
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
          <div className="imgBox">
            {/* <div className="wow">fdaf</div> */}

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
                <p className="badgeTxt">Jan 01, 2023 ~ Apr 30, 202</p>
              </div>
              <div className="h1Content">
                <p className="badge1">Hours of Operation</p>
                <p className="badgeTxt">10:30 - 20:00 (Last entry at 19:30)</p>
              </div>

              <div className="h1Content">
                <p className="badge1">Fee</p>
                <p className="badgeTxt">
                  Adults & Teens: KRW 15,000 | Children : KRW 10,000{" "}
                </p>
              </div>
              <div className="h1Content">
                <p className="badge1">Phone</p>
                <p className="badgeTxt">+82-70-8287-2208</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="detailInfo">
          <p>
            When it comes to the city of Seoul, there are several different
            images that come to mind. And among those images, Seoul captures a
            variety of contrasts from light and dark; cold and warm, busy and
            peaceful, beautiful and ordinary, and more. Seoul Vibe is a project
            that seeks out to find these dualities through a myriad of ways.
          </p>
        </div>
        <div style={{ padding: "100px" }}>
          <DetailMap></DetailMap>
        </div>
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
