const numbers = [1, 3, 3, 1, 20, 7, 14, 5, 5];
const countItems = {};
for (const item of numbers) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
if (result.length > 0) {
  console.log(true);
} else {
  console.log(false);
}
