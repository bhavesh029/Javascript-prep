const cp = require('child_process');

// exec()
// child_process exec method which takes and command of your shell that is supported by your OS

// `child_process.exec() spawns a shell and runs a command within that shell, 
// passing the stdout and stderr to a callback function when complete. 
// It spawns a shell then executes the command within that shell, buffering any generated output.

cp.exec("node test.js", (err, stdout, stderr) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stdout);
});

//fork()

//spawn()


