const resetButton = document.querySelector("#reset-btn");
const gridContainer = document.querySelector("#grid-container");
const grayscaleButton = document.querySelector("#grayscale-btn");
const rainbowButton = document.querySelector("#rainbow-btn");
const grainbowButton = document.querySelector("#grainbow-btn");

createSquares();

resetButton.addEventListener("click", () => resetGrid());
grayscaleButton.addEventListener("click", () => setGrayscaleMode());
rainbowButton.addEventListener("click", () => setRainbowMode());
grainbowButton.addEventListener("click", () => setGrainbowMode());

function createSquares(gridSet = 16) {
  for (let i = 1; i <= gridSet; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row", i);

    for (let i = 1; i <= gridSet; i++) {
      let square = document.createElement("div");
      square.classList.add("square", i);
      square.addEventListener("mouseover", setRainbow);
      newRow.appendChild(square);
    }
    gridContainer.appendChild(newRow);
  }
}

function setRainbow() {
  this.style.background = makeRandomColor();
}

function makeRandomColor() {
  const randomRGBValue = () => Math.floor(Math.random() * 256) - 1;
  return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let gridSet = prompt("How many squares per side? (1-100)");
  while (gridSet > 100) {
    gridSet = prompt("How many squares per side? (1-100)");
  }
  if (!gridSet) gridSet = 16;
  createSquares(gridSet);
}

function setGrayscaleMode() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.removeEventListener("mouseover", setRainbow);
    square.pass = 0;
    square.addEventListener("mouseover", setGrayscale);
  }
}

function setGrayscale() {
  this.style.backgroundColor = "black";
  this.pass += 1;
  if (this.style.opacity < 1) this.style.opacity = 0.1 * this.pass;
}

function setRainbowMode() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.removeEventListener("mouseover", setGrayscale);
    square.addEventListener("mouseover", setRainbow);
  }
}

function setGrainbowMode() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.removeEventListener("mouseover", setRainbow);
    square.removeEventListener("mouseover", setGrayscale);
    square.pass = 0;
    square.addEventListener("mouseover", setGrainbow);
  }
}

function setGrainbow() {
  this.style.background = makeRandomColor();
  this.pass += 1;
  if (this.style.opacity < 1) this.style.opacity = 0.2 * this.pass;
}
