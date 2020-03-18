var path = require("path")
const spawn = require("child_process").spawn;

function static_model(){

  // var retrain =true
  // var path_to = 'dd'
  var retrain = document.getElementById('retrain-model').checked;
  var path_to = document.getElementById('path-to-file').value;
  const path_to_file = (__dirname + "/../../engine/static_analysis_1.py");
  
  var retrain_model 
  if (retrain == true){
    retrain_model = 'True'
  }else{
    retrain_model = 'False'
  }

  const pythonProcess = spawn('python',[path_to_file, path_to]);
  

  pythonProcess.stdout.on('data', (data) => {
      // Do something with the data returned from python script
      console.log(data.toString());
      //document.getElementById("input-text").innerHTML = data.toString();
    });
  console.log(path_to_file)
    

}

//static_model()