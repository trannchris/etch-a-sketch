const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(gridCell);
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const slider = document.querySelector("#slider");
const sizeValue = document.querySelector(".value");
slider.addEventListener("input", function () {
  let size = document.querySelector("#slider").value;
  sizeValue.textContent = size;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr)`
  );
  for (let i = 0; i < size ** 2; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(gridCell);
  }
});

resetGrid = () => {};

createGrid();
