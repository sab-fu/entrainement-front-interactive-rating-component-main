/*   alert("helloo");*/
const numberselect = document.querySelector(".btn");
let button = document.querySelector(".button");
const defiresult = document.getElementsByClassName("defireponse");
const boxdefi = document.getElementsByClassName("boxdefi");

numberselect.addEventListener("click", function () {
  numberselect.style.background = "hsl(216, 12%, 54%)";
  numberselect.style.color = "white";
});
numberselect.addEventListener("dblclick", (event) => {
  numberselect.style.background = "hsl(213, 19%, 18%)";
  numberselect.style.color = "hsl(216, 12%, 54%)";
});
ondblclick = (event) => {};

button.addEventListener("click", function () {
  button.style.background = "hsl(216, 12%, 54%)";
  button.style.color = "white";
});
