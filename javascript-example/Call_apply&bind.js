//Call 
//The call() method calls the function with a given 
//this value and allows passing in arguments one by one separating them with commas:

let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown

  //apply
  //The apply() method calls the function with a given this value and 
  //allows passing in arguments as an array (or an array-like object).

sayWelcome.apply(p1, ['Welcome']); // Welcome John Smith
sayWelcome.apply(p2, ['Welcome']); // Welcome Ann Brown
//The call() and apply() methods are interchangeable. Choosing between these two is up to the situation. 
//If it is easier to send in an array, you can use apply() or call() for a comma separated list of arguments.


//bind
//The bind() method returns a new function and allows passing in a this array and any number of arguments.

