/*
What is closure ?

=> A closure is a feature where an innerfunction has access to the
outer(enclosing) functions variables

*/

function outerFunction(outerVariable){
  return function innerFunction(innerVariable){
    console.log("Outer Variable ",  outerVariable);
    console.log("Inner Variable ",  innerVariable);
    
  }
}

const newFunction = outerFunction('outside');
newFunction('inside')

/* 
Output :

Outer Variable  outside
Inner Variable  inside


Note :

 *outerFunction('outside') creates a closure with outerVariable = 'outside' and returns the innerFunction
 
 *newFunction('inside') then calls the innerFunction with innerVariable = 'inside'

*/