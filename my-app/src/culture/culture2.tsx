import "./culture2.css";
import "./myswiper.css";

import img1 from "../img/bringCultures/hiseoulimg1.jpg";
import img2 from "../img/bringCultures/hiseoulimg2.png";
import img3 from "../img/bringCultures/hiseoulimg3.jpg";
import img4 from "../img/bringCultures/hiseoulimg4.png";
import img5 from "../img/bringCultures/hiseoulimg5.png";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

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

          {/* 오른쪽 컨텐츠 */}
          {/* <div className="right-content"></div> */}

          {/* <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img5} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="Second slide" />
              
              <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="Third slide" />
            
              <Carousel.Caption>
              <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                  </p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>
    </>
  );
}

function BringCulture() {
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
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
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
                    <button className="button">view more</button>
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
