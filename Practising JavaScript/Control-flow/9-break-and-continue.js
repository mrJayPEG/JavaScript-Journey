//In this exmple ill be using a while loop, but it applies for all other loops in javasscript.

let i = 0;
while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0){
        i++;
        continue;
        //when 'i' is an even number, it gets incremented and then the continue statement pushes the javascript engine to the top of the while function, and this time the code executes properly because i has been incremented by 1 sand is no longer an even number
    }
    console.log(i);
    i++;
}