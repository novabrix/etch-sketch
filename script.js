console.log("JavaScript Connected!");
const container = document.querySelector("div");

const divMaker = function () {
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
};
divMaker();
