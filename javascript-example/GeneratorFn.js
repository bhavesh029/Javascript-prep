// Generator function in Javasacript 

// Expression =>  same as creating normal function but an addition of * with the function keyword.

function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}

 function* generateId(){
    let id =1;
    //infinite loop
    while(true){
        yield id;
        id++;
    }
 }
// in generator 
 let generateIdObj = generateId() //it will create a new obj everytime you call the generator function

 for(let i=0;i<4;i++){
    console.log(generateIdObj.next());
 }
 console.log(generateIdObj.return());// Exiting out of the generator function.

 function* ArraySum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }

    yield sum;
 }

 let ArraySumObj = ArraySum([2,3,4,5]);
 console.log(ArraySumObj.return()); //return is use for exiting out of the generator function
 console.log(ArraySumObj.next());
 console.log(ArraySumObj.next());


