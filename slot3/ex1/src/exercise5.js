const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 22 },
  { name: "Cindy", age: 15 },
  { name: "David", age: 13 },
  { name: "Eva", age: 30 }
];

const teen = [...people].sort((a, b) => a.age - b.age);
console.log(teen);
const teen19 = people.filter(p => p.age == 19);
console.log(`Đếm có ${teen19.length}`);

const teens = people.filter(p => p.age >= 13 && p.age <= 19).map(p => `${p.name} có ${p.age} tuổi`);
teens.forEach(line => console.log(line));

