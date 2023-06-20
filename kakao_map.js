const mapContainer = document.getElementById("map");
const mapOptions = {
  center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
  level: 10, // 지도 확대 레벨
};

// 지도 생성
const map = new kakao.maps.Map(mapContainer, mapOptions);

// 대학교 위치 데이터
const universities = [
  { name: "강원대학교", lat: 37.87058908975638, lng: 127.74382183965223 },
  { name: "경북대학교", lat: 35.89069312223215, lng: 128.61153233977564 },
  { name: "경상대학교", lat: 35.15410214058168, lng: 128.09751482693252 },
  { name: "부산대학교", lat: 35.234543987099464, lng: 129.0797801807107 },
  { name: "서울대학교", lat: 37.46373938417139, lng: 126.95111011011925 },
  { name: "전남대학교", lat: 35.175914845532056, lng: 126.91208046087792 },
  { name: "전북대학교", lat: 35.84572116847479, lng: 127.12959186963494 },
  { name: "제주대학교", lat: 33.455890359837866, lng: 126.56189309763263 },
  { name: "충남대학교", lat: 36.368797048906984, lng: 127.34952571376132 },
  { name: "충북대학교", lat: 36.62956728289459, lng: 127.45758428901453 },
  // 추가적인 대학교 위치 데이터를 여기에 추가할 수 있습니다.
];

// 대학교 위치에 마커 표시
universities.forEach((university) => {
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(university.lat, university.lng),
  });
  marker.setMap(map);

  const infowindow = new kakao.maps.InfoWindow({
    content: `<div>${university.name}</div>`,
  });
  kakao.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(map, marker);
  });
  kakao.maps.event.addListener(marker, "mouseout", function () {
    infowindow.close();
  });
});
