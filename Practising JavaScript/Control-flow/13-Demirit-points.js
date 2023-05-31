/*
Implement an algorithm where a user earn a point for every 5km above the normal speed limit

If car driving under speed limit -> Okay
If car driving on speed limit -> Okay
If car driving at less than 5km under normal speed limit -> still okay

If car drives 10km above speed limit -> 2 points
If car drives 25km above speed limit -> 5 points
If car drived at more than 12 points -> license suspended
*/


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoints = 5;

    if (speed < speedLimit + kmPerPoints)
        console.log('Okay');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoints);
        if (points >= 12)
            console.log('Your license has been suspended!');
        else {
            console.log(points, 'Points')
        }
    }
}

checkSpeed(85);