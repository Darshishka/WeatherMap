const { title } = require("process");
const { callbackify } = require("util");
const { STATUS_CODES } = require("http");

var mapUSA;
var currState;
var currStateCoords;
var currStateData = [];
var info;
var contents = [];
var dataState = [];
var dates;
var nytState;
var cases;
var blankArr = [];

function initMapUSA() {
  mapUSA = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.712162, lng: -95.165789 },
    // disableDefaultUI: true,
    // gestureHandling: 'none',
    // zoomControl: false,
    zoom: 4.3,
    mapId: 'f68311c1c85e61',
  });
  sortData();
};

function sortData () {
  var stateData = [];
  var x = 0;
  var i = 0;
  currState = state[i]["state"];
  $.each(state, function(key, value) {
    $.each(nytData, function(index, item) {
      if (value.state === item.state) {
        stateData = item;
        console.log(value.state + " : " + item.state)
      }
      console.log(item);
    })
  })
  // var x = 0
  // var i = 0;
  // var y = 0;
  // while (x != nytData.length) {
  //   x++
  //   currState = state[i]["state"];
  //   currStateCoords = state[i]["center"];
  //   if (currState === nytData[y]["state"]) {
  //     dataState = y;
  //     y++
  //     return y;
  //   } else 
  //   {
  //     y++
  //   }
  //   i++;
    var marker = new google.maps.Marker({
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(currStateCoords),
      map: mapUSA,
      title: currState,
      content: `<br>`,
      icon: {
        strokeColor: "#FF0000",
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 2
      }
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(currStateCoords),
      map: mapUSA,
      title: currState,
      content: `test`,
      icon: {
        strokeColor: "#00FF00",
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2
      }
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(this.title + "<br>Click for more info");
      infowindow.open(infowindow, this);     
    });
    google.maps.event.addListener(marker, `click`, function () {
      var current = this.title;
      infowindow.setContent(this.content);
      infowindow.open(marker, this);
    });
        // google.maps.event.addListener(marker, "mouseout", function () {
        //   infoWindow.close(this.info)
        // });  
    // google.maps.event.addListener(marker, `mouseout`, function () {
    //   infowindow.close();
    // });
    marker.setMap(mapUSA);
};
