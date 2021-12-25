const number1 = document.querySelector("#num1") as HTMLInputElement;
const number2 = document.querySelector("#num2") as HTMLInputElement;
const button = document.querySelector("#button");

const add = (a  : number , b : number) =>{
    return a +  b;
}

button.addEventListener("click",() => {
    console.log(add(  +number1.value  ,  +number2.value));

})