let input = document.querySelector('input') 
  
let textarea = document.querySelector('textarea') 

// This event listener has been implemented to identify a 
// Change in the input section of the html code 
// It will be triggered when a file is chosen. 
input.addEventListener('change', () => { 
    let files = input.files; 
  
    if (files.length == 0) return; 
  
    /* If any further modifications have to be made on the 
       Extracted text. The text can be accessed using the  
       file variable. But since this is const, it is a read  
       only variable, hence immutable. To make any changes,  
       changing const to var, here and In the reader.onload  
       function would be advisible */
    const file = files[0]; 
  
    let reader = new FileReader(); 
  

    reader.onload = (e) => { 
      
        const file = e.target.result; 
        textarea.value = "";
        // This is a regular expression to identify carriage  
        // Returns and line breaks 
        var lines = file.split(/\r\n|\n/);
        var l;
        var x;
        var start = [];
        var end = [];
        var counties = [];
        $.each(lines, function (index, item) { 
          if (item.includes("<SimpleData name=\"NAME\"")) {
            start.push(index);
          } else if (item.includes("</Placemark>")) {
            end.push(index);
          }
        });
        $.each(lines, function (index, item) {
          var county = [];
          for (l = 0; l < lines.length; l++) {
            if (start[l] === index) {
              x = index;
              while (x < end[l]) {
                county.push(lines[x]);
                // console.log(county);
                x++
              }
              check(county);
            }
            }
        });
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 

function check(county) {
  tempCounty = county.toString();
  if (tempCounty.includes('2000-12-31')) {
    sort(county);
  } else {
    console.log(false)
  }
};
var counties = [];
var countiesPaths = [];
function sort(county) {
  county[0] = county[0].slice(46);
  county[0] = county[0].replace("]]></SimpleData>", "");
  var frstLttr = county[0][0];
  var countyName = county[0].toLowerCase();
  countyName = frstLttr + countyName.slice(1);
  if (countyName.indexOf(" ") != -1) {
    countyName = countyName.split(" ");
    countyName[1] = countyName[1].charAt(0).toUpperCase() + countyName[1].slice(1);
    countyName = countyName[0] + " " + countyName[1]
  }
  counties.push(`${countyName}`);
  var coords = [];
  var pathCount = 1;
  for (var c = 0; c < county.length; c++) {
    county[c] = county[c].trim("");
    if (county[c].includes("<coordinates>")) {
      textarea.value += `var ${countyName}Path${pathCount} = [\n`;
      countiesPaths.push(`${countyName}Path${pathCount}`);
      pathCount++;
    }else if (county[c].startsWith("-")) {
      county[c] = county[c].slice(0, (county[c].length -2))
      var comma = county[c].indexOf(",");
      textarea.value += (`{lat: ${county[c].substr(comma+1)}, lng: ${county[c].substr(0,comma)}},\n`);
    } else if (county[c].includes("</coordinates")) {
      textarea.value += `];\n\n`
    }
  }
  console.log(counties);
  console.log(countiesPaths);
  textarea.value += `\n\n`;
  // for (var f = 0; f < counties.length; f++) {
  //   textarea.value += `\"${counties[f]}\",\n`;
  // }
  // textarea.value += `\n\n`;
  // for (var w = 0; w < countiesPaths.length; w++) {
  //   textarea.value += `${countiesPaths[w]},\n`;
  // }
  counties.push(`${countyName}`);
  textarea.value += `var ${countyName}Path = [`
  while (county.indexOf(`<coordinates>`) != -1) {
    county.indexOf()
  }

  console.log(countyName);
  console.log(counties);
};
// const { readFile } = require("fs");


// function parse() {
//     var data = document.getElementById("file");
//     //every space is one point
//     //add to array then shift
//     var text = fs.readFileSync("Temp. Files/test file.txt").toString('utf-8');
//     var i;
//     var output = [];
//     // data = data.search("atlantic");
//     console.log(text);
//     for (i = 0; i < data.length; i++) {
//       var comma = data[i].indexOf(",");
//       output.push(`{lat: ${data[i].substr(comma+1)}, lng: ${data[i].substr(0,comma)}}`);
//       output.push(`,\n`)
//     };
//     output = output.join(``);
//     console.log(output);
//     document.getElementById("output").innerHTML = output;
// };
// function copy() {
//     /* Get the text field */
//   var copyText = document.getElementById("output");

//   /* Select the text field */
//   copyText.select();
// //   copyText.setSelectionRange(0, 99999); /*For mobile devices*/

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   // alert("Copied the text: " + copyText.value);
// };