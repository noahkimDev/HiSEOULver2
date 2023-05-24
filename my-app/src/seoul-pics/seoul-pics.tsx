import "./seoul-pics.css";
import image4 from "../img/background.png";
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
    </div>
  );
}

export default FigureExample;
