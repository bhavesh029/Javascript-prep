// Example 1  .then & .catch

// let a = new Promise((resolve, reject) => {
//     reject({msg:'Something went wrong'});
// })

// a.then(resolve => {console.log(resolve)})
// .catch(err => {console.log(err)});


//Exapmle 2 async await
async function print(){
    console.log('a');
    console.log('b');
    let c = await new Promise((resolve) => {
        setTimeout(() =>{
            resolve('c');
        },2000);
    });
    console.log(c);
    let d = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('d');
        },500);
    })
    console.log(d);
    console.log('e');
}
print();

