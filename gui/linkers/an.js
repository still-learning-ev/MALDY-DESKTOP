var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: 'path/to/python',
  pythonOptions: ['-u'],
  scriptPath: 'C:\\Users\\zeeshan lone\\Desktop\\maldy-desktop-app\\engine\\hello.py',
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('my_script.py', options, function (err, results) {
  if (err) 
    throw err;
  // Results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
