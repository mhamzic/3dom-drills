// creating elements  and setting parameters
const button = document.createElement("button");
const buttonContainer = document.createElement("div");
const mainContainer = document.createElement("div");
let clicks = 0;

buttonContainer.id = "button-container";
mainContainer.id = "main-container";
button.innerText = "Add Square";
button.style.display = "block";

// appending starter elemenets and creating structure
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(button);
document.body.appendChild(mainContainer);

// add event listnerer to the button
button.addEventListener("click", newDiv);

// create new div and add class and id no
function newDiv(e) {
  newDiv = document.createElement("div");
  newDiv.className = "box";
  mainContainer.appendChild(newDiv);
  let clicksNumber = (document.getElementsByTagName(button).value = ++clicks);
  newDivId = clicksNumber;
  newDiv.id = newDivId;

  // add event listeners to newly created div
  newDiv.addEventListener("mouseover", showId);
  newDiv.addEventListener("mouseout", hideId);
  newDiv.addEventListener("click", changeColor);
  newDiv.addEventListener("dblclick", removeDiv);
}

//show id on mouse hover
function showId(e) {
  e.target.innerText = e.target.id;
}

//hide id on mouse hover
function hideId(e) {
  e.target.innerText = "";
}

// change color on click
function changeColor(e) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// remove div on doubleclick
function removeDiv(e) {
  // remove right div if clicked id is even
  if (e.target.id % 2 === 0) {
    if (e.target.nextSibling === null) {
      alert("There is no more divs to remove");
      return;
    }
    e.target.nextSibling.remove();

    // remove left dif if clicked id is odd
  } else {
    if (e.target.previousSibling === null) {
      alert("There is no more divs to remove");
      return;
    }
    e.target.previousSibling.remove();
  }
}
