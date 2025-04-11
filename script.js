console.log("JavaScript Connected!");
const container = document.querySelector("div");
const desc = document.querySelector("h3");

function defaultGrid() {
  for (let i = 1; i < 16; i++) {
    let holder = document.createElement("div");
    holder.className = `senior-div${i}`;
    container.appendChild(holder);
    console.log(`======= Senior-Div${i} created! =======`);
    for (let i = 1; i < 17; i++) {
      let smallHold = document.createElement("div");
      smallHold.className = `junior-div${i}`;
      smallHold.addEventListener(
        "mouseenter",
        (event) => {
          event.target.style.backgroundColor = "red";
          setTimeout(() => {
            event.target.style.backgroundColor = "lightcoral";
          }, 1500);
        },
        false
      );
      console.log(`Junior-Div${i} created!`);
      holder.appendChild(smallHold);
    }
  }
}
defaultGrid();

function newGrid() {
  const divMaker = function () {
    let prompter = prompt("Enter the squares per side for the new grid! (Num X Num)");
    /* let div = document.querySelector("div")
    div.remove();
    const container = document.createElement("div"); */
    container.classList.add("container");

    if (3 < prompter < 24) {
      for (let i = 1; i < prompter; i++) {
        let holder = document.createElement("div");
        holder.className = `senior-div${i}`;
        container.appendChild(holder);
        console.log(`======= Senior-Div${i} created! =======`);
        for (let i = 1; i < prompter; i++) {
          let smallHold = document.createElement("div");
          smallHold.className = `junior-div${i}`;
          smallHold.addEventListener(
            "mouseenter",
            (event) => {
              event.target.style.backgroundColor = "red";
              setTimeout(() => {
                event.target.style.backgroundColor = "lightcoral";
              }, 3500);
            },
            false
          );
          console.log(`Junior-Div${i} created!`);
          holder.appendChild(smallHold);
        }
      }
    } else {
      alert("3 - 24 grid sizes allowed only!");
    }
  };
  divMaker();
}
