let a;
a = prompt("Введите число");
a = +a;
if (typeof a == "number") {
  if (isNaN(a)) {
    alert("Упс, кажется, вы ошиблись");
  } else {
    if (a % 2 == 0) {
      alert("Число " + a + " - четное");
    } else {
      alert("Число " + a + " - нечетное");
    }
  }
} else {
  alert("Упс, кажется, вы ошиблись");
}
