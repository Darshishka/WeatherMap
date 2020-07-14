var firebase = require("firebase/app");
require("firebase/storage");

let mysql = require('mysql');
var data1 = [];
var result = [];
//code to run mysql data through
//

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function getBucketMetadata() {
  // Get bucket metadata.
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const bucketName = 'data0331';

  // Get Bucket Metadata
  const [metadata] = await storage.bucket(bucketName).getMetadata();

  for (const [key, value] of Object.entries(metadata)) {
    console.log(`${key}: ${value}`);
  }
}
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '221bBakerStreet!',
    database: 'weathermap',
    multipleStatements: true,
});
var getData = function(callback) {
    var sql = `SELECT * FROM data033120 where id = 1`;
    connection.query(sql, (err, res, fields) => {
        if (err)  return callback(err);
     else
           result.push(res);
           result = JSON.stringify(result);
   callback(null, result);
    });
};


getData(function (err, result) {
    if (err) console.log("Database error!");
    else console.log(result);
    
});

var map;
var infoWindow;
function initMap(result) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.471, lng: -120.635 },
        zoom: 6.5
    });

    // Adams County
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
       var Adams = new google.maps.Polygon({
            path: adamsCoords,
            clickable: true,
            geodesic: true,
        });
        var adamsLine;
        Adams.setMap(map);
    
    
    //Asotin County
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
        var Asotin = new google.maps.Polygon({
            path: asotinCoords,
            clickable: true,
            geodesic: true,
        });
        Asotin.setMap(map);
    
    
    //Benton County
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
        var Benton = new google.maps.Polygon({
            path: bentonCoords,
            clickable: true,
            geodesic: true,
        });
        Benton.setMap(map);
    
    //Chelan County
        var Chelan;
        var chelanCoords = [
    
        ];
    
        var clallamCoords = [
            { lat: 48.427482, lng: -124.780049},
            { lat: 48.183253, lng: -123.537076},
            { lat: 48.143104, lng: -122.938161},
            { lat: 47.865219, lng: -122.953209},
            { lat: 47.865219, lng: -122.953209},
            { lat: 47.887424, lng: -124.813155}
        ];
        var Clallam = new google.maps.Polygon({
            path: clallamCoords,
            clickable: true,
            geodesic: true,
        });
        Clallam.setMap(map);
    
        var clarkCoords = [
            { lat: 46.056445, lng: -122.247909},
            { lat: 45.553855, lng: -122.250656},
            { lat: 45.550971, lng: -122.312454},
            { lat: 45.575007, lng: -122.364639},
            { lat: 45.568278, lng: -122.411331},
            { lat: 45.607681, lng: -122.613204},
            { lat: 45.653776, lng: -122.754653},
            { lat: 45.682566, lng: -122.772506},
            { lat: 45.757352, lng: -122.757400},
            { lat: 45.813853, lng: -122.794479},
            { lat: 45.856909, lng: -122.779373},
            { lat: 45.912355, lng: -122.728561},
            { lat: 45.941012, lng: -122.692855},
            { lat: 45.951952, lng: -122.555387},
            { lat: 45.977823, lng: -122.521889},
            { lat: 45.978254, lng: -122.492113},
            { lat: 45.962733, lng: -122.361223},
            { lat: 45.964458, lng: -122.318420},
            { lat: 46.006699, lng: -122.312217},
            { lat: 46.048046, lng: -122.286783},
            { lat: 46.056445, lng: -122.247909},
        ];
        var Clark = new google.maps.Polygon({
            path: clarkCoords,
            clickable: true,
            geodesic: true,
        });
        Clark.setMap(map);
    
        var columbiaCoords = [
            { lat: 46.617449, lng: -117.851999},
            { lat: 46.566598, lng: -117.854154},
            { lat: 46.470692, lng: -117.864931},
            { lat: 46.471187, lng: -117.737051},
            { lat: 46.442347, lng: -117.737769},
            { lat: 46.439997, lng: -117.738566},
            { lat: 46.441408, lng: -117.717216},
            { lat: 46.397857, lng: -117.717216},
            { lat: 46.395243, lng: -117.698837},
            { lat: 46.383943, lng: -117.696688},
            { lat: 46.383016, lng: -117.674932},
            { lat: 46.337974, lng: -117.674932},
            { lat: 46.337789, lng: -117.613694},
            { lat: 46.123248, lng:-117.613960},
            { lat: 46.001893, lng: -117.606129},
            { lat: 46.001332, lng: -117.992370},
            { lat: 46.206144, lng: -117.990832},
            { lat: 46.209338, lng: -118.113912},
            { lat: 46.294446, lng: -118.115450},
            { lat: 46.297635, lng: -118.243146},
            { lat: 46.558502, lng: -118.241607},
            { lat: 46.561309, lng: -118.227649},
            { lat: 46.591248, lng: -118.227429},
            { lat: 46.555425, lng: -118.171477},
            { lat: 46.572020, lng: -118.089195},
            { lat: 46.583708, lng: -118.003623},
            { lat: 46.617449, lng: -117.851999}
        ];
        var Columbia = new google.maps.Polygon({
            path: columbiaCoords,
            clickable: true,
            geodesic: true,
        });
        Columbia.setMap(map);
    
        var cowlitzCoords = [
            { lat: 46.385669, lng: -123.217104},
            { lat: 46.384963, lng: -122.240806},
            { lat: 46.055400, lng: -122.247682},
            { lat: 46.060495, lng: -122.276836},
            { lat: 46.013457, lng: -122.330776},
            { lat: 45.965486, lng: -122.337387},
            { lat: 45.962422, lng: -122.374847},
            { lat: 45.994580, lng: -122.492369},
            { lat: 45.930757, lng: -122.656166},
            { lat: 45.933311, lng: -122.702440},
            { lat: 45.870441, lng: -122.725944},
            { lat: 45.857143, lng: -122.778095},
            { lat: 46.075146, lng: -122.885334},
            { lat: 46.189674, lng: -123.121847},
            { lat: 46.192725, lng: -123.157838},
            { lat: 46.177977, lng: -123.211457},
            { lat: 46.385669, lng: -123.217104},
        ];
        var Cowlitz = new google.maps.Polygon({
            path: cowlitzCoords,
            clickable: true,
            geodesic: true,
        });
        Cowlitz.setMap(map);
        
        var Douglas;
        var Ferry;
        var Franklin;
        var Garfield;
        var Grant;
        var GraysHarbor;
        var Island;
        var Jefferson;
        var King;
        var Kitsap;
        var Kittitas;
        var Klickitat;
        var Lewis;
        var Lincoln;
        var Mason;
        var Okanogan;
        var Pacific;
        var PendOreille;
        var Pierce;
        var SanJuan;
        var Skagit;
        var Skamania;
        var Snohomish;
        var Spokane;
        var Stevens;
        var Thurston;
        var Wahkiakum;
        var WallaWalla;
        var Whatcom;
        var Whitman;
        var Yakima;
}

// // Attach your callback function to the `window` object
// window.initMap = function() {
//     // JS API is loaded and available
// };



// Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBznGCt2XVSSEvRYuEkZSgtVCYfWkzUJbA&callback=initMap';
// script.defer = true;
// script.async = true;



//in LatLng


// // // Append the 'script' element to 'head'
// document.head.appendChild(script);