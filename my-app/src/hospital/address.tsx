/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import cityNameObj from "./cityNameObj";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import Typescriptmap from "./mapContainer";
function Address() {
  const [choosedCity, setChoosedCity] = useState("서울");
  // const [choosedSmallCity, setChoosedSmallCity] = useState("");
  const [listCity, setListCity]: any = useState([
    "서울",
    "부산",
    "대구",
    "광주",
    "인천",
    "대전",
    "울산",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ]);

  return (
    <>
      <Form.Select
        size="lg"
        className="bigCity"
        onChange={function (e) {
          setChoosedCity(e.target.value);
        }}
      >
        {
          listCity.map((e: any, index: number) => (
            <option value={e} key={index}>
              {e}
            </option>
          )) //
        }
        {/* <option>Where are you living?</option> */}
      </Form.Select>

      <Form.Select
        size="lg"
        className="smallCity"
        onChange={function (e) {
          // setChoosedSmallCity(e.target.value);
        }}
      >
        <CityListDetail cityName={choosedCity}></CityListDetail>
      </Form.Select>
      <Form.Select
        size="lg"
        className="selectHospital"
        onChange={function (e) {}}
      ></Form.Select>
    </>
  );
}
function CityListDetail(props: any) {
  let arr = [...cityNameObj[props.cityName]];

  return (
    <>
      {
        //
        arr.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))
        // <option>{cityNameObj[props.cityName]}</option>
      }
    </>
  );
}
export { Address };
