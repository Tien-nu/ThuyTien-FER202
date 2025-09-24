function Exercisre7() {
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
    return(
        <div>
            <h2>Exercise 7</h2>
            <p>companies[0]: {JSON.stringify(companies[0])}</p>
            <p>company0New: {JSON.stringify(company0New)}</p>
            <p>concatAll([1,2],[3],[4,5]): {JSON.stringify(concatAll([1,2],[3],[4,5]))}</p> 
        </div>
    )
  
}

export default Exercisre7;
