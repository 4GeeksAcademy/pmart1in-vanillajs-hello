/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeroPalos = Math.floor(Math.random() * palos.length);
  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  console.log(palos[numeroPalos], numeros[numeroAleatorio]);
  let top = document.querySelector("#top");
  let bot = document.querySelector("#bot");
  let number = document.querySelector("#number");
  top.innerHTML = palos[numeroPalos];
  bot.innerHTML = palos[numeroPalos];
  number.innerHTML = numeros[numeroAleatorio];
  let currentClass =
    palos[numeroPalos] == "♦" || palos[numeroPalos] == "♥"
      ? "text-danger"
      : "text-dark";
  // palos == "♥" ? "text-danger" : "text-dark";
  top.className = currentClass;
  bot.className = currentClass;
  number.className = currentClass;

  setInterval(() => newCard(), 5000);
}

window.onload = function() {
  newCard();
};

let btnNuevaCarta = document.querySelector("#BtnNewCard");
btnNuevaCarta.addEventListener("click", () => newCard());
