const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("button");

createSquares();

const squares = document.querySelectorAll(".square");

for (let square of squares) {
  square.addEventListener("mouseenter", () => square.classList.add("hover"));
  //   square.addEventListener(
  //     "mouseleave",
  //     () => (square.style.backgroundColor = "blue")
  //   );
}

resetButton.addEventListener("click", () => {
  for (let square of squares) {
    square.classList.remove("hover");
  }
  let gridSet = prompt("How many squares? (S x S)");
  createSquares(gridSet);
});

function createSquares(gridSet = 16) {
  for (let i = 1; i <= gridSet; i++) {
    let row = document.createElement("div");
    row.classList.add(
      "row",
      i,
      `row-cols-${gridSet}`,
      "justify-content-center"
    );
    for (let i = 1; i <= gridSet; i++) {
      let square = document.createElement("div");
      square.classList.add("square", i, "col");
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}
