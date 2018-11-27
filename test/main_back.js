let {PythonShell} = require('python-shell')

function onClickBack() {

  var data = document.getElementById("inp").value;

  var options = {
  	mode: 'text',
  	encoding: 'utf8',
  	pythonOptions: ['-u'],
  	scriptPath: "./",
  	args: [data],
  	pythonPath: "/usr/bin/python3"
  };

  var test = new PythonShell('test.py', options);
  test.on('message', function(message) {
  	document.getElementById("output").innerHTML = message;
  });
}
