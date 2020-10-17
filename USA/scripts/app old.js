const { title } = require("process");
const { callbackify } = require("util");
const { STATUS_CODES } = require("http");
const e = require("express");



//add blue predivtion arrow as same button as green/red arrow
//add key



console.log(nytData);
var mapUSA;
var currState;
var currStateCoords;
var currStateData = [];
var pathArr;
var contents = [];
var dataState = [];
var dates;
var nytState;
var cases;
var blankArr = [];
var x = 0;


function initMapUSA() {
  const mapUSA = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.712162, lng: -95.165789 },
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    zoom: 4.3,
    mapId: 'f68311c1c85e61',
  });


//Creates state
for (var i = 0; i < state.length; i++) {
    currState = state[i]["state"];
    const polygon = new google.maps.Polygon({
      id: `${currState}`,
      path: state[i]["path"],
      geodesic: true,
      strokeColor: "#0099ff",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: "#0099ff",
      fillOpacity: 0.25
    });
    polygon.setMap(mapUSA);
    google.maps.event.addListener(polygon, `mouseover`, function(event) {
      console.log(this.id);
// connect each state outline to the creation of the icon and info
    });
    infowindow = new google.maps.InfoWindow();
  }
  sortData();
};

function sortData () {
  console.log(nytData);
  
  var stateData = [];
  var i = 0;
  //concat??
  
  for (i; i < state.length; i++) {
    stateData = [];
    currState = state[i]["state"];
    currStateCoords = state[i]["center"];

    $.each(nytData, function(key, value) {
      if (value.state === currState) {
        stateData.push(value)
      }
    });
//Gets last few(2) of cases to calculate
var length = stateData.length;
    var toCalc = stateData.slice((length -20), length);
    console.log(toCalc)
    if (toCalc[18]["cases"] < toCalc[19]["cases"]) {
      console.log(toCalc[19]["state"] + " rise");
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
    } else if (toCalc[18]["cases"] > toCalc[19]["cases"]) {
      console.log(toCalc[19]["state"] + " fall");
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(currStateCoords),
        map: mapUSA,
        title: currState,
        content: stateData,
        icon: {
          strokeColor: "#FF0000",
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale: 2
        }
      });
      
    };
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(
        '<btn >Graph</btn>'
      );
      infowindow.open(infowindow, this);     
    });
    var infoData;
    google.maps.event.addListener(marker, `click`, function () {
      var current = this.title;
      // $.each(nytData, function(index, item) { 
      //   if (item.state === current) {
      //     console.log(item);
      //     infoData += JSON.stringify(item)
      //   }
      // });
      infowindow.setContent(`<div id="${currState}Chart"/>`);
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      toCalc;
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable([
        [`Date`, `Cases`, `Deaths`],
      ]);
      data.addRows(toCalc)
      for (var d = 0; d < 20; d++) {
        data.addRows([
          [toCalc],
        ]);
      };
      var options = {
        title: "Cases"
      };
      // Instantiate and draw the chart.
      var chart = new google.visualization.AreaChart(document.getElementById(`${currState}Chart`));
      chart.draw(data, options);
    }//drawChart()
      infowindow.open(marker, this);
      infoData = [];
    });
    console.log(stateData)



    
  }//for loop
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
    // var marker = new google.maps.Marker({
    // });
    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(currStateCoords),
    //   map: mapUSA,
    //   title: currState,
    //   content: value,
    //   icon: {
    //     strokeColor: "#FF0000",
    //     path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    //     scale: 2
    //   }
    // });
    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(currStateCoords),
    //   map: mapUSA,
    //   title: currState,
    //   content: `test`,
    //   icon: {
    //     strokeColor: "#00FF00",
    //     path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    //     scale: 2
    //   }
    // });
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
};//sortData()
