function Exercise5() {
    const people = [
        { name: "Ann", age: 19 },
        { name: "Bob", age: 22 },
        { name: "Cindy", age: 15 },
        { name: "David", age: 13 },
        { name: "Eva", age: 30 }
    ];
    // loc nhung nguoi tuoi teen (13-19), sap xep theo tuoi tang dan
  return (
    <div>
      <h2>Exercise 5</h2>
      <p>
        {people
            .filter((p) => p.age >= 13 && p.age <= 19)
            .sort((a, b) => a.age - b.age)
            .map((p) => (
            <span key={p.name}>
                {p.name} ({p.age})
                <br />
            </span>
            ))}
        </p>

    </div>
  );
}

export default Exercise5;