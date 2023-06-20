$(document).ready(function(){
    var mapDiv = document.getElementById('map');
    var map = new naver.maps.Map(mapDiv, {
        center: new naver.maps.LatLng(37.5665, 126.9780), // 서울 시청 좌표
        zoom: 8
    });

    // 야구장 위치 정보 (예시)
    var baseballStadiums = [
        { name: "잠실야구장", address: "서울 송파구 올림픽로 19-2 서울종합운동장" },
        { name: "광주-기아 챔피언스필드", address: "광주 북구 서림로 10 무등종합경기장" },
        { name: "부산사직야구장", address: "부산 동래구 사직로 45" },
        { name: "인천 SSG 랜더스필드", address: "인천 미추홀구 매소홀로 618" },
        { name: "대구삼성라이온즈파크", address: "대구 수성구 야구전설로 1 대구삼성라이온즈파크" },
        { name: "한화생명이글스파크", address: "대전 중구 대종로 373" },
        { name: "수원KT위즈파크", address: "경기 수원시 장안구 경수대로 893 수원종합운동장(주경기장)" },
        { name: "창원NC파크", address: "경남 창원시 마산회원구 삼호로 63" },
        // 추가적인 야구장 위치 정보를 여기에 추가하세요.
    ];

    // 야구장 위치 마커 표시
    baseballStadiums.forEach(function(stadium) {
        naver.maps.Service.geocode({ address: stadium.address }, function(status, response) {
            if (status === naver.maps.Service.Status.ERROR) return;
            
            var result = response.result;
            var marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(result.items[0].point.y, result.items[0].point.x),
                map: map
            });
            
            var infowindow = new naver.maps.InfoWindow({
                content: '<div style="padding: 10px;">' + stadium.name + '</div>'
            });
            
            naver.maps.Event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        });
    });
});
