let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"],
  ]);
  for (let pair of fruits) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
  }
  