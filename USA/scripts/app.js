const { title } = require("process");
const { callbackify } = require("util");
const { STATUS_CODES } = require("http");
const e = require("express");

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
var x = 0;

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
    })
//Gets last few 2 of cases to calculate
    var toCalc = stateData.slice((stateData.length -2), stateData.length);
    if (toCalc[0]["cases"] < toCalc[1]["cases"]) {
      console.log(toCalc[0]["state"] + " rise");
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
    } else if (toCalc[0]["cases"] > toCalc[1]["cases"]) {
      console.log(toCalc[0]["state"] + " fall");
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
      infowindow.setContent(this.title + "Graph with last few days of cases" + this.title + ".");
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
      infowindow.setContent(`<div id="myPieChart"/>`);
      google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
      ]);

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
      chart.draw(data, null);
    }
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
