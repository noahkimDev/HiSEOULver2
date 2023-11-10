import "./culture2.css";
import "./myswiper.css";

import Alert from "react-bootstrap/Alert";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Culture() {
  return (
    <>
      <div className="culture-container">
        <div className="culture-upper-frame">
          <Alert className="performance" variant="success">
            <p>Culture Performance</p>
          </Alert>
        </div>

        <div className="culture-lower-frame">
          <div className="slide-container">
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
  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/auth/getList", { withCredentials: true }) //
      .then((res: any) => {
        setImgArray(res.data);
      });
  }, []);

  // console.log("배열", imgArray);
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1600: { slidesPerView: 4 },
          1300: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
        }}
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
