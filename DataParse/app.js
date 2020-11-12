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
  
        // This is a regular expression to identify carriage  
        // Returns and line breaks 
        var lines = file.split(/\r\n|\n/);
        var l;
        for (l = 0; l < lines.length; l++) {
          lines[l] = lines[l].trim();
        }
        console.log(lines.length);
        textarea.value = lines.join('\n');
        var data = textarea.value;
        
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 



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