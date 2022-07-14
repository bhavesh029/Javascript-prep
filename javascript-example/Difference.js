//Difference between setTimeout setImmediate and process.nextTick

setTimeout(() => {
    console.log('this is setTimeout'); // this will print after the process.next
},0);

setTimeout(() => {
    console.log('second timeout');// after the first timeout
},0)

setImmediate( () => {
    console.log('this is setImmediate'); //print immediately after the current execution of callback queue
});

setTimeout(() => {
    console.log('third'); //printed after the 2 timeout
},0)

process.nextTick( () => {
    console.log('this is process.nextTick'); //will print first
})
