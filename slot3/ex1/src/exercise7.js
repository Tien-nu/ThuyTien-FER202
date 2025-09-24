const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 }
];

// Tạo company0New với start += 1 mà không làm đổi companies[0]
const company0New = { ...companies[0], start: companies[0].start + 1 };

// Hàm concatAll
function concatAll(...arrays) {
  return arrays.flat();
}

// In kết quả
console.log("companies[0]:", companies[0]);
console.log("company0New:", company0New);
console.log("concatAll([1,2],[3],[4,5]):", concatAll([1,2],[3],[4,5]));
