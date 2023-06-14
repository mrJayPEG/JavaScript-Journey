// Pascal Notation: OneTwoThreeFour

// When naming construction functions, make use of the Pascal notation

function Circle(radius) {
    this.radius = raduis;
    this.draw = function () {
        console.log('draw')
    }
}

const Circle = new Circle(1);

// The new operator creates an empty javascript object eg const x = {]
// Then it will set 'this' to point at the new empty object and set the radius property and the draw function
// Finally, it will return the new object