// 1
const arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    console.log("for:" + arr[i]);
}

arr.forEach((num) => {
    console.log("forEach:" + num);
})

arr.map((num) => {
    console.log("map:" + num);
})

// 2
const numbers = [1, 2, 3, 4, 5 ,6 ,7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//3
const people = [
    {id: 1, name: 'Alice', age: 20},
    {id: 2, name: 'Bob', age: 25},
    {id: 3, name: 'Charlie', age: 30}
]
people.forEach((person) => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
})
const over20 = people.filter((person) => person.age > 20);
console.log(over20);