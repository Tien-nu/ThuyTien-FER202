import React from "react";

function Exercise8() {
  const ages = [33, 12, 20, 16, 16, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const stats = ages.reduce(
    (acc, age) => {
      acc.total += age;

      if (age < acc.min) acc.min = age;

      if (age > acc.max) acc.max = age;

      if (age >= 20) acc.buckets.adult += 1;
      return acc;
    },
    { total: 0, min: Infinity, max: -Infinity, buckets: { teen: 0, adult: 0 } }
  );

  return (
    <div>
        <h2>Exercise 8</h2>
      
      <div>
        Total: {stats.total}, Min: {stats.min}, Max: {stats.max}
      </div>
      <div>
        Buckets: {JSON.stringify(stats.buckets)}
      </div>
    </div>
  );
}

export default Exercise8;