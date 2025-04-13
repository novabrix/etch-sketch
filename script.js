"use strict"
console.log("JavaScript Connected!");
const container = document.querySelector("div");
const desc = document.querySelector("h3");
const body = document.querySelector("body");

function defaultGrid() {
  for (let i = 1; i < 21; i++) {
    let holder = document.createElement("div");
    holder.className = `senior-div`;
    container.appendChild(holder);
    for (let i = 1; i < 21; i++) {
      let smallHold = document.createElement("div");
      smallHold.className = `junior-div`;
      smallHold.addEventListener(
        "mouseenter",
        (event) => {
          event.target.style.backgroundColor = "darkslategray";
          setTimeout(() => {
            event.target.style.backgroundColor = "black";
          }, 500);
        },
        false
      );
      holder.appendChild(smallHold);
    }
  }
}
defaultGrid();


function deleteGrid () {
  const slaughter = document.getElementsByClassName("senior-div");
  console.log(slaughter)
  slaughter.removeChildren();
  console.log(slaughter);
}

function newGrid() {
    let prompter = prompt("Enter the squares per side for the new grid! (Num X Num)");

    if (prompter < 41 && prompter > 4) {
      for (let i = 1; i < prompter; i++) {
        let holder = document.createElement("div");
        holder.className = `senior-div`;
        container.appendChild(holder);
        for (let i = 1; i < prompter; i++) {
          let smallHold = document.createElement("div");
          smallHold.className = `junior-div`;
          if (prompter < 27 && prompter > 19) {
            smallHold.style.padding = "7px";
          }
          if (prompter < 36 && prompter > 26) {
            smallHold.style.padding = "6px";
          }
          if (prompter < 41 && prompter > 35) {
            smallHold.style.padding = "5px";
          }
          smallHold.addEventListener(
            "mouseenter",
            (event) => {
              event.target.style.backgroundColor = "darkslategray";
              setTimeout(() => {
                event.target.style.backgroundColor = "black";
              }, 500);
            },
            false
          );
          holder.appendChild(smallHold);
        }
      }
    } else {
      alert("5 - 40 grid sizes allowed only!");
    }
}
let colors = ['black', 'orange', 'yellow', 'green', 'mediumblue', 'indigo',
   'purple', 'gray', 'pink', 'brown', 'black', 'eraser' ]
function multicolor(value) {

}