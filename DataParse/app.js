function parse() {
    var data = document.getElementById("inputText").value;
    //every space is one point
    //add to array then shift
    var i;
    var output = [];
    data = data.split(" ");
    for (i = 0; i < data.length; i++) {
      var comma = data[i].indexOf(",");
      output.push(`{lat: ${data[i].substr(comma+1)}, lng: ${data[i].substr(0,comma)}}`);
      output.push(`,\n`)
    };
    output = output.join(``);
    console.log(output);
    document.getElementById("output").innerHTML = output;
};
function copy() {
    /* Get the text field */
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
//   copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
};