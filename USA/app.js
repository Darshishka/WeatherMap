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
    "borders": [
      "Mississippi",
      "Tennessee",
      "Georgia",
      "Florida"
    ]
  },
  Alaska = {
    "center": {lat: 66.160507, lng:	-153.369141},
    "borders": null
  },
  Arizona = {
    "center": {lat: 34.048927, lng:	-111.093735},
    "border": [
      "California",
      "Nevada",
      "Utah",
      "NewMexico",
      "Colorado"
    ]
  },
  Arkansas ={
    "center": {lat: 34.799999, lng:	-92.199997},
    "border": [
      "Oklahoma",
      "Missouri",
      "Tennessee",
      "Mississippi",
      "Louisiana",
      "Texas"
    ]
  },
  California ={
    "center": {lat: 36.778259, lng: -119.417931},
    "border":[
      "Oregon",
      "Nevada",
      "Arizona"
    ]
  },
  Colorado ={
    "center": {lat: 39.113014, lng:	-105.358887},
    "border":[
      "Utah",
      "Wyoming",
      "Kansas",
      "Oklahoma",
      "NewMexico",
      "Nebraska",
    ]
  },
  Connecticut ={
    "center": {lat: 41.599998, lng:	-72.699997},
    "border":[
      "Massachusetts",
      "NewYork",
      "RhodeIsland"
    ]
  },
  Delaware ={
    "center": {lat: 39.000000, lng:	-75.500000},
    "border":[
      "Maryland",
      "NewJersey",
      "Pennsylvania"
    ]
  },
  Florida ={
    "center": {lat: 27.994402, lng:	-81.760254},
    "border":[
      "Alabama",
      "Georgia"
    ]
  },
  Georgia ={
    "center": {lat: 33.247875, lng:	-83.441162},
    "border":[
      "Alabama",
      "Tennessee",
      "NorthCarolina",
      "Florida"
    ]
  },
  Hawaii ={
    "center": {lat: 19.741755, lng:	-155.844437},
    "border": null
  },
  Idaho ={
    "center": {lat: 44.068203, lng:	-114.742043},
    "border":[
      "Washington",
      "Oregon",
      "Nevada",
      "Utah",
      "Wyoming",
      "Montana"
    ]
  },
  Illinois ={
    "center": {lat: 40.000000, lng:	-89.000000},
    "border":[
      "Wisconsin",
      "Michigan",
      "Indiana",
      "Kentucky",
      "Missouri",
      "Iowa"
    ]
  },
  Indiana ={
    "center": {lat: 40.273502, lng:	-86.126976},
    "border":[
      "Illinois",
      "Michigan",
      "Ohio",
      "Kentucky"
    ]
  },
  Iowa ={
    "center": {lat: 42.032974, lng:	-93.581543},
    "border":[
      "Minnesota",
      "Wisconsin",
      "Illinois",
      "Missouri",
      "Nebraska",
      "SouthDakota"
    ]
  },
  Kansas ={
    "center": {lat: 38.500000, lng:	-98.000000},
    "border":[
      "Nebraska",
      "Missouri",
      "Oklahoma",
      "Colorado"
    ]
  },
  Kentucky ={
    "center": {lat: 37.839333, lng:	-84.270020},
    "border":[
      "Indiana",
      "Ohio",
      "WestVirginia",
      "Virginia",
      "Tennessee",
      "Missouri"
    ]
  },
  Louisiana ={
    "center": {lat: 30.391830, lng:	-92.329102},
    "border":[
      "Texas",
      "Arkansas",
      "Mississippi"
    ]
  },
  Maine ={
    "center": {lat: 45.367584, lng:	-68.972168},
    "border":[
      "NewHampshire"
    ]
  },
  Maryland ={
    "center": {lat: 39.045753, lng:	-76.641273},
    "border":[
      "Pennsylvania",
      "Virginia",
      "WestVirginia",
      "Delaware"
    ]
  },
  Massachusetts ={
    "center": {lat: 42.407211, lng:	-71.382439},
    "border":[
      "Vermont",
      "NewHampshire",
      "NewYork",
      "Connecticut",
      "RhodeIsland"
    ]
  },
  Michigan ={
    "center": {lat: 44.182205, lng:	-84.506836},
    "border":[
      "Wisconsin",
      "Indiana",
      "Ohio"
    ]
  },
  Minnesota ={
    "center": {lat: 46.392410, lng:	-94.636230},
    "border":[
      "SouthDakota",
      "NorthDakota",
      "Wisconsin",
      "Iowa"
    ]
  },
  Mississippi ={
    "center": {lat: 33.000000, lng:	-90.000000},
    "border":[
      "Tennessee",
      "Alabama",
      "Louisiana",
      "Arkansas"
    ]
  },
  Missouri ={
    "center": {lat: 38.573936, lng:	-92.603760},
    "border":[
      "Iowa",
      "Illinois",
      "Kentucky",
      "Tennessee",
      "Arkansas",
      "Oklahoma",
      "Kansas",
      "Nebraska"
    ]
  },
  Montana ={
    "center": {lat: 46.965260, lng:	-109.533691},
    "border":[
      "NorthDakota",
      "SouthDakota",
      "Wyoming",
      "Idaho"
    ]
  },
  Nebraska ={
    "center": {lat: 41.500000, lng:	-100.000000},
    "border":[
      "SouthDakota",
      "Iowa",
      "Missouri",
      "Kansas",
      "Oklahoma",
      "Colorado",
      "Wyoming"
    ]
  },
  Nevada ={
    "center": {lat: 39.876019, lng:	-117.224121},
    "border":[
      "Oregon",
      "Idaho",
      "Utah",
      "Arizona",
      "California"
    ]
  },
  NewHampshire ={
    "center": {lat: 44.000000, lng:	-71.500000},
    "border":[
      "Maine",
      "Vermont",
      "Massachusetts"
    ]
  },
  NewJersey ={
    "center": {lat: 39.833851, lng:	-74.871826},
    "border":[
      "Delaware",
      "NewYork",
      "Pennsylvania"
    ]
  },
  NewMexico ={
    "center": {lat: 34.307144, lng:	-106.018066},
    "border":[
      "Colorado",
      "Oklahoma",
      "Texas",
      "Arizona"
    ]
  },
  NewYork ={
    "center": {lat: 43.000000, lng:	-75.000000},
    "border":[
      "Connecticut",
      "Massachusetts",
      "NewJersey",
      "Pennsylvania",
      "Vermont"
    ]
  },
  NorthCarolina ={
    "center": {lat: 35.782169, lng:	-80.793457},
    "border":[
      "Virginia",
      "SouthCarolina",
      "Tennessee"
    ]
  },
  NorthDakota ={
    "center": {lat: 47.650589, lng:	-100.437012},
    "border":[
      "Montana",
      "SouthDakota",
      "Minnesota"
    ]
  },
  Ohio ={
    "center": {lat: 40.367474, lng:	-82.996216},
    "border":[
      "Michigan",
      "Pennsylvania",
      "WestVirginia",
      "Kentucky",
      "Indiana"
    ]
  },
  Oklahoma ={
    "center": {lat: 36.084621, lng:	-96.921387},
    "border":[
      "Colorado",
      "Kansas",
      "Missouri",
      "Arkansas",
      "Texas",
      "NewMexico"
    ]
  },
  Oregon ={
    "center": {lat: 44.000000, lng:	-120.500000},
    "border":[
      "Washington",
      "Idaho",
      "Nevada",
      "California"
    ]
  },
  Pennsylvania ={
    "center": {lat: 41.203323, lng:	-77.194527},
    "border":[
      "NewYork",
      "NewJersey",
      "Delaware",
      "Maryland",
      "WestVirginia",
      "Ohio"
    ]
  },
  RhodeIsland ={
    "center": {lat: 41.700001, lng:	-71.500000},
    "border":[
      "Connecticut",
      "Massachusetts"
    ]
  },
  SouthCarolina ={
    "center": {lat: 33.836082, lng:	-81.163727},
    "border":[
      "NorthCarolina",
      "Georgia"
    ]
  },
  SouthDakota ={
    "center": {lat: 44.500000, lng:	-100.000000},
    "border":[
      "NorthDakota",
      "Minnesota",
      "Iowa",
      "Nebraska",
      "Wyoming",
      "Montana"
    ]
  },
  Tennessee ={
    "center": {lat: 35.860119, lng:	-86.660156},
    "border":[
      "Kentucky",
      "Virginia",
      "WestVirginia",
      "Georgia",
      "Alabama",
      "Mississippi",
      "Arkansas",
      "Missouri"
    ]
  },
  Texas ={
    "center": {lat: 31.000000, lng:	-100.000000},
    "border":[
      "Oklahoma",
      "Arkansas",
      "Louisiana",
      "NewMexico"
    ]
  },
  Utah ={
    "center": {lat: 39.419220, lng:	-111.950684},
    "border":[
      "Idaho",
      "Wyoming",
      "Colorado",
    ]
  },
  Vermont ={
    "center": {lat: 44.000000, lng: -72.699997},
    "border":[
      "NewHampshire",
      "Massachusetts",
      "NewYork"
    ]
  },
  Virginia ={
    "center": {lat: 37.926868, lng:	-78.024902},
    "border":[
      "WestVirginia",
      "Maryland",
      "NorthCarolina",
      "Tennessee",
      "Kentucky"
    ]
  },
  Washington ={
    "center": {lat: 47.751076, lng:	-120.740135},
    "border":[
      "Oregon",
      "Idaho"
    ]
  },
  WestVirginia ={
    "center": {lat: 39.000000, lng: -80.500000},
    "border":[
      "Pennsylvania",
      "Maryland",
      "Virginia",
      "Kentucky",
      "Ohio"
    ]
  },
  Wisconsin ={
    "center": {lat: 44.500000, lng: -89.500000},
    "border":[
      "Michigan",
      "Minnesota",
      "Iowa",
      "Illinois"
    ]
  },
  Wyoming ={
    "center": {lat:	43.075970, lng:	-107.290283},
    "border":[
      "Montana",
      "SouthDakota",
      "Nebraska",
      "Colorado",
      "Utah",
      "Idaho"
    ]
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
var mapIdCode = f68311c1c85e61
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
    currState = state[i];
    var markerSymbol = {
      icon: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
      strokeColor: "midnightblue",
      strokeOpacity: 1
    };
    var marker = new google.maps.Marker({
      position: state[i]["center"],
      strokeOpacity: 0,
      lable: currState,
      map: mapUSA,
      icons: [
        {
          icon: markerSymbol,
          size: 1,
        }],
    });
    var infoWindow = new google.maps.InfoWindow({
      content: currState
    });
    marker.addListener("click",() => {
      infoWindow.open(mapUSA, marker)
    });
    marker.setMap(mapUSA);
  }    
}



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