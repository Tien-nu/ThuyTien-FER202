const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 22 },
  { name: "Cindy", age: 15 },
  { name: "David", age: 13 },
  { name: "Eva", age: 30 }
];

const teens = people.filter(p => p.age >= 13 && p.age <= 19).map(p => `${p.name} (${p.age})`);
teens.forEach(line => console.log(line));

