window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.6656121, lng: 135.4975173 },
        zoom: 10,
      });
    const malls = [
    { label: "D", name: "도톤보리", lat: 34.6674194, lng: 135.4987464 },
    { label: "U", name: "유니버셜 스튜디오 재팬", lat: 34.665442, lng: 135.4297633 },
    { label: "T", name: "츠텐카쿠", lat: 34.6524991, lng: 135.5014349 },
    { label: "D", name: "덴덴타운", lat: 34.6604299, lng: 135.5033068 },
    { label: "H", name: "하루카스 300", lat: 34.6463061, lng: 135.5084382 },
    { label: "U", name: "우메다 공중정원", lat: 34.7053019, lng: 135.487961 },
    { label: "O", name: "오사카 성", lat: 34.687257, lng: 135.5209837 },
    ];

    const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);
            infowindow.setContent(name);
            infowindow.open({
              anchor: marker,
              map,
            });
          });
    });

    map.fitBounds(bounds);
};