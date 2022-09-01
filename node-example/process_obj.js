//Process Object

// Including the module into out project
var process = require('process');

// It will return the current working directory
console.log('this is the working directory --> ' + process.cwd());

// It will return the version of process we are using
console.log('this is the process version --> ' + process.version);

// It will return the type of OS we are using at that time.
console.log('current OS we are using --> ' + process.platform);

// It will return the Feature Object
console.log('Feature Property: ', process.features);