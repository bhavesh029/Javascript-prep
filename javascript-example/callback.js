// Example 1

// function first(cb){
//     setTimeout(() =>{
//         console.log("This is the first function");
//         cb();
//     },1000);
    
// }

// function second(){
//     console.log("This is a second Function");
// }

// first(second);


    


//************Example 2 callback hell*************/




function first(cb1,cb2,cb3){
    setTimeout(() => {
        console.log('First');
        cb1(cb2,cb3);
    },2000);
}

function second(cb2,cb3) {
    setTimeout(() => {
        console.log('second');
        cb2(cb3);
    }, 1000)
}

function third(cb3) {
    setTimeout( () => {
        console.log('third');
        cb3();
    },500);
}

function fourth() {
    console.log('fourth');
}
first(second, third, fourth);