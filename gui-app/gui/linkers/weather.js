
//var PythonShell = require("python-shell");
let {PythonShell} = require('python-shell')
var path = require("path");


function get_weather() {

  var city = document.getElementById("city").value
  document.getElementById("city").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city,
    pythonPath: "/user/bin/python3"
  };
  // var options = {
  //   mode: "text",
  //   encoding: "utf8",
  //   pythonOptions: ['-u'],
  //   scriptPath: "../engine/",
  //   args: [city],
  //   pythonPath: "/user/bin/python3"
  // };

  var weather = new PythonShell("weather_engine.py", options);

  weather.on('message', function(message) {
    swal(message);
    //alert(message);
    //document.getElementById("xs").innerHTML = "oh";
  });



}
