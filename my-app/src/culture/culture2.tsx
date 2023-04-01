import "./swiper-bundle.min.css";
import "./culture2.css";
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
            <div className="slide-container2">
              {/*slice-container*/}
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={img4} alt="" className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Noah Kim</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias iusto ducimus dolorum aspernatur ipsum provident
                        blanditiis possimus repudiandae voluptatem illum
                        corporis reprehenderit, rem debitis, minus nulla facere
                        ullam! Aperiam, minima.
                      </p>
                      <button className="button">view more</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Card>
                <Card.Img className="img-container" variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> */}
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
