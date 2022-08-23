window.addEventListener("DOMContentLoaded", () => {
  function exponentiation(a, b) {
    return a ** b;
  }

  alert(
    "Данная программа предназначена для возведения числа в степень, для начала нажмите ОК, и следуйте подсказкам"
  );

  for (let i = 0; i < 1; i++) {
    const a = +prompt("Введите число, которое нужно возвести в степень"),
      b = +prompt(
        "Введите число степени, в которую нужно возвести предыдущее число"
      );
    if (
      a != null &&
      b != null &&
      a != "" &&
      isFinite(a) &&
      isFinite(b) &&
      a != 0 &&
      b != 0
    ) {
      alert(`Расчет: ${a} в ${b} степени, будет ${exponentiation(a, b)}`);
      i--;
    } else {
      alert("Данные не заполнены либо введены не верно! Повторите ввод!");
      i--;
    }
  }
});
