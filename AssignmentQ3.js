// 3.
// Write a program where the user enters a number ‘N’ and the program generates all legitimate
// (syntactically correct) strings of ‘N’ pairs of opening & closing parentheses (Brackets)
// (No bracket can be closed without opening)




// Using Recursion 
//Check open and close brackets are correct and should not increase than max
//base condition when the length of the outout array is greater than twice the max
// Then push the ans in the output.
function createBrackets(output, string, open, close, max){
    if(string.length == max*2){
       return output.push(string).toString;
    }
    if(open < max){
        createBrackets(output,string+"(",open+1,close,max);
    }
    if(close<open){
        createBrackets(output, string+")",open,close+1,max);
    }
}
function outputParenthesis(n){
    let ans = [];
    createBrackets(ans, "", 0, 0, n);
    return ans;
}

console.log(outputParenthesis(4));
