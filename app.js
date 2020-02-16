//step 3: name variable
var me = 'blake'

//step 4: create constant with number of US States
const USAstates = 50

//step 5: compute and store within a variable
var x = 5+4

//step 7: write a function that alerts 'Hello World!' and call
function sayHello() {
    alert('Hello World!')
}

sayHello();


function checkIndvAge(name, age) {
    if(age<21){
        alert("Sorry "+ name +", you aren't old enough to view this page!");
    }
}

function checkAge(friends) {
    if(friends.age<21){
        alert("Sorry "+ friends.name +", you aren't old enough to view this page!");
    }
}

checkIndvAge ('Charles', 21);
checkIndvAge ('Abby', 27);
checkIndvAge ('James', 18);
checkIndvAge ('John', 17);

var Vegetables = ['onions', 'garlic', 'tomatoes', 'jalapenos', 'broccoli']

for (var i = 0; i < Vegetables.length; i++) {
    console.log(Vegetables[i])

}

var friends = [
    {
        name: 'Jake',
        age: 22
    },
    {
        name: 'David',
        age: 53
    },
    {
        name: 'Zach',
        age: 19
    },
    {
        name: 'Ryan',
        age: 24
    },
    {
        name: 'Dave',
        age: 17
    }
]

for(let i = 0; i < friends.length; i++) {
    checkAge(friends[i]);
}

function getLength(string){
    return string.length;
}

let length = getLength('Hello World');

if (length %2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place')
}
