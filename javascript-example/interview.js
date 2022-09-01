
// //1 how copy each element of an array to a different array

// let arr = [2,3,4,5,6];
// let copyArr =[...arr];


// //2 copying the values of the elemnt of the obj into a new object with some added values;'

// let obj = {
//     'Key1':1,
//     'Key2':2
// }
// let newObj = {...obj,'Key3':3};
// console.log("newObj", newObj);


// //3 Example of map 

// let newArr = arr.map((element) => {
//     return element *2;
// });
// console.log(arr);
// console.log(newArr);


// //4 Example of  filter 

// let arr2 = arr.filter((element) => {
//     return element%2 ==0;
// });
// console.log(arr2);



// //5 Number of occurence of each character

// let str = "mynameisbhavesh";
// let countChar = (str) => {
//     let counts = {};
//     for(let s of str){
//         if(counts[s]){
//             counts[s]++;
//         }
//         else{
//             counts[s] = 1;
//         }
//     }
//     return counts;
// }

// let ans = countChar(str);
// console.log(ans);


// //6 Find if the substr is the substring of the given string

// let str = "bhavesh";
// let substr = "";
// function nameCheck(str, substr){
//     if(str.length == 0 ||substr.length == 0){
//         return false;
//     }
//     let i=0;
//     let j=0;
//     let count =0;
//     while(i<str.length){
//         if(substr.charAt(j) == str.charAt(i)){
//             count++; 
//             i++; 
//             j++;
//         }
//         else if(i==str.length-1 && count !== substr.length){
//             return false;
//         }else{
//             i++;
//         }
//     }
//     return true;
// }
// console.log(nameCheck(str, substr));



//7 Find Missing Number

// function findMissing(a, n){
//     let total = Math.floor((n+1)*(n+2)/2);
//     console.log(total);
//     a.forEach(element => {
//         total -= element;
//     });
//     console.log(total);
// }
// let arr = [ 1, 2, 3, 5 ];
// let N = arr.length;
// findMissing(arr, N);


// //8 Insert value at the given index

// function task1() {
//     const input = [1,2,3,4, 6,99];
  
//     function insertValAtIndex(arr, val, index){
      
//       return arr.splice(index, 0, val);
//     }
  
//     const output = insertValAtIndex(input, 5, 1);
//     // output is [1, 5, 2, 3, 4, 6, 99]
//     console.log("output is", output)
  
//     // input is [1,2,3,4,6,99]
//     console.log("input is", input)
//   }
  
//   console.info('-------- TASK 1 Output START ---------\n');
//   task1()
//   console.info('-------- TASK 1 Output END ---------\n');

// //
//   function task2(){
//     const input = [1,2,3,4,99];
     
//     function mapToDecimals(arr){
//       let ans = {};
//       for(let i=0;i<arr.length;i++){
//         let temp;
//         if(arr[i]<10){
//         temp = arr[i]/10;
//         }
//         if(arr[i]>10 && arr[i]<100){
//           temp = arr[i]/100;
//         }
//         let sum = arr[i]+temp;
//         ans[arr[i]] = sum;
//       }
 
//       return ans;
//     }
  
//     // Should be {1: 1.1, 2: 2.2, 3: 3.3, 4:4.4, 99: 99.99}
//     const output = mapToDecimals(input) 
//     console.log("output is", output) 
// }
  
//   console.info('-------- TASK 2 Output START ---------\n');
//   task2()
//   console.info('-------- TASK 2 Output END ---------\n');
  
//   function task3(){
    
//     const input = [1, 4, 2, 2, 3, 4, 1];
    
//     function removeDups(arr){
//       // write code here
//       // write down the time complexity of code - o(n)
//       // can not use Set data structure
    
//       return arr;
//     }
  
//     const output = removeDups(input)
//     // Should be [1, 4,2,3]
//     console.log("output is", output)
  
// }
//   console.info('-------- TASK 3 Output START ---------\n');
//   task3()
//   console.info('-------- TASK 3 Output END ---------');




