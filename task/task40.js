const arr = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
  ];
  const highest = (arr) => {
    const total = arr.reduce((initial, current) => {
        return initial + current.price
    }, 0);
    const avg = total / arr.length;
    const result = arr.filter(({ price }) => price > avg).map(({ name }) => name);
    return result;
  };
  console.log(highest(arr));