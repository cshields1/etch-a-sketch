const resetButton = document.querySelector("button");
const gridContainer = document.querySelector("#grid-container");

createSquares();

resetButton.addEventListener("click", () => {
  clearGrid();
  let gridSet = prompt("How many squares per side? (1-100)");
  if (gridSet > 100) {
    while (gridSet > 100) {
      gridSet = prompt("How many squares per side? (1-100)");
    }
  }
  if (!gridSet) gridSet = 16;
  createSquares(gridSet);
});

function createSquares(gridSet = 16) {
  for (let i = 1; i <= gridSet; i++) {
    let row = document.createElement("div");
    row.classList.add("row", i);

    for (let i = 1; i <= gridSet; i++) {
      let square = document.createElement("div");
      square.classList.add("square", i);
      row.appendChild(square);
    }
    gridContainer.appendChild(row);

    const squares = document.querySelectorAll(".square");

    for (let square of squares) {
      square.addEventListener("mouseenter", () =>
        square.classList.add("hover")
      );
    }
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
