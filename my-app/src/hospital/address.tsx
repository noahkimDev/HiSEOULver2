/* eslint-disable @typescript-eslint/no-unused-vars */

import "./hospital.css";

import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import cityNameObj from "./cityNameObj";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import Typescriptmap from "./mapContainer";

import { useDispatch } from "react-redux";
import {
  rememberBigCity,
  rememberHospitalType,
  rememberSmallCity,
} from "../store";

function Address() {
  const dispatch = useDispatch();
  const [choosedCity, setChoosedCity]: any = useState("서울(Seoul)");
  const [choosedSmallCity, setChoosedSmallCity] = useState("");
  const [choosedHospital, setChoosedHospital] = useState("");
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
  useEffect(() => {
    dispatch(rememberBigCity(choosedCity));
    dispatch(rememberHospitalType(choosedHospital));
    dispatch(rememberSmallCity(choosedSmallCity));
  }, []);
  return (
    <>
      <Form.Select
        size="sm"
        className="selectCity"
        onChange={async function (e) {
          await setChoosedCity(e.target.value);
          await dispatch(rememberBigCity(e.target.value));
          await dispatch(rememberSmallCity(""));
        }}
      >
        {
          // listCity.map((e: any, index: number) => (
          //   <option value={e} key={index}>
          //     {e}
          //   </option>
          // )) //
          <BigcityList></BigcityList>
        }
        {/* <option>Where are you living?</option> */}
      </Form.Select>

      <Form.Select
        size="sm"
        className="selectCity"
        onChange={async function (e) {
          await setChoosedSmallCity(e.target.value);
          await dispatch(rememberSmallCity(e.target.value));
        }}
      >
        {/* {cityNameObj[choosedCity] &&
          cityNameObj[choosedCity].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))} */}

        <CityListDetail cityName={choosedCity}></CityListDetail>
      </Form.Select>
      <Form.Select
        size="sm"
        className="selectCity"
        onChange={async function (e) {
          await setChoosedHospital(e.target.value);
          await dispatch(rememberHospitalType(e.target.value));
        }}
      >
        <option value="">hospital type</option>
        <option value="치과">Dentistry</option>
        <option value="안과">Ophthalmology</option>
        <option value="정형외과">Orthopedics</option>
        <option value="내과">internal medicine department</option>
        <option value="이비인후과">Otorhinolaryngology</option>
        <option value="산부인과">Obstetrics and gynecology</option>
        <option value="피부과">Dermatology</option>
        <option value="소아과">Pediatrics</option>
      </Form.Select>
    </>
  );
}

function BigcityList() {
  return (
    <>
      {cityNameObj.list &&
        cityNameObj.list.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
    </>
  );
}

function CityListDetail(props: any) {
  // const arr = [...cityNameObj[props.cityName]];
  // for (let key of Object.keys(cityNameObj)) {
  //   if (key === props.cityName) {
  //     cityNameObj.key.map((e, i) => console.log("afafss"));
  //   }
  // }
  let city = props.cityName;
  let city2 = city.slice(0, city.indexOf("("));
  return (
    <>
      {cityNameObj[city2] &&
        cityNameObj[city2].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
    </>
  );
}
export { Address };
