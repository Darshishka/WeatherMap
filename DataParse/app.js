function parse() {
    var data = document.getElementById("inputText").value;
    //every space is one point
    while (data.indexOf(",") != -1) {
        data = data.replace(",", " ")
    }
    data = data.split(" ");
    var i;
    var arrLat = [];
    var arrLng = [];
    for (i = 0; i < data.length; i++) {
        arrLng += data[i];
        i++
        arrLat += data[i];
        
    }
    for (i = 0; i < data.length; i++) {
        i++
        i
    }
    document.getElementById("output").innerHTML = data;
    //need to switch sides of comma
    console.log(arrLat);
    console.log(arrLng)
};