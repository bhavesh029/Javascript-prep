// 1.
// The current schedule of classes for Akshay is stored in a sorted array ‘S’ where, s[i][0] is the
// start-time of ith class and s[i][1] is end-time of ith class.
// Akshay wants to attend some optional classes, whose timings are stored in array ‘O’ (not
// necessarily sorted) where o[j][0] is the start time of jth optional class o[j][1] is the end time of jth optional
// class.
// Write a program to identify what all optional classes can Akshay attend without them clashing with his
// existing schedule? Note: You may assume that Akshay’s existing schedule has no overlaps, but optional
// may have overlaps. and time stamp includes both date and time.

// Example input = 
let s = [
    [0,1],
    [1,2],
    [4,5],
    [7,8]
];

let o = [
    [1,2],
    [2,3],
    [4,5]
]

console.log(s);
console.log(o);

function optionalClass(s, o){
    let i = 0;
    let j = 0; 
    let ans = [];
    while(i<s.length && j<o.length){
        
    }
}
//optional Class Akshay can attend
