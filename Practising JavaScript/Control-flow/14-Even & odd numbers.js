//Write a function called shownumbers that takes a parameter called limits. 
//so that when you call a number like 10, you should see all the numbers before 10 and weather they are even or odd

function showNumbers(limits) {
    if ((limits % 2) === 0)
        console.log(limits, 'Even');
    else
        console.log(limits, 'Odd');
}

showNumbers(21245125);