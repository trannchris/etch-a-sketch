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

changeGridSize = () => {
  gridSize = prompt("Please enter a size between 2 and 100.");
  if (Number.isNaN(gridSize) || 2 < gridSize > 100) {
    alert("Invalid grid size");
  } else {
    removeAllChildNodes(grid);
    grid.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr)`
    );
    for (let i = 0; i < gridSize ** 2; i++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("gridCell");
      gridCell.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "black";
      });
      grid.appendChild(gridCell);
    }
  }
};

createGrid();
