var mapUSA;
var mapWA;
var infoWindow;
//temp var
//TODO: makes givesTo[] including randomized direction and check that counties dont give and recieve 
//todo EXAMPLE: countyA => countyB   countyB =X> countyA
//todo: have versions of data to show what real data could look like
var state = [
  Alabama = {
    "center": {lat: 32.318230, lng:	-86.902298},
  },
  Alaska = {
    "center": {lat: 66.160507, lng:	-153.369141}
  },
  Arizona = {
    "center": {lat: 34.048927, lng:	-111.093735}
  },
  Arkansas ={
    "center": {lat: 34.799999, lng:	-92.199997}
  },
  California ={
    "center": {lat: 36.778259, lng: -119.417931}
  },
  Colorado ={
    "center": {lat: 39.113014, lng:	-105.358887}
  },
  Connecticut ={
    "center": {lat: 41.599998, lng:	-72.699997}
  },
  Delaware ={
    "center": {lat: 39.000000, lng:	-75.500000}
  },
  Florida ={
    "center": {lat: 27.994402, lng:	-81.760254}
  },
  Georgia ={
    "center": {lat: 33.247875, lng:	-83.441162}
  },
  Hawaii ={
    "center": {lat: 19.741755, lng:	-155.844437}
  },
  Idaho ={
    "center": {lat: 44.068203, lng:	-114.742043}
  },
  Illinois ={
    "center": {lat: 40.000000, lng:	-89.000000}
  },
  Indiana ={
    "center": {lat: 40.273502, lng:	-86.126976}
  },
  Iowa ={
    "center": {lat: 42.032974, lng:	-93.581543}
  },
  Kansas ={
    "center": {lat: 38.500000, lng:	-98.000000}
  },
  Kentucky ={
    "center": {lat: 37.839333, lng:	-84.270020}
  },
  Louisiana ={
    "center": {lat: 30.391830, lng:	-92.329102}
  },
  Maine ={
    "center": {lat: 45.367584, lng:	-68.972168}
  },
  Maryland ={
    "center": {lat: 39.045753, lng:	-76.641273}
  },
  Massachusetts ={
    "center": {lat: 42.407211, lng:	-71.382439}
  },
  Michigan ={
    "center": {lat: 44.182205, lng:	-84.506836}
  },
  Minnesota ={
    "center": {lat: 46.392410, lng:	-94.636230}
  },
  Mississippi ={
    "center": {lat: 33.000000, lng:	-90.000000}
  },
  Missouri ={
    "center": {lat: 38.573936, lng:	-92.603760}
  },
  Montana ={
    "center": {lat: 46.965260, lng:	-109.533691}
  },
  Nebraska ={
    "center": {lat: 41.500000, lng:	-100.000000}
  },
  Nevada ={
    "center": {lat: 39.876019, lng:	-117.224121}
  },
  NewHampshire ={
    "center": {lat: 44.000000, lng:	-71.500000}
  },
  NewJersey ={
    "center": {lat: 39.833851, lng:	-74.871826}
  },
  NewMexico ={
    "center": {lat: 34.307144, lng:	-106.018066}
  },
  NewYork ={
    "center": {lat: 43.000000, lng:	-75.000000}
  },
  NorthCarolina ={
    "center": {lat: 35.782169, lng:	-80.793457}
  },
  NorthDakota ={
    "center": {lat: 47.650589, lng:	-100.437012}
  },
  Ohio ={
    "center": {lat: 40.367474, lng:	-82.996216}
  },
  Oklahoma ={
    "center": {lat: 36.084621, lng:	-96.921387}
  },
  Oregon ={
    "center": {lat: 44.000000, lng:	-120.500000}
  },
  Pennsylvania ={
    "center": {lat: 41.203323, lng:	-77.194527}
  },
  RhodeIsland ={
    "center": {lat: 41.700001, lng:	-71.500000}
  },
  SouthCarolina ={
    "center": {lat: 33.836082, lng:	-81.163727}
  },
  SouthDakota ={
    "center": {lat: 44.500000, lng:	-100.000000}
  },
  Tennessee ={
    "center": {lat: 35.860119, lng:	-86.660156}
  },
  Texas ={
    "center": {lat: 31.000000, lng:	-100.000000}
  },
  Utah ={
    "center": {lat: 39.419220, lng:	-111.950684}
  },
  Vermont ={
    "center": {lat: 44.000000, lng: -72.699997}
  },
  Virginia ={
    "center": {lat: 37.926868, lng:	-78.024902}
  },
  Washington ={
    "center": {lat: 47.751076, lng:	-120.740135}
  },
  WestVirginia ={
    "center": {lat: 39.000000, lng: -80.500000}
  },
  Wisconsin ={
    "center": {lat: 44.500000, lng: -89.500000}
  },
  Wyoming ={
    "center": {lat:	43.075970, lng:	-107.290283}
  }
];

//need:
//[]    length of bordersWith list
//[]    random num of borders to draw line to
//[]    random index num of county to be destCounty looped by the number of random line num
//[]    set lines
//[]    removes start county name from destCounty border list

var stateName;
var currState;

function initMapUSA() {
  
  // mapUSA = new google.maps.Map(document.getElementById("map"), {
  //   center: { lat: 39.712162, lng: -95.165789 },
  //   disableDefaultUI: true,
  //   gestureHandling: 'none',
  //   zoomControl: false,
  //   zoom: 4.3
  // });
  
  
  // var src = 'https://www.nohrsc.noaa.gov/data/vector/master/st_us.kmz';
  // var kmlLayer = new google.maps.KmlLayer(src, {
  //   suppressInfoWindows: false,
  //   preserveViewport: true,
  //   map: mapUSA
  // });


  
//   for (i = 0; i < state.length; i++) {
//     currState = state[i];
//     // console.log(currState);
//     stateName = state[i];
//     var lineSymbol = {
//       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
//       strokeColor: "midnightblue",
//       strokeOpacity: 1
//     };
// //fixme temp for()

// // console.log(state); 
//     var destState = {lat: 47.764550, lng: -120.359167};


    
//     var line = new google.maps.Polyline({
//       position: state[i]["center"],
//       strokeOpacity: 0,
//       path: [
//         state[i]["center"], 
//         destState
//       ],
//       map: mapUSA,
//       title: stateName,
//       icons: [
//         {
//           icon: lineSymbol,
//           offset: "100%",
//           size: 1,
//           repeat: "50px"
//         }],
//     }); 
//     animateCircle(line);
//     function animateCircle(line) {
//       var count = 0;
//       window.setInterval(function() {
//         count = (count + 1) % 200;

//         var icons = line.get('icons');
//         icons[0].offset = (count / 2) + '%';
//         line.set('icons', icons);
// //note 20 is where the magnatude will be
//       }, 20);
//     }
//     line.setMap(mapUSA);
//   }    
//   var value = Object.values(currState);
//   // console.log(currState)
}

function initMapWA() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 47.7511, lng: -120.7401},
    zoom: 6
    });
  for (var i = 1; i < GarfieldPath.length; i++) {
    console.log(GarfieldPath[i])
    i++;
  };
//sortening code
  for (var i = 0; i < Wash.length; i++) {
    var name = Wash[i];
    if (phasesWA[i].phase === 1) {
      var color = "#FF0000";
    };
    if (phasesWA[i].phase === 2) {
      var color = "#FF9400";
    };
    if (phasesWA[i].phase === 3) {
      var color = "#FFC000";
    };
    if (phasesWA[i].phase === 4) {
      var color = "#29FF00";
    };
    name = new google.maps.Polygon({
      paths: pathsWA[i],
      strokeColor: `${color}`,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35
    });
    name.setMap(map);
  };  
};


// Attach your callback function to the `window` object
// window.initMap = function() {
    
// };



// Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBznGCt2XVSSEvRYuEkZSgtVCYfWkzUJbA&callback=initMap';
// script.defer = true;
// script.async = true;



// // // Append the 'script' element to 'head'
// document.head.appendChild(script);