let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};
greet('Alice', 'morning');
greet('Bob', 'evening')

// 2 

let square1  = num => {
    return num * num;
};
console.log(square1(5));
console.log(square1 (8));

// 3

let sayHello = () => {
    console.log("Hello there!");
};
sayHello();

// 4

let person = {
    name: "John",
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
person.greet();

function example(){
    let x = 10;
    if(true){
        let y = 20;
        console.log(x);
        console.log(y);
    }
    
    console.log(x);
    // console.log(y);
}

example();

// 5

function example2(){
    const PI = 3.14;
    if(true){
        const MAX_VALUE = 100;
        console.log(PI);
        console.log(MAX_VALUE);
    }

    console.log(PI);
}
example2();

// 6
function sum(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));
console.log(sum(3, 6, 9, 12, 15, 18));

// 7 
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a);
console.log(b);
console.log(rest);

const persons = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
const{name, age, city} = persons;
console.log(name);
console.log(age);
console.log(city);

// 8
function greet1(name = 'Guest'){
    console.log(`Hello, ${name}!`);
}

greet1();
greet1('John');

function createFullName(firstName, lastName = 'Doe'){
    console.log(`${firstName} ${lastName}`);
}
createFullName('John');
createFullName('Jane', 'Smith');

// 9
const name1 = 'John';
const age1 = 30;

const message = `My name is ${name1} and I'm ${age1} years old.`;
console.log(message);

// 10
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5){
            resolve(randomNum);
        }else{
            reject('Error: Random number is greater than 0.5');
        }
    }, 2000);
});
myPromise
    .then(result => {
        console.log('Success: ', result);
    })
    .catch(error => {
        console.log(error);
    })

// 11
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
});

Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
});

// 12
console.log('Start');
let data = '';
for(let i = 0; i < 100; i++){
    data += i;
}
console.log('Finished with data: ' + data);

// 13
let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000)
});

myPromise1.then((value) => {
    console.log(value);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

async function asynFunction() {
    let value = await myPromise2;
    console.log(value);
}
asynFunction();

// 14
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea());
const square = new Square(5);
console.log(square.getArea());