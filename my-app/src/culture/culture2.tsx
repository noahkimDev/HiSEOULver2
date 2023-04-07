import "./culture2.css";
import "./myswiper.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import React, { useRef, useState } from "react";
import { url } from "inspector";

function Culture() {
  const [swiperRef, setSwiperRef]: any[] = useState(null);

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
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="card"
                        style={{ backgroundImage: `url(${img6})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img6} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img5})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img5} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img4})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img4} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img5})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img5} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img6})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img6} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img5})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img5} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="card "
                        style={{ backgroundImage: `url(${img4})` }}
                      >
                        <div className="image-content">
                          {/* <span className="overlay"></span> */}
                          <div className="card-image">
                            <img src={img4} alt="" className="card-img" />
                          </div>
                        </div>
                        <div className="card-content">
                          <h2 className="name">Noah Kim</h2>
                          <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias iusto ducimus dolorum aspernatur ipsum
                            provident blanditiis possimus repudiandae voluptatem
                            illum corporis reprehenderit, rem debitis, minus
                            nulla facere ullam! Aperiam, minima.
                          </p>
                          <button className="button">view more</button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
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

export default Culture;
