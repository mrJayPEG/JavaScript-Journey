// IF..ELSE STATEMENT


/* 
TASK
If hour is between 6am and 12pm: Good morning!
if hour is between 12pm and 6pm: Good afternoon!
Otherwise, Good evening!
*/

let hour = 2;

if (hour >= 0 & hour < 12) {
    console.log('Good morning!');

}
else if (hour >= 12 & hour < 18) {
    console.log('Good afternoon!');
}
else if (hour >= 18 & hour <=24){
    console.log('Good evening')
}
else {
    console.log('You have entered a wrong time format. Use the 24 hours standard')
}