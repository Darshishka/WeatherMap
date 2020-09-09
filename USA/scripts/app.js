var mapUSA;
var mapWA;
var infoWindow;
var stateName;
var currState;
var currStateCoords;

function sortData() {
  for (x = 0; x < nytData.length; x++) {
    var y = 0; 
    // if (nytData[x]) {
//todo
    // };
    //all 9,000 data entries
    console.log(nytData[x]);
  };
  var data = nytData[0]["date"];
  console.log(nytData[0]);
  console.log(data)
};

function initMapUSA() {
  sortData();
  mapUSA = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.712162, lng: -95.165789 },
    // disableDefaultUI: true,
    // gestureHandling: 'none',
    // zoomControl: false,
    zoom: 4.3,
    mapId: 'f68311c1c85e61',
  });
  for (i = 0; i < state.length; i++) {
    currState = state[i];
    currStateCoords = state[i]["center"];
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(state[i]["center"]),
      map: mapUSA,
      info: state[i]["id"],
      icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 2
      }
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.setContent(this.info);                              
            infowindow.open(map, this);                        
    });
    // google.maps.event.addListener(marker, "mouseout", function () {
    //   infoWindow.close(this.info)
    // });  
    marker.setMap(mapUSA);
  }
}