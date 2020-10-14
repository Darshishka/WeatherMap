function parse() {
    var data = document.getElementById("inputText").value;
    //every space is one point
    data = data.split(" ");
//add to array then shift
    var i;
    var output = [];
    for (i = 0; i < data.length; i++) {
        var comma = data[i].indexOf(",");
        output.push(`{lat: ${data[i].substr(comma+1)}, lng: ${data[i].substr(0,comma)}}`);
        output.push(`<br>`)
    };
    output = output.join(``);
    console.log(output);
    document.getElementById("output").innerHTML = output;
    document.execCommand("copy");
    
    //need to switch sides of comma
};

//each space " " is one data point
    //data is in a string  
        //identify start of point index
        //identify space index
        //substring the inxedes
        //last index is next starting index
    //each data point has a Lat and Lng which are in reverse order