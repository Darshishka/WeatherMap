var map;
var infoWindow;    
var WaLatLng = [];
var WaCounties = []; 
var dataWA0331 = [
{
    "num": 53061,
    "county name": "Snohomish",
    "state": "Washington",
    "center_latitude": 48.070464,
    "center_longitude": -121.936784,
    "direction_real": -0.26415161657732256,
    "direction_imaginary": -0.010234562353389265,
    "magnitude": 1227
  },
  {
    "num": 53063,
    "county name": "Spokane",
    "state": "Washington",
    "center_latitude": 47.620375,
    "center_longitude": -117.40337099999999,
    "direction_real": 0.27142852341586376,
    "direction_imaginary": 0.07065574910637196,
    "magnitude": 140
  },
  {
    "num": 53033,
    "county name": "King",
    "state": "Washington",
    "center_latitude": 47.490598999999996,
    "center_longitude": -121.833996,
    "direction_real": 0.060349895069705894,
    "direction_imaginary": -0.10849008499160107,
    "magnitude": 2332
  },
  {
    "num": 53071,
    "county name": "Walla Walla",
    "state": "Washington",
    "center_latitude": 46.254606,
    "center_longitude": -118.48037,
    "direction_real": -0.0016086212959010027,
    "direction_imaginary": -0.08772649516770059,
    "magnitude": 7
  },
  {
    "num": 53007,
    "county name": "Chelan",
    "state": "Washington",
    "center_latitude": 47.860974,
    "center_longitude": -120.619041,
    "direction_real": 0.2135035331509556,
    "direction_imaginary": -0.06365801122513659,
    "magnitude": 15
  },
  {
    "num": 53011,
    "county name": "Clark",
    "state": "Washington",
    "center_latitude": 45.77173,
    "center_longitude": -122.48595300000001,
    "direction_real": 0.053708760684784806,
    "direction_imaginary": -0.07017882610064419,
    "magnitude": 116
  },
  {
    "num": 53031,
    "county name": "Jefferson",
    "state": "Washington",
    "center_latitude": 47.805708,
    "center_longitude": -123.52705700000001,
    "direction_real": 0.08942433125081095,
    "direction_imaginary": 0.04671269559503344,
    "magnitude": 14
  },
  {
    "num": 53053,
    "county name": "Pierce",
    "state": "Washington",
    "center_latitude": 47.051413000000004,
    "center_longitude": -122.15324,
    "direction_real": 0.21299429929536018,
    "direction_imaginary": -0.05834886324927879,
    "magnitude": 353
  },
  {
    "num": 53037,
    "county name": "Kittitas",
    "state": "Washington",
    "center_latitude": 47.124441,
    "center_longitude": -120.676709,
    "direction_real": 0.039176507725159126,
    "direction_imaginary": -0.0917834561269828,
    "magnitude": 8
  },
  {
    "num": 53035,
    "county name": "Kitsap",
    "state": "Washington",
    "center_latitude": 47.639595,
    "center_longitude": -122.649634,
    "direction_real": -0.099045561553325,
    "direction_imaginary": -0.1693368518180165,
    "magnitude": 63
  },
  {
    "num": 53057,
    "county name": "Skagit",
    "state": "Washington",
    "center_latitude": 48.493292,
    "center_longitude": -121.81577,
    "direction_real": 0.013890248774458769,
    "direction_imaginary": 0.011427293625146717,
    "magnitude": 101
  },
  {
    "num": 53073,
    "county name": "Whatcom",
    "state": "Washington",
    "center_latitude": 48.842653000000006,
    "center_longitude": -121.836432,
    "direction_real": 0.3033310399876825,
    "direction_imaginary": 0.016472790803376824,
    "magnitude": 116
  },
  {
    "num": 53029,
    "county name": "Island",
    "state": "Washington",
    "center_latitude": 48.158553999999995,
    "center_longitude": -122.670649,
    "direction_real": -0.06355001827763829,
    "direction_imaginary": -0.18991948871264697,
    "magnitude": 106
  },
  {
    "num": 53067,
    "county name": "Thurston",
    "state": "Washington",
    "center_latitude": 46.935821999999995,
    "center_longitude": -122.830152,
    "direction_real": -0.2883589534019393,
    "direction_imaginary": 0.010797694679375525,
    "magnitude": 48
  },
  {
    "num": 53013,
    "county name": "Columbia",
    "state": "Washington",
    "center_latitude": 46.29285,
    "center_longitude": -117.911634,
    "direction_real": -0.008646744014882302,
    "direction_imaginary": -0.001256376261913772,
    "magnitude": 1
  },
  {
    "num": 53027,
    "county name": "Grays Harbor",
    "state": "Washington",
    "center_latitude": 47.113732,
    "center_longitude": -123.82673500000001,
    "direction_real": 0.0208812549041113,
    "direction_imaginary": 0.0027613222930114034,
    "magnitude": 1
  },
  {
    "num": 53077,
    "county name": "Yakima",
    "state": "Washington",
    "center_latitude": 46.456558,
    "center_longitude": -120.740145,
    "direction_real": 0.4038638854381844,
    "direction_imaginary": -0.17507142946728038,
    "magnitude": 147
  },
  {
    "num": 53025,
    "county name": "Grant",
    "state": "Washington",
    "center_latitude": 47.213633,
    "center_longitude": -119.46778799999998,
    "direction_real": 0.06370518279663884,
    "direction_imaginary": -0.11398805004589718,
    "magnitude": 62
  },
  {
    "num": 53039,
    "county name": "Klickitat",
    "state": "Washington",
    "center_latitude": 45.870446,
    "center_longitude": -120.77930500000001,
    "direction_real": -0.0033724836232096322,
    "direction_imaginary": 0.005739105017433133,
    "magnitude": 7
  },
  {
    "num": 53041,
    "county name": "Lewis",
    "state": "Washington",
    "center_latitude": 46.580071000000004,
    "center_longitude": -122.377444,
    "direction_real": 0.05734322178503248,
    "direction_imaginary": 0.014556459201031657,
    "magnitude": 10
  },
  {
    "num": 53043,
    "county name": "Lincoln",
    "state": "Washington",
    "center_latitude": 47.582743,
    "center_longitude": -118.41769199999999,
    "direction_real": -0.0015394006194640042,
    "direction_imaginary": 0.009086557087684355,
    "magnitude": 1
  },
  {
    "num": 53021,
    "county name": "Franklin",
    "state": "Washington",
    "center_latitude": 46.53458,
    "center_longitude": -118.906944,
    "direction_real": -0.12443224495194727,
    "direction_imaginary": -0.02452798122911304,
    "magnitude": 33
  },
  {
    "num": 53045,
    "county name": "Mason",
    "state": "Washington",
    "center_latitude": 47.354126,
    "center_longitude": -123.17385,
    "direction_real": 0.13849401065796485,
    "direction_imaginary": -0.04369767004174463,
    "magnitude": 2
  },
  {
    "num": 53005,
    "county name": "Benton",
    "state": "Washington",
    "center_latitude": 46.228125,
    "center_longitude": -119.516659,
    "direction_real": -0.07413710806909535,
    "direction_imaginary": 0.16499642019568483,
    "magnitude": 101
  },
  {
    "num": 53009,
    "county name": "Clallam",
    "state": "Washington",
    "center_latitude": 48.110903,
    "center_longitude": -123.88986000000001,
    "direction_real": -0.005788644116535124,
    "direction_imaginary": -0.00959629840631493,
    "magnitude": 6
  },
  {
    "num": 53015,
    "county name": "Cowlitz",
    "state": "Washington",
    "center_latitude": 46.196785,
    "center_longitude": -122.67846000000002,
    "direction_real": 0.06198621813175009,
    "direction_imaginary": -0.15782975137611288,
    "magnitude": 13
  },
  {
    "num": 53055,
    "county name": "San Juan",
    "state": "Washington",
    "center_latitude": 48.50719,
    "center_longitude": -123.103769,
    "direction_real": -0.25148286479672777,
    "direction_imaginary": -0.04397582828494251,
    "magnitude": 4
  },
  {
    "num": 53065,
    "county name": "Stevens",
    "state": "Washington",
    "center_latitude": 48.388727,
    "center_longitude": -117.854454,
    "direction_real": 0.10624319637912549,
    "direction_imaginary": -0.03868805572373901,
    "magnitude": 4
  },
  {
    "num": 53075,
    "county name": "Whitman",
    "state": "Washington",
    "center_latitude": 46.905944,
    "center_longitude": -117.53538999999999,
    "direction_real": -0.022707382184762537,
    "direction_imaginary": 0.0026188174369821127,
    "magnitude": 6
  },
  {
    "num": 53001,
    "county name": "Adams",
    "state": "Washington",
    "center_latitude": 47.011238,
    "center_longitude": -118.51286100000002,
    "direction_real": -0.04401807026508209,
    "direction_imaginary": -0.07564095120446268,
    "magnitude": 7
  },
  {
    "num": 53017,
    "county name": "Douglas",
    "state": "Washington",
    "center_latitude": 47.741763,
    "center_longitude": -119.694622,
    "direction_real": 0.2697604141223877,
    "direction_imaginary": 0.012558732341744872,
    "magnitude": 5
  },
  {
    "num": 53019,
    "county name": "Ferry",
    "state": "Washington",
    "center_latitude": 48.473256,
    "center_longitude": -118.53358899999999,
    "direction_real": -0.09147572242966362,
    "direction_imaginary": 0.07306897564586023,
    "magnitude": 1
  },
  {
    "num": 53047,
    "county name": "Okanogan",
    "state": "Washington",
    "center_latitude": 48.548453,
    "center_longitude": -119.74223500000001,
    "direction_real": 0.21266935201727222,
    "direction_imaginary": -0.07246918125748891,
    "magnitude": 3
  },
  {
    "num": 53059,
    "county name": "Skamania",
    "state": "Washington",
    "center_latitude": 46.024784999999994,
    "center_longitude": -121.953232,
    "direction_real": 0.17580306436146032,
    "direction_imaginary": 0.07522582545634293,
    "magnitude": 1
  },
  {
    "num": 53051,
    "county name": "Pend Oreille",
    "state": "Washington",
    "center_latitude": 48.543825,
    "center_longitude": -117.23219099999999,
    "direction_real": 0,
    "direction_imaginary": 0,
    "magnitude": 0
  },
  {
    "num": 53003,
    "county name": "Asotin",
    "state": "Washington",
    "center_latitude": 46.181861,
    "center_longitude": -117.22778100000001,
    "direction_real": 0,
    "direction_imaginary": 0,
    "magnitude": 0
  },
  {
    "num": 53069,
    "county name": "Wahkiakum",
    "state": "Washington",
    "center_latitude": 46.294638,
    "center_longitude": -123.424458,
    "direction_real": 0,
    "direction_imaginary": 0,
    "magnitude": 0
  },
  {
    "num": 53049,
    "county name": "Pacific",
    "state": "Washington",
    "center_latitude": 46.556587,
    "center_longitude": -123.78241899999999,
    "direction_real": 0,
    "direction_imaginary": 0,
    "magnitude": 0
  }
];

//temp var
//TODO: makes givesTo[] including randomized direction and check that counties dont give and recieve 
//todo EXAMPLE: countyA => countyB   countyB =X> countyA
//todo: have versions of data to show what real data could look like
var bordersWith = [
  Adams = {
    Lincoln, Whitman, Franklin, Grant
  },
  Asotin = {
    Garfield,Whitman
  },
  Benton = {
    Klickitat, Yakima, Grant, Franklin, WallaWalla
  },
  Chelan = {
    King, Snohomish, Skagit, Okanogan, Douglas, Kittitas
  },
  Clallam = {
    Jefferson, SanJuan, Island
  },
  Clark = {
    Cowlitz, Skamania
  },
  Columbia = {
    WallaWalla, Whitman, Garfield
  },
  Cowlitz = {
    Wahkiakum, Lewis, Skamania, Clark
  },
  Douglas = {
    Okanogan, Grant, Kittitas, Chelan
  },
  Ferry = {
    Okanogan, Lincoln, Stevens
  },
  Franklin = {
    Adams, Whitman, WallaWalla, Benton, Grant
  },
  Garfield = {
    Whitman, Asotin, Columbia
  },
  Grant = {
    Douglas, Lincoln, Adams, Franklin, Benton, Yakima, Kittitas
  },
  GraysHarbor = {
    Jefferson, Mason, Thurston, Lewis, Pacific
  },
  Island = {
    SanJuan, Whatcom, Skagit, Snohomish, Kitsap, Jefferson
  },
  Jefferson = {
    Clallam, Island, Kitsap, Mason, GraysHarbor
  },
  King = {
    Kitsap, Pierce, Kittitas, Chelan, Snohomish
  },
  Kitsap = {
    Island, Snohomish, Kittitas, Pierce, Mason, Jefferson
  },
  Kittitas = {
    Chelan, Douglas, Grant, Yakima, Pierce, Kittitas
  },
  Klickitat = {
    Skamania, Yakima, Benton
  },
  Lewis = {
    Thurston, Pierce, Yakima, Skamania, Cowlitz, Wahkiakum, Pacific, GraysHarbor
  },
  Lincoln = {
    Ferry, Stevens, Spokane, Whitman, Adams, Grant, Douglas
  },
  Mason = {
    Jefferson, Kitsap, Pierce, Thurston, GraysHarbor
  },
  Okanogan = {
    Ferry, Lincoln, Grant, Douglas, Chelan, Skagit, Whatcom
  },
  Pacific = {
    GraysHarbor, Lewis, Wahkiakum, Cowlitz
  },
  PendOreille = {
    Spokane, Stevens
  },
  Pierce = {
    Kitsap, King, Kittitas, Yakima, Lincoln, Lewis, Thurston, Mason
  },
  SanJuan = {
    Whatcom, Skagit, Island, Jefferson, Clallam
  },
  Skagit = {
    Whatcom, Okanogan, Chelan, Snohomish, Island, SanJuan
  },
  Skamania = {
    Lewis, Yakima, Klickitat, Clark, Cowlitz
  },
  Snohomish = {
    Skagit, Chelan, King, Kittitas, Island
  },
  Spokane = {
    PendOreille, Whitman, Lincoln, Stevens
  },
  Stevens = {
    PendOreille, Spokane, Lincoln, Ferry
  },
  Thurston = {
    Pierce, Lewis, GraysHarbor, Mason
  },
  Wahkiakum = {
    Pacific, Lewis, Cowlitz
  },
  WallaWalla = {
    Franklin, Whitman, Columbia, Benton
  },
  Whatcom = {
    SanJuan, Okanogan, Skagit
  },
  Whitman = {
    Spokane, Asotin, Garfield, Columbia, WallaWalla, Franklin, Adams, Lincoln
  },
  Yakima = {
    Kittitas, GraysHarbor, Benton, Klickitat, Skamania, Lewis, Pierce, King
  }
]
//need:
//[]    length of bordersWith list
//[]    random num of borders to draw line to
//[]    random index num of county to be destCounty looped by the number of random line num
//[]    set lines
//[]    removes start county name from destCounty border list

var countyName;
var currCounty;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.471, lng: -120.635 },
    disableDefaultUI: true,
    zoom: 6.5
  });
  
  var kmlLayer = new google.maps.KmlLayer({
    url: 'http://googlemaps.github.io/kml-samples/kml/Placemark/placemark.kml',
    suppressInfoWindows: true,
    map: map
  });

  
  for (i = 0; i < dataWA0331.length; i++) {
    currCounty = dataWA0331[i]["county name"].replace(/\s+/g,'');
    WaCounties = currCounty;
    console.log(currCounty);
    WaLatLng[i] = {lat: dataWA0331[i]["center_latitude"], lng: dataWA0331[i]["center_longitude"]};
    countyName = dataWA0331[i]["county name"];
    var lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };
//fixme temp for()

console.log(bordersWith)
    console.log(dataWA0331); 
    var destCounty = {lat: 47.764550, lng: -120.359167};


    
    var line = new google.maps.Polyline({
      //var destination_county;
      //path: [WaLatLng, destination_county],
      position: WaLatLng[i],
      path: [
        WaLatLng[i], 
        destCounty
      ],
      map: map,
      title: countyName,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%",
          size: 10,
          repeat: "50%"
        }]
    });
    animateCircle(line);
    function animateCircle(line) {
      var count = 0;
      window.setInterval(function() {
        count = (count + 1) % 200;

        var icons = line.get('icons');
        icons[0].offset = (count / 2) + '%';
        line.set('icons', icons);
      }, 20);
    }
    line.setMap(map);
  }    
  var value = Object.values(WaCounties);
  console.log(WaCounties)

    //Gets coordinates of all counties in Washington
//Washington
//Adams
    
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

    
//Chelan County
        var Chelan;
        var chelanCoords = [
    
        ];

//Clallam County    
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

        //console.log(clark);


//Assign copy to each county_name.setMap(map):
//
//
        // var lineSymbol = {
        //     path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        //   };
        
        //   // Create the polyline and add the symbol via the 'icons' property.
        //   var line = new google.maps.Polyline({
        //     //[start, end]
        //     path: [clarkCntr, cowlitzCntr],
        //     icons: [
        //       {
        //         icon: lineSymbol,
        //         offset: "100%",
        //         size: clark["magnitude"],
        //         repeat: "50%"
        //       }
        //     ],
        //     map: map
        //   });
        //   animateCircle(line);
        //   function animateCircle(line) {
        //     var count = 0;
        //     window.setInterval(function() {
        //       count = (count + 1) % 200;
        
        //       var icons = line.get('icons');
        //       icons[0].offset = (count / 2) + '%';
        //       line.set('icons', icons);
        //   }, 20);
        // }
        Clark.setMap(map);
//
//
//


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