//

function isLandscape(width, height) {

    if (width > height){
        console.log('yes, it is a landscape')
    }

    else {
        console.log('No, it is not a landscape');
    }

}

isLandscape(500, 400)

//Here's Mosh's own solution

function isLandscape1(width, height){
    return (width > height);
}

let result = isLandscape1(200, 300);
console.log(result);
