//BITWISE OPERATORS

// 1 = 00000001 -> 8 bit -> 1 byte
// 2 = 00000010  
// 3 = 00000011

console.log(1 | 2); // Bitwise OR 
console.log(1 & 2); // Bitwise AND


/*
For the Bitwise OR calculation, if the binary notation of any of the operand is 1, the result prints 1, 
or else it prints 0. Now the final result in binary from is then transfromed to decimal

For the Bitwise AND calculation, same principles apply but both operands has to be 1 for the result to print out 1
*/

//REAL-LIFE USAGE
//Read, write, execute
// 00000100 for read permisison
// 00000010 for read and write permissions
// 00000111 for all permissions

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission) we dont care about this for now

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

//Technically, with the bitwise or operator, we can add permissions --> line 29
// and with the bitwise and ongotpointercapture, we can check to see if we have a given permission --> line 32