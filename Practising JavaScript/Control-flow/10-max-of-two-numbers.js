//Exercise..
//Write a function that takes two numbers, and returns the maximum of the two;

//Solution code

function maxNumber(a, b){
    if (a > b){
        console.log(a, 'is the max value');
    }
    else if (a < b){
        console.log(b, 'is the max value');
    }
    else {
        console.log('Both values are equal sizes')
    }
}

maxNumber(232, 231);
