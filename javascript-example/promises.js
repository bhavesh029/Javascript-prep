// // Example 1  .then & .catch

// // let a = new Promise((resolve, reject) => {
// //     reject({msg:'Something went wrong'});
// // })

// // a.then(resolve => {console.log(resolve)})
// // .catch(err => {console.log(err)});


// //Exapmle 2 async await
// async function print(){
//     console.log('a');
//     console.log('b');
//     let c =  new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve('c');
//         },2000);
//     });
//     console.log(c);
//     let d =  new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('d');
//         },500);
//     })
//     console.log(d);
//     console.log('e');
// }
// print();


console.log(true + true);
console.log(0 == false);
console.log(0 === false);

const abc = {"xyz":"this"};
abc.xyz = "Change"
// abc = {"xyz":"Change"};
console.log(abc);

