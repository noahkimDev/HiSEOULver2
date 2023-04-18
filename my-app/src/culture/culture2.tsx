import "./culture2.css";
import "./myswiper.css";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

import React, { useRef, useState, useEffect } from "react";
import { url } from "inspector";
import axios from "axios";

function Culture() {
  return (
    <>
      <div className="culture-container">
        <div className="culture-upper-frame">
          <Alert className="performance" variant="success">
            <p>Culture Performance</p>
          </Alert>
          {/* <p>Culture</p> */}
        </div>

        <div className="culture-lower-frame">
          <div className="slide-container">
            {/*slice-container*/}

            <div className="slide-container2 ">
              <BringCulture></BringCulture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BringCulture() {
  const navigate = useNavigate();
  const imgUrl = "../img/bringCultures/";
  const [imgSrc, setImgSrc] = useState("");
  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/auth/getList") //
      .then((res: any) => {
        setImgArray(res.data);
        // setImgSrc(res);
      });
  }, []);

  console.log("배열", imgArray);
  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1600: { slidesPerView: 4 },
          // 800: { slidesPerView: 3 },
          1300: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
        }}
        // navigation={true}
        modules={[Pagination]}
        className="swiper"
      >
        <div className="slide-content">
          <div className="card-wrapper  ">
            {imgArray.map((e, i) => (
              <SwiperSlide key={i}>
                <div
                  className="card "
                  style={{
                    backgroundImage: `url(${require(`../img/bringCultures/${e}`)})`,
                  }}
                >
                  <div className="image-content">
                    {/* <span className="overlay"></span> */}
                    <div className="card-image">
                      <img
                        src={require(`../img/bringCultures/${e}`)}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Noah Kim</h2>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias iusto ducimus dolorum aspernatur ipsum provident
                      blanditiis possimus repudiandae voluptatem illum corporis
                      reprehenderit, rem debitis, minus nulla facere ullam!
                      Aperiam, minima.
                    </p>
                    <button
                      className="button"
                      onClick={() => {
                        navigate(`/exhibition/${e}`);
                        window.location.reload();
                      }}
                    >
                      view more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default Culture;
