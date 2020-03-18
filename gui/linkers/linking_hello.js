let {PythonShell} = require('python-shell')
var path = require("path")
const spawn = require("child_process").spawn;


function get_weather() {

  // var city = document.getElementById("city").value
  // var pity=document.getElementById("pity").value
  var city = 'hello'
  var pity = 'bye'
  var options = {
    scriptPath : path.join(__dirname, '/../../engine/'),
    args : [city,pity]
  }
  const pp = (__dirname + "/../../engine/hello.py");
  // console.log(options)
  // let pyshell = new PythonShell('hello.py', options);
  const pythonProcess = spawn('python',[pp, city, pity]);
  console.log(pp)
  // pyshell.on('message', function(message) {
  //   //document.getElementById("para").innerHTML=message;
  //   console.log(message)
  // })
  //document.getElementById("city").value = "";
  pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from python script
    console.log(data.toString());
  });
}
//
get_weather()