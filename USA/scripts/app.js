const { title } = require("process");
const { callbackify } = require("util");
const { STATUS_CODES } = require("http");
const e = require("express");
const { info } = require("console");
const { get, map } = require("jquery");
var fs = require(`fs`);


nytCounties;
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
  var locHash = window.location.hash;
  window.addEventListener(`load`, () => {
    if (locHash != "") {
      console.log("test")
    }
    locHash = window.location.hash;
    locHash = locHash.substring(1);
    if (locHash === "") {
      document.getElementById("stateControlA").textContent = `Select State...`;
      document.getElementById("countyControlA").style["visibility"] = "hidden";
    } else {
      locHash = locHash.replace("%20", " ")
      document.getElementById("stateControlA").textContent = `${locHash}`;
      document.getElementById("countyControlA").style["visibility"] = "visible";
    }
    
    //go to state from hash
  })
  var selectState = document.getElementById("stateControl"); 
  var selectCounty = document.getElementById("countyControl"); 
  selectState.addEventListener(`click`, function() {
    location.hash = document.getElementById("stateControl");
    locHash = locHash.substring(1);
    locHash = locHash.replace("%20", " ");
    document.getElementById("stateControlA").textContent = `${locHash}`;
    document.getElementById("countyControlA").style["visibility"] = "visible";
    selectState = locHash;
    //go to state selected
  })
  selectCounty.addEventListener(`click`, function() {
    var hashState = document.getElementById("stateControlA").textContent;
    location.hash = document.getElementById("countyControl");
    locHash = locHash.substring(1);
    locHash = locHash.replace("%20", " ")
        $.each(state, function(index, value) {
      if (`${locHash}` === `${value.state}`) {
        console.log(value.state)
        var countyLoad = state[index]["countyName"];
        countyLoad = [...new Set(countyLoad)];
        selectCounty.innerHTML += `<a class="dropdown-item" value="${countyLoad}" href="#${countyLoad}">${countyLoad}<a>`;

        console.log(countyLoad)

      }
    })
    document.getElementById("countyControlA").textContent = `${locHash}`;
    selectCounty = locHash;
    locHash = `${hashState}-${selectCounty}`
    console.log(locHash)
    //go to state selected
  })
  window.onhashchange =  function() {
    locHash = location.hash;
    locHash = locHash.substring(1);
    selectState = locHash;
    document.getElementById("stateControlA").textContent = `${locHash}`;
    document.getElementById("countyControlA").style["visibility"] = "visible";


  }
  var att = document.createAttribute("class");
  const infowindow = new google.maps.InfoWindow();
  //Creates state
  var stateData = [];
  for (var i = 0; i < state.length; i++) {
    currState = state[i]["state"];
    currStateCoords = state[i]["center"];
    selectState.innerHTML += `<a class="dropdown-item" value="${currState}" href="#${currState}">${currState}<a>`;
    // selectState.setAttributeNode(att)
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
          scale: 0
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
      location.hash = polygon.id
      polygon.setMap(null);
      for (var s = 0; s < state.length; s++) {
        if (state[s]["state"] === `${polygon.id}`) {
          console.log(state[s]["state"]);
          var polyData = state[s];
          for (i = 0; i < polyData["countyPath"].length; i++) {
            const polygon = new google.maps.Polygon({
              id: polyData["countyName"][i],
              path: polyData["countyPath"][i],
              zIndex: polyData["countyFips"][i],
              center: polyData[`center`],
              geodesic: true,
              strokeColor: "#4b2e83",
              strokeOpacity: 1.0,
              strokeWeight: 2,
              visability: false,
              fillColor: "#85754d",
              fillOpacity: 0.25
            })
            console.log(polygon.zIndex)
            var fips = polygon.zIndex
            var county = polyData["countyData"][0][fips]
            console.log(county)
            var calc1 = [];
            var calc2 = [];
            $.each(county, function(key, val) {
              calc1.push(val)
              calc2.push(val)
            })
            calc1 = calc1.slice((calc1.length -7), calc1.length);
            calc2 = calc2.slice((calc2.length -14), (calc2.length -7));
            var sum1 = 0;
            var sum2 = 0;
            $.each(calc1, function(x, y) {
              sum1 = sum1 + Number(y);
            })
            $.each(calc2, function(x, y) {
              sum2 = sum2 + Number(y);
            })
            console.log(sum1)
            if (sum2 > sum1) {
              console.log("fall")
              if ((sum2 - sum1) <= 50) {
                polygon.setOptions({fillOpacity: 0.5, fillColor: `#fffb00`})
              }
              if ((sum2 - sum1) <= 100) {
                polygon.setOptions({fillOpacity: 1.0, fillColor: `#00ff15`})
              }
            }else
            if (sum2 < sum1) {
              console.log("rise")
              //if difference 
              if ((sum1 - sum2) <= 50) {
                polygon.setOptions({fillOpacity: 0.5, fillColor: `#ff9900`})
              }
              if ((sum1 - sum2) <= 100) {
                polygon.setOptions({fillOpacity: 1.0, fillColor: `#ff0000`})
              }
            }else {polygon.setOptions({fillOpacity: 0.0})}
            // if (county === undefined) {
            //   polygon.setOptions({fillOpacity: 0.0})
            // }
            polygon.addListener(`mouseover`, () => {
              var fips = polygon.zIndex;
              // console.log(fips);
              // console.log(polyData);
              var currCounty = polyData["countyData"][0][fips];
              // console.log(currCounty);
              infowindow.setContent(polygon.id + `<br><div id="chartCounty"/>`);
              infowindow.setPosition(polygon.center)
              infowindow.open();
              infowindow.setMap(mapUSA)
              google.charts.load('current', {packages: ['corechart']});
              google.charts.setOnLoadCallback(drawChart(currCounty));
              // console.log(fips)
              // console.log(currCounty)
              
              function drawChart(currCounty, fips) {
                var data = new google.visualization.DataTable();
                data.addColumn('date', "Date");
                data.addColumn('number', "Pedicted Cases");
                $.each(currCounty, function(v, k) {
                  var year = v.substring(0,4);
                  var month = v.substring(5,7);
                  var day = v.substring(8,10);
                  data.addRow([new Date(year, month, day), Number(k)])
                });
                console.log(data.getNumberOfRows())
                $.each(nytCounties, function(index, value) {
                  if (value.fips === fips) {
                    
                  }
                })
                // data.addColumn('number', "Pedicted Cases");
                var options = {
                  title: `${polygon.id} Daily Cases`,
                  hAxis: {title: 'Dates'},
                  vAxis: {title: `Cases`},
                  width: `150`,
                  height: `150`
                };
                
                var chart = new google.visualization.AreaChart(document.getElementById('chartCounty'));
                chart.draw(data, options);
              };
            })
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
