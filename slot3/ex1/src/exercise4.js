const ages = [33, 12, 20, 16, 16, 16];
const [first, , third = 0, ...other] = ages;
// if(first % 2 === 0){
//     console.log(`${first} is even number`);
// }else{
//     console.log(`${first} is odd number`);
// }
// const evenNumbers = other.filter(age => age % 2 === 0);
// console.log(evenNumbers);
console.log(first);
console.log(third);
console.log(other);