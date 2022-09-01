let arr = [2,4,5,7,9,10];

//map
let arrMap = arr.map((value) => {
    return value*2;
});
console.log("THis is map's ans", arrMap);
//filter

let arrFilter = arr.filter((value) => {
    return value%2==0;
})
console.log('This is filter ans', arrFilter);
//reduce

let arrReduce = arr.reduce((total, value) => {
    return total+value;
});
console.log(arrReduce);

console.log(arr.reverse());