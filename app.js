var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.471, lng: -120.635 },
        zoom: 6.5
    });
    // Load GeoJSON.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
  var georssLayer = new google.maps.KmlLayer({
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Map_of_Washington_counties%2C_blank.svg'
  });
  georssLayer.setMap(map);
    var drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);
    
//Adams County
    var Adams;
    var adamsCoords = [
        { lat: 47.259, lng: -117.96},
        { lat: 46.916, lng: -117.96},
        { lat: 46.783, lng: -118.02},
        { lat: 46.74, lng: -118.21},
        { lat: 46.739, lng: -119.368},
        { lat: 46.91, lng: -119.367},
        { lat: 46.91, lng: -118.98},
        { lat: 47.26, lng: -118.977},
        { lat: 47.259, lng: -117.96}
    ];

//Asotin County
    var Asotin;
    var asotinCoords = [
        { lat:46.430165, lng: -117.057813},
        { lat: 46.423572, lng: -117.036569},
        { lat: 46.380129, lng: -117.046078},
        { lat: 46.365778, lng: -117.063908},
        { lat: 46.365778, lng: -117.063908},
        { lat: 46.335831, lng: -117.023494},
        { lat: 46.296014, lng: -116.986052},
        { lat: 46.166512, lng: -116.920677},
        { lat: 46.087840, lng: -116.982486},
        { lat: 45.996670, lng: -116.918894},
        { lat: 45.998798, lng: -117.479992},
        { lat: 46.121006, lng: -117.479992},
        { lat: 46.123205, lng: -117.419700},
        { lat: 46.384315, lng: -117.418113},
        { lat: 46.383221, lng: -117.399073},
        { lat: 46.397448, lng: -117.400660},
        { lat: 46.398542, lng: -117.354648},
        { lat: 46.411550, lng: -117.353053},
        { lat: 46.412497, lng: -117.230831},
        { lat: 46.462656, lng: -117.228084},
        { lat: 46.445626, lng: -117.206111},
        { lat: 46.420935, lng: -117.201797},
        { lat: 46.430165, lng: -117.057813}
    ];
    
//Benton County
    var Benton;
    var bentonCoords = [
        { lat: 46.728435, lng: -119.517887},
        { lat: 46.527260, lng: -119.271607},
        { lat: 46.260851, lng: -119.243090},
        { lat: 46.180136, lng: -119.027918},
        { lat: 46.065768, lng: -118.953577},
        { lat: 45.934668, lng: -119.170922},
        { lat: 45.912723, lng: -119.513445},
        { lat: 45.931391, lng: -119.594636},
        { lat: 45.853049, lng: -119.758580},
        { lat: 45.846232, lng: -119.866245},
        { lat: 46.628977, lng: -119.873586},
        { lat: 46.648297, lng: -119.697407},
        { lat: 46.639898, lng: -119.652139},
        { lat: 46.728435, lng: -119.517887}
    ];

//Chelan County
    var Chelan;
    var chelanCoords = [

    ];



    var WACoords = [adamsCoords, asotinCoords, bentonCoords, chelanCoords];
    var WACounties = [Adams, Asotin, Benton, Chelan];
    var countyNum = WACoords.length;
    var loopNum = 0;
    while (countyNum > loopNum) {
        WACounties[loopNum] = new google.maps.Polygon({
            path: WACoords[loopNum],
            strokeColor: "#fc0303",
            strokeWeight: 1,
            fillColor: "#FFFFFF",
        });
        WACounties[loopNum].setMap(map);
        loopNum++;
    };
}





// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBznGCt2XVSSEvRYuEkZSgtVCYfWkzUJbA&callback=initMap';
script.defer = true;
script.async = true;


//in LatLng

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);