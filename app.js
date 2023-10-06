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

removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

chooseRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

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

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  let size = document.querySelector("#slider").value;
  let gridCells = grid.children;
  for (let i = 0; i < size ** 2; i++) {
    gridCells[i].style.backgroundColor = "white";
  }
});

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", function () {
  let size = document.querySelector("#slider").value;
  let gridCells = grid.children;
  for (let i = 0; i < size ** 2; i++) {
    gridCells[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = chooseRandomColor();
    });
  }
});

createGrid();
