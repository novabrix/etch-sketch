console.log("JavaScript Connected!");
const container = document.querySelector("div");
const desc = document.querySelector("h3");

function defaultGrid() {
  for (let i = 1; i < 17; i++) {
    let holder = document.createElement("div");
    holder.className = `senior-div${i}`;
    container.appendChild(holder);
    console.log(`======= Senior-Div${i} created! =======`);
    for (let i = 1; i < 17; i++) {
      let smallHold = document.createElement("div");
      smallHold.className = `junior-div${i}`;
      console.log(`Junior-Div${i} created!`);
      holder.appendChild(smallHold);
    }
  }
}
defaultGrid();

function newGrid() {
  const divMaker = function () {
    let prompter = prompt("Enter the square size you prefer! (Num x Num)");
    let div = document.querySelector("div")
    div.remove();
    const container = document.createElement("div");
    container.classList.add("container");
    
    if (3 < prompter < 24) {
      for (let i = 1; i < 17; i++) {
        let holder = document.createElement("div");
        holder.className = `senior-div${i}`;
        container.appendChild(holder);
        console.log(`======= Senior-Div${i} created! =======`);
        for (let i = 1; i < 17; i++) {
          let smallHold = document.createElement("div");
          smallHold.className = `junior-div${i}`;
          console.log(`Junior-Div${i} created!`);
          holder.appendChild(smallHold);
        }
      }
    } else {
      alert ("3 - 24 grid sizes allowed only!")
    }
  };
  divMaker();
}
