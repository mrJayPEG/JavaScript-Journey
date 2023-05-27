//Logical operators with Non-Booleans

//Using logical operators with Boolean values
//Examle 1
let hello = false || true //ture
console.log(hello);

//Using logical operators with non-Boolean Values
//Example 2
let name = false || 'Johnpaul' //this is Truthy thats why it returns Johnpaul since we are dealing with logical or
console.log(name);

//Example 3
let number = false || 1; // This is also truthy since its not a falsy and hence JavaScript output 1
console.log(number);

//If you run example 2 and 3, you'll notice that JavaScript returns the values of the right hand side. They are intrepeted as what is known as truthy & falsy
//Examples of falsy values include
// undefined
// null
// 0
// False
// ' '
// NaN

//Now anything that is not Falsy --> Truthy


//Short Circuiting
let test = false || 1 || 2;
console.log(test);
//In this example, javascript only evaluates the false and the next value after that. Everything that comes after is completly ignored


//REAL-LIFE EXAMPLE
let userColor = undefined; 
let defaultColor = 'green'
let currentColor = userColor || defaultColor;

console.log(currentColor); 