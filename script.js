"use strict"
console.log("JavaScript Connected!");
const container = document.querySelector("div");
const desc = document.querySelector("h3");
const body = document.querySelector("body");
const seniorDiv = document.querySelector("div div");
const juniorDiv = document.querySelector("div div div");

function defaultGrid() {
  for (let i = 1; i < 16; i++) {
    let holder = document.createElement("div");
    holder.className = `senior-div ${i}`;
    container.appendChild(holder);
    for (let i = 1; i < 17; i++) {
      let smallHold = document.createElement("div");
      smallHold.className = `junior-div ${i}`;
      smallHold.addEventListener(
        "mouseenter",
        (event) => {
          event.target.style.backgroundColor = "lightcoral";
          setTimeout(() => {
            event.target.style.backgroundColor = "red";
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
  console.log(seniorDiv, juniorDiv);
  console.log(container)
}

function newGrid() {
  const divMaker = function () {
    let prompter = prompt("Enter the squares per side for the new grid! (Num X Num)");
    container.classList.add("container");

    if (prompter < 41 && prompter > 4) {
      for (let i = 1; i < prompter; i++) {
        let holder = document.createElement("div");
        holder.className = `senior-div ${i}`;
        container.appendChild(holder);
        for (let i = 1; i < prompter; i++) {
          let smallHold = document.createElement("div");
          smallHold.className = `junior-div ${i}`;
          smallHold.addEventListener(
            "mouseenter",
            (event) => {
              event.target.style.backgroundColor = "lightcoral";
              setTimeout(() => {
                event.target.style.backgroundColor = "red";
              }, 500);
            },
            false
          );
          holder.appendChild(smallHold);
        }
      }
    } else {
      alert("5 - 20 grid sizes allowed only!");
    }
  };
  divMaker();
}
let colors = ['red', 'orange', 'yellow', 'green', 'mediumblue', 'indigo',
   'purple', 'gray', 'pink', 'brown', 'black', 'eraser' ]