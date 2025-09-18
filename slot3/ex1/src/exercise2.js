function sum(...nums) {
return nums.reduce((acc, val) => {
    let n = Number(val);          
    return isNaN(n) ? acc : acc + n;  
}, 0);
}
console.log(sum(1, 2, 3));        
console.log(sum(1, 'x', 4));

function avg(...nums) {
const validNums = nums.reduce((acc, val) => {
    let n = Number(val);
    if (!isNaN(n)) acc.push(n);       
    return acc;
}, []);

if (validNums.length === 0) return 0;

const total = validNums.reduce((acc, val) => acc + val, 0);
return (total / validNums.length).toFixed(2); 
}
    
console.log(avg(1, 2, 3));     
console.log(avg());               



