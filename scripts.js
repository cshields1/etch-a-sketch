const resetButton = document.querySelector("button");
const gridContainer = document.querySelector("#grid-container");

createSquares();

resetButton.addEventListener("click", () => {
  clearGrid();
  let gridSet = prompt("How many squares per side? (1-100)");
  while (gridSet > 100) {
    gridSet = prompt("How many squares per side? (1-100)");
  }
  if (!gridSet) gridSet = 16;
  createSquares(gridSet);
});

function createSquares(gridSet = 16) {
  for (let i = 1; i <= gridSet; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row", i);

    for (let i = 1; i <= gridSet; i++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square", i);
      newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);

    const allSquares = document.querySelectorAll(".square");

    for (let square of allSquares) {
      square.addEventListener(
        "mouseenter",
        () => (square.style.backgroundColor = makeRandomColor())
      );
    }
  }
}

function makeRandomColor() {
  const randomRGBValue = () => Math.floor(Math.random() * 256) - 1;
  return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
