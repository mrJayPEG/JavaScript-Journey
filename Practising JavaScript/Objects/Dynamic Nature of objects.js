const circle = {
    radius: 1
}

//Dynamically adding new properties to the circle object
circle.color = 'yellow';
circle.draw = function () {
    console.log('Hello');
}

console.log(circle)

// Dynamically remeoving properties from the circle object
delete circle.draw;
delete circle.color;

console.log(circle);

// circle = 'Round'

// Have in mind that we declared the circle object using a 'const' variable, but still i was able to modify the properties of the object.
// This is because the declaring a variable with 'const' means you won't be able to reassign the variable to another
// E.g: If you uncomment line #17, you get an error.