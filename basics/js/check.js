var number1 = document.querySelector("#num1");
var number2 = document.querySelector("#num2");
var button = document.querySelector("#button");
var add = function (a, b) {
    return a + b;
};
button.addEventListener("click", function () {
    console.log(add(+number1.value, +number2.value));
});
