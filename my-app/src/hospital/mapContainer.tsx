import "./mapContainer.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Typescriptmap(props: any) {
  const [cityChange, setcityChange] = useState([]);
  const [hospitalTypeChg, setHospitalTypeChg] = useState();

  const [info, setInfo]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  const [map, setMap]: any = useState();

  const mapInfo = useSelector((state: any) => state.checkMapInfo);
  const bigCity = mapInfo.bigcity.slice(0, mapInfo.bigcity.indexOf("("));
  const smallCity = mapInfo.smallcity;
  const hostpitalType = mapInfo.hospitaltype;
  // const bigCity = props.userCity.bigcity.slice(0, mapInfo.bigcity.indexOf("("));

  // console.log("질주", bigCity);
  console.log("질주", mapInfo);
  // setcityChange(bigCity);
  // console.log("도시변경", cityChange);

  useEffect(() => {
    console.log("큰도시 바뀜");
    let copy: any = [...cityChange];
    copy[0] = bigCity;
    copy[1] = "";
    copy[2] = "";

    setcityChange(copy);
  }, [bigCity]);
  useEffect(() => {
    console.log("작은도시 바뀜");
    let copy: any = [...cityChange];
    copy[1] = smallCity;

    setcityChange(copy);
  }, [smallCity]);

  useEffect(() => {
    let copy: any = [...cityChange];
    copy[2] = hostpitalType;

    setcityChange(copy);
  }, [hostpitalType]);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(
      `${cityChange[0]} ${cityChange[1]} ${cityChange[2]}`,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds: any = new kakao.maps.LatLngBounds();
          let markers: any = [];

          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }
    );
  }, [cityChange]);

  return (
    <div className="mapContainer">
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div
                className="mark"
                style={{
                  color: "#000",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {marker.content}
              </div>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default Typescriptmap;
