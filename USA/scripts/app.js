const { title } = require("process");

var mapUSA;
var mapWA;
var infoWindow;
var stateName;
var currState;
var currStateCoords;
var currStateData = [];
var info;
var contents = [];
var dataState;
var nytState;
var data;
var cases;
var y = 0;


function initMapUSA() {
  mapUSA = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.712162, lng: -95.165789 },
    // disableDefaultUI: true,
    // gestureHandling: 'none',
    // zoomControl: false,
    zoom: 4.3,
    mapId: 'f68311c1c85e61',
  });
  for (i = 0; i < state.length; i++) {
    currState = state[i]["state"];
    currStateCoords = state[i]["center"];
    dataState = state[i]["state"];
    cases;
    
    // for (y = 0; y < nytData.length; y++) {
    //   // console.log(nytData[y]["state"]);
    //   // console.log(nytData[y]);
    //   if(nytData[y]["state"] === currState) {
    //     data[1] = nytData[y]["cases"] + ", ";
    //     y++;
    //   } else {
    //     y++;
    //   }
    //   console.log(data);
    // }
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(state[i]["center"]),
      map: mapUSA,
      title: state[i]["state"],
      content: cases,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
      }
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(this.title);
      infowindow.open(map, this);                        
    });
    // google.maps.event.addListener(marker, "mouseout", function () {
    //   infoWindow.close(this.info)
    // });  
    marker.setMap(mapUSA);
  };
};