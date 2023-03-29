import "./seoul-pics.css";
import image1 from "../img/4.png";
import image2 from "../img/5.png";
import image3 from "../img/6.png";
import image4 from "../img/background.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <div className="image-container">
      <Figure className="image-frame">
        <Figure.Image src={image4} className="txt-group" />
        <p className="image-txt">Welcome to Seoul</p>
        <p className="image-txt2">
          We will share you the information for living in Seoul
        </p>
      </Figure>
      {/* <Carousel className="image-frame1">
        <Carousel.Item>
          <img className="d-block " src={image4} alt="First slide" />
          <Carousel.Caption>
            <p className="image-txt">Welcome to Seoul</p>
            <p className="image-txt2">
              We will share you the information for living in Seoul
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default FigureExample;

// function SeoulPics() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img className="d-block w-100" src={image1} alt="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={image2} alt="Second slide" />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100 h-70" src={image4} alt="Third slide" />T
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default SeoulPics;
