// 2.In a company of ‘N’ employees; their data is stored in array ‘E’,
// where i is the ith employee and E[i][0] = employee no. of the supervisor of employee ‘i’
// E[i][1] = likability score of employee ‘i’ (an unsigned integer)
// The company is throwing a party for max ‘M’ employees where M << N.
// Write a program to generate the list of invitees (not more than M) from N employees such that both the
// following conditions are satisfied
// (a)
// If an employee is invited, his supervisor is not invited.
// (b)
// The sum of likability scores of all the invitees is maximum among the sum of likability
// scores of all the groups of up to M invitees that satisfy condition (a).

let arr = [2,4,1,7,5,8];
function EmployeeList(arr,m){
    let ans = [];
    //sort the array with the highest likeability of the person
    arr.sort().reverse();
    let i=0;
    while(i<arr.length){
        ans.push(arr[i]);
        i++;
    }
    //Now Checking If Employee is not a supervisior of any employee that are in the list
    //Removing employees who is someone supervisior

    for(let i=0;i<arr.length;i++){
        //removing the managers of the employees
        
    }

}

EmployeeList(arr,arr.length/2);