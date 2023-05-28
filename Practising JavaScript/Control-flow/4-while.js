//Implementing the same logicinthe previous lesson but this time, with a while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


//Just for fun, i'll also be displaying the even numbers from 1 - 100
let evenNumbers = 0;
while (evenNumbers <= 100) {
    if (evenNumbers % 2 == 0) {
        console.log(evenNumbers, 'Is an even number');
    }
    evenNumbers ++;
}