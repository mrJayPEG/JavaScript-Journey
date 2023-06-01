//Create a function called showproperties, that displays all the properties of an object that are of type string

const movie = {
    title: 'Attack on titans',
    releaseYear: 2009,
    ratings: '8.9 / 10',
    protaonist: 'Eren Yeager'
}

function showProperties(movieDetails) {
    for (let details in movieDetails) {
        if (typeof (movie[details]) === 'string')
            console.log(movie[details]);

        else continue;
    }
}

showProperties(movie)