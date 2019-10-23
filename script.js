const button = document.createElement("button");
button.innerText = "Add Square";
document.body.appendChild(button);
const colors = ["green", "blue", "orange", "darkgreen", "black", "brown"];
let i = 1;

button.addEventListener("click", function() {
  const square = document.createElement("div");
  square.className = "div-box";
  square.id = i;
  document.body.appendChild(square);
  i++;
  square.addEventListener("mouseover", function() {
    let squareID = square.id;
    square.innerText = squareID;
  });
  square.addEventListener("mouseout", function() {
    square.innerText = "";
  });
  square.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    square.style.background = `rgb(${r},${b},${g})`;
  });

  square.addEventListener("dblclick", function() {
    let squareID = square.id;
    if (squareID % 2 === 0) {
      let selectedID = parseInt(squareID) + 1;
      selectedSquare = document.getElementById(selectedID);
      console.log(selectedID);
      if (selectedSquare === null) {
        alert("There is no more square after");
        return;
      }
      selectedSquare.outerHTML = "  ";
    } else {
      let selectedID = parseInt(squareID) - 1;
      selectedSquare = document.getElementById(selectedID);
      if (selectedSquare === null) {
        alert("There is no more square after");
        return;
      }
      selectedSquare.style.display = "none";
    }
  });
});
