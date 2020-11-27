const { title } = require("process");
const { callbackify } = require("util");
const { STATUS_CODES } = require("http");
const e = require("express");
const { info } = require("console");
const { get, map } = require("jquery");
var fs = require(`fs`);



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
var selected;



function initMapUSA() {
  const mapUSA = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50, lng: -100.165789 },
    // disableDefaultUI: true,
    // gestureHandling: 'none',
    // zoomControl: false,
    zoom: 3,
    mapId: 'f68311c1c85e61',
  });
  var select = document.getElementById("stateControl"); 
  select.addEventListener(`click`, function() {
    location.hash = document.getElementById("stateControl");
    locHash = location.hash;
    locHash = locHash.substring(1);
    
    // counties(locHash);
    select = locHash;
  })
  var att = document.createAttribute("class");
  const infowindow = new google.maps.InfoWindow();
  //Creates state
  var stateData = [];
  for (var i = 0; i < state.length; i++) {
    currState = state[i]["state"];
    currStateCoords = state[i]["center"];
    select.innerHTML += `<a class="dropdown-item" value="${currState}" href="#${currState}">${currState}<a>`;
    // select.setAttributeNode(att)
    $.each(nytData, function(key, value) {
      if (value.state === currState) {
        stateData.push(value)
      }
    });
    var length = stateData.length;
    var toCalc = stateData.slice((length -20), length);
    console.log(toCalc)
    if (toCalc[18]["cases"] < toCalc[19]["cases"]) {
      console.log(toCalc[19]["state"] + " rise");
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(currStateCoords),
        map: mapUSA,
        title: currState,
        content: `test`,
        icon: {
          strokeColor: "#808080",
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 2
        }
      });
    } else if (toCalc[18]["cases"] > toCalc[19]["cases"]) {
      console.log(toCalc[19]["state"] + " fall");
      const marker = new google.maps.Marker({
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
    const polygon = new google.maps.Polygon({
      id: `${currState}`,
      path: state[i]["path"],
      geodesic: true,
      strokeColor: "#4b2e83",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      visability: true,
      fillColor: "#85754d",
      fillOpacity: 0.25,
    });
    polygon.addListener(`rightclick`, () => {
      infowindow.setContent(polygon.id);
      infowindow.setPosition(polygon["center"])
      infowindow.open();
      polygon.setMap(mapUSA)
    });
    polygon.addListener(`click`, () => {
      console.log(polygon.id);
      polygon.setMap(null);
      for (var s = 0; s < state.length; s++) {
        if (state[s]["state"] === `${polygon.id}`) {
          console.log(state[s]["state"]);
          var polyData = state[s];
//calc rise or fall HERE
          console.log(polyData);
          for (i = 0; i < polyData["countyPath"].length; i++) {
            // console.log(polyData["countyName"][i])
            const polygon = new google.maps.Polygon({
              id: polyData["countyName"][i],
              path: polyData["countyPath"][i],
              zIndex: polyData["countyFips"][i],
              geodesic: true,
              strokeColor: "#4b2e83",
              strokeOpacity: 1.0,
              strokeWeight: 2,
              visability: false,
              fillColor: "#85754d",
              fillOpacity: 0.25
            })
            polygon.addListener(`mouseover`, () => {
              var currCounty = countyData[0][`${polygon.zIndex}`];
              console.log(currCounty)
              infowindow.setContent(polygon.id + `<br><div id="chart"/>`);
              infowindow.setPosition(this.polygon)
              infowindow.open();
              infowindow.setMap(mapUSA)
              google.charts.load('current', {packages: ['corechart']});
              google.charts.setOnLoadCallback(drawChart(currCounty));
              console.log(polygon.zIndex)
            })
            function drawChart(currCounty) {
              var data = new google.visualization.DataTable({
                cols: [
                  {lable: `Date`, type: `date`},
                  {lable: `Cases`, type: `number`}
                ]});
                $.each(currCounty, function(k, v) {
                  var year = k.substring(0,4);
                  var month = k.substring(5,7);
                  var day = k.substring(8,10);
                  var date = year + " " + month + " " + day;
                  console.log(v)
                  data.addRow([new Date(year, month -1, day), v])
                });
              var options = {
                title: `${polygon.id} Daily Cases`,
                hAxis: {title: 'Dates'},
                vAxis: {title: `Cases`},
                width: `100`,
                height: `100`
              };
              var chart = new google.visualization.AreaChart(document.getElementById(`chart`));
              chart.draw(data, options);
            };
            polygon.setMap(mapUSA)
          }
        }

      }
      // counties(polygon);
    });
    polygon.addListener('mouseover', () => {
      console.log(polygon.id);
      $.each(state, function(index, item) {
        if (item.state === polygon.id) {
          
          infowindow.setPosition(item.center);
          infowindow.setContent(item.state + `<br><div id="chart"/>`);
          infowindow.setMap(mapUSA)
          google.charts.load('current', {packages: ['corechart']});
          google.charts.setOnLoadCallback(drawChart);
        }
        function drawChart() {
          var data = new google.visualization.DataTable({
            cols: [
              {lable: `Date`, type: `date`},
              {lable: `Cases`, type: `number`}
            ]});
            $.each(toCalc, function(k, v) {
              var year = v.date.substring(0,4);
              var month = v.date.substring(5,7);
              var day = v.date.substring(8,10);
              var date = year + " " + month + " " + day;
              data.addRow([new Date(year, month -1, day), v.cases])
            });
          var options = {
            title: `${polygon.id} Daily Cases`,
            hAxis: {title: 'Dates'},
            vAxis: {title: `Cases`},
            width: `100`,
            height: `100`
          };
          var chart = new google.visualization.AreaChart(document.getElementById(`chart`));
          chart.draw(data, options);
        };
      });
    });
    polygon.setMap(mapUSA);
  }

  // //Gets counties
  // function counties(polygon) {
  //   var polyId = polygon.id
  //   console.log(polyId)
  //   document.getElementById(`${polyId}`);
  //   // some states don't pass this line
  //   for (var s = 0; s < state.length; s++) {
  //     console.log(polygon.id);
  //     if (state[s]["state"] === `${polygon.id}`) {
  //       console.log(polygon.id);
        
  //       console.log(state[s]["state"]);
  //       var polyData = state[s];
  //       for (i = 0; i < polyData["countyPath"].length; i++) {
  //         const polygon = new google.maps.Polygon({
  //           id: polyData["countyName"][i],
  //           path: polyData["countyPath"][i],
  //           zIndex: polyData["countyFips"][i],
  //           geodesic: true,
  //           strokeColor: "#4b2e83",
  //           strokeOpacity: 1.0,
  //           strokeWeight: 2,
  //           visability: false,
  //           fillColor: "#85754d",
  //           fillOpacity: 0.25
  //         })
  //         polygon.addListener("click", () => {
  //           var fipsCode = polygon.zIndex;
  //           infowindow.setContent(fipsCode);
  //           infowindow.setPosition(polyData["center"])
  //         })
  //         polygon.setMap(mapUSA)
  //         // mapUSA.setCenter(polyData["center"]);
  //         // mapUSA.setZoom(polyData["zoom"]);
  //       };
  //     } else {
  //       s++
  //     };
  //   };
  // };


  // window.addEventListener("hashchange", (HashChangeEvent) =>  {
  //   //set view to that state
  //   var stateHash = location.hash.substr(1);
    
  //   console.log(stateHash);
  //   for (var n = 0; n < state.length; n++) {
  //     if ( stateHash === state[n]["state"]) {
  //       mapUSA.setCenter(state[n]["center"])
  //       mapUSA.setZoom(state[n]["zoom"])
  //     }
  //   }
  // });
};



function sortData () {
  console.log(nytData);
  
  var i = 0;
  //concat??
  
  for (i; i < state.length; i++) {
    stateData = [];
    currState = state[i]["state"];
    var infoData;
    google.maps.event.addListener(marker, `click`, function () {
      var current = this.title;
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
  }
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
};
