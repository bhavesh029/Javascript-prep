// const person = {
//     name:'bhavesh',
//     age:'23'
// }
// console.log(person.age);
// console.log(person);
  
// **************

// function randomNum(){
//     let a = Math.random()*100;
//     a = parseInt(Math.round(a));
//     console.log(a);
// }
// for(let i=0;i<10;i++){
//     if(randomNum()>10 && randomNum()<99){
//         randomNum();
//     }
    
// }

/****************************/

// let i=1;
// console.log(i++);...b
// console.log(++i);


// let str = 'Javascript=Node=Express'
// let newStr = str.replace(/=/g,'.');

// console.log(str);
// console.log(newStr);

// let str = 'India';
// function reverseString(str){
//     let newStr = '';
//     for(let i=str.length;i>=0;i--){
//         newStr += str.charAt(i);
//     }
//     console.log(newStr);
// }
// reverseString(str);


//Function to check if the number n exist in an array

// function checkNumber(arr, n){
//     let num = false;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === n){
//             num = true;
//         }
//     }
//     console.log(num);
// }
// let arr = [7,8,9,10];
// checkNumber(arr, 8);
// checkNumber(arr, 11);

//Remove a number from a array if the number is present

// function removeNum(arr, num){
//    let newArr =  arr.filter((nums) => {
//         return nums!=num;
//     });
//     console.log(newArr);
// }
// let arr = [7,8,9,10];
// removeNum(arr, 8);
// removeNum(arr, 10);

// var arr = [2,4,5,7];
// console.log(Array.prototype);





// function count(i){
//     if(i == 6){
//         return;
//     }
//     console.log(i);
//     count(i+1);
//     console.log(i);
// }

// count(1);

// function multiplyBy5(i){
//     if(i >= 30){
//         return;
//     }
//     console.log(i);
//     multiplyBy5(i+5);
// }
// multiplyBy5(0);

let arr = [2,3,4,5,6,8];
function Inmap(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr[i] = arr[i]*2;
    }
    return newArr;
}
console.log(arr);
console.log(Inmap(arr));

