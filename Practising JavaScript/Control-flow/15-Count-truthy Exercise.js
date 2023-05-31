// List of falsy values
// undefined
// Null
// ''
// False
// 0 
// Nan

//Create a function called count truthy that gets an array and returns the number of truthy vales in the array

function countTruthy(array) {
    let count = 0;

    for (let value of array)
        if (value)
            count++;
    console.log(count);
}

countTruthy([2, 4, 7, '', NaN, 32])

