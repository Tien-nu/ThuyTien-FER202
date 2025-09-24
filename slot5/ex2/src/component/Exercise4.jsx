function Exercise4() {
    const ages = [33, 12, 20, 16, 16, 16];
    const [first, , third = 0, ...other] = ages;
  return (
    <div>
      <h2>Exercise 4</h2>
      <p>
        First: {first} <br />
        Third: {third} <br />
        Other: {other.join(", ")}   
      </p>
    </div>
  );
}

export default Exercise4;