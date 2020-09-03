var mysql = require('mysql');

var con = mysql.createConnection({
  root: "localhost",
  user: "root",
  password: "221bBakerStreet!",
  database: "nyt_db"
});

con.connect(function(err) {
  if (err) throw err;
});
con.query("SELECT * FROM data", function (err, result) {
  if (err) throw err;
  console.log("Connected!");
  console.log(result);
});

var mapUSA;
var mapWA;
var infoWindow;
var stateName;
var currState;
var currStateCoords;

//temp var
//TODO: makes givesTo[] including randomized direction and check that counties dont give and recieve 
//todo EXAMPLE: countyA => countyB   countyB =X> countyA
//todo: have versions of data to show what real data could look like


//need:
//[]    length of bordersWith list
//[]    random num of borders to draw line to
//[]    random index num of county to be destCounty looped by the number of random line num
//[]    set lines
//[]    removes start county name from destCounty border list

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
    google.maps.event.addListener(marker, "mouseout", function () {
      infoWindow.close(this.info)
    });  
    marker.setMap(mapUSA);
  }
}