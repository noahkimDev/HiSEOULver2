import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function DetailMap(props: any) {
  const [info, setInfo]: any = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap]: any = useState();
  console.log("주소", props.address);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Geocoder();

    ps.addressSearch(`${props.address}`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers: any = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            // content: data[i],
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [props.address]);

  // useEffect(() => {
  //   if (!map) return;
  //   const ps = new kakao.maps.services.Geocoder();

  //   ps.addressSearch(`${props.address}`, (data, status, _pagination) => {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //       // LatLngBounds 객체에 좌표를 추가합니다
  //       const bounds = new kakao.maps.LatLngBounds();
  //       let markers: any = [];

  //       for (var i = 0; i < data.length; i++) {
  //         // @ts-ignore
  //         markers.push({
  //           position: {
  //             lat: data[i].y,
  //             lng: data[i].x,
  //           },
  //           // content: data[i],
  //         });
  //         // @ts-ignore
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //       }
  //       setMarkers(markers);

  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //       map.setBounds(bounds);
  //     }
  //   });
  // }, [map]);

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        margin: "auto",
        width: "80%",
        height: "550px",
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
          {/* {info && info.content === marker.content && (
            <div style={{ color: "#000" }}>{marker.content}</div>
          )} */}
        </MapMarker>
      ))}
    </Map>
  );
}

export default DetailMap;
