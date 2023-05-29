const person = {
    name: 'Johnapul',
    age: 20,
    course: 'Computer Science'
}

for (let key in person){
    console.log(key, person[key]);
}