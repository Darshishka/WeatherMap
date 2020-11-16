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

          //need lines between start and end
            //if the l in lines[l] === start[0] add to temp array of lines then join lines
        // console.log(start);
        // console.log(end);
        
        textarea.value = lines.join('\n');
        textarea.value.trim()

        

        // for (l = 0; l < lines.length; l++) {
        //   var county;
        //   var date;
        //   lines[l] = lines[l].trim();
        //   if (lines[l].startsWith("<SimpleData name=\"NAME\"><![CDATA[")) { 
        //     lines[l] = lines[l].slice(33);
        //     lines[l] = lines[l].slice(0, (lines[l].length - 16));
        //     county = lines[l]
        //     // textarea.value += `${county}\n`;
        //   }
        //   if (lines[l].startsWith("<end><![CDATA[")) {
        //     lines[l] = lines[l].slice(14);
        //     lines[l] = lines[l].slice(0, (lines[l].length - 9));
        //     date = lines[l];
        //     // if (date === "2000-12-31") {
        //       textarea.value += `${county}\n`;
        //       textarea.value += `${date}\n`;
        //     // }
        //   }
        // }
        // if (lines[l].startsWith("<coordinates>")) {
        //   var x = l + 1;
        //   var end = false;
        // }
        // while (end === false) {
        //    if (lines[x].startsWith("</coordinates>")) {
        //      end = true;
        //    } else if (lines[l].startsWith("-")) {
        //      textarea.value += `${lines[x]}`
        //      console.log("line " + x + ": " + lines[x])
        //      x++

        //    }
           
        // }
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
function sort(county) {
  county[0] = county[0].slice(46);
  county[0] = county[0].replace("]]></SimpleData>", "");
  var frstLttr = county[0][0];
  var countyName = county[0].toLowerCase();
  countyName = frstLttr + countyName.slice(1);
  var num = 0;
  for (var e = 0; e < county.length; e++) {
    if (county[e].includes("<coordinates>")) {
      num++
      // console.log(num)
    }
  }
  console.log(num)
  textarea.value += `var ${countyName}Path = [`

  console.log(countyName)
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