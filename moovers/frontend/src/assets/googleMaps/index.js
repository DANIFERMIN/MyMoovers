let center;
function getMyPosition(){
        navigator.geolocation.getCurrentPosition((position) => {
            center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
}


function initMap() {
  getMyPosition()
  let map;    
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.398440, lng: 2.199540},
    zoom: 13,
  });
}

export default initMap