import "./clickCulture.css";
import Navbar2 from "../navbar/navbar2";
import { useParams } from "react-router-dom";

function Click_culture() {
  const { id } = useParams();
  return (
    <>
      {/* <Routes>
        <Route path="/festivals" element={<Festivals></Festivals>}></Route>
      </Routes> */}

      <Navbar2></Navbar2>
      <div className="example">
        <div className="aa">{id}</div>
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
