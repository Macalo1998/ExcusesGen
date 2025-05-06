import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car','my computer'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  function ExcusesGen(){
    let rand = Math.floor(Math.random()*4);
    return rand
  }
  function Excuses(){
    let Excusa = [];
    Excusa[0]= who[ExcusesGen()];
    Excusa[1]= action[ExcusesGen()];
    Excusa[2]= what[ExcusesGen()];
    Excusa[3]= when[ExcusesGen()];
    return Excusa.join(" ");
  }

  document.getElementById("excuses").innerHTML = Excuses();
};