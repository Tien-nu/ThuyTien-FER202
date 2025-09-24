const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


const stats = age.reduce(
  (acc, age) => {
    // Tổng
    acc.total += age;


    // Min/Max
    if (age < acc.min) acc.min = age;
    if (age > acc.max) acc.max = age;


    // Buckets
    if (age >= 13 && age <= 19) {
      acc.buckets.teen++;
    } else if (age >= 20) {
      acc.buckets.adult++;
    }


    return acc;
  },
  { total: 0, min: Infinity, max: -Infinity, buckets: { teen: 0, adult: 0 } }
);

let total = 0;
for (let value of age) {
  total += value;
}
const minValue = Math.min(...age);
const maxValue = Math.max(...age);
console.log("Min:", minValue);
console.log("Max:", maxValue);
console.log("Total:", total);


// In kết quả
console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log("Buckets:", stats.buckets);