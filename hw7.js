const array = [0, 1, 2, 3, 4];
let even, odd;
even = 0;
odd = 0;
for (i = 0; i < array.length; i++) {
  if (typeof array[i] == "number") {
    if (array[i] == 0) {
      console.log(0);
    } else if (array[i] % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  } else {
    console.log("Ошибка!");
  }
}
console.log(
  "Кол-во четных чисел - " + even + ", кол-во нечетных чисел - " + odd
);
