import { knightsTravails } from "./knight-travails.js";

//Create the chess Board
const gameboard = () => {
  //create chess board
  const defaultStartLocation = [0, 0];
  const coordArray = [];
  const chessTable = document.createElement("table");

  //create the board cells
  chessTable.setAttribute("class", "center");
  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement("tr");
    let cellRowCoord = Math.abs(i - 7);
    tableRow.textContent = cellRowCoord;
    for (let j = 0; j < 8; j++) {
      const tableCell = document.createElement("td");
      let cellCoumnCoord = j;
      tableCell.textContent = cellCoumnCoord;
      if ((i + j) % 2 == 0) {
        tableCell.setAttribute("class", "cell whitecell");
        tableRow.append(tableCell);
        coordArray.push(cellRowCoord);
        coordArray.push(cellCoumnCoord);
        tableCell.dataset.coordArray = coordArray;
        coordArray.splice(0, 2);
      } else {
        tableCell.setAttribute("class", "cell blackcell");
        tableRow.appendChild(tableCell);
        coordArray.push(cellRowCoord);
        coordArray.push(cellCoumnCoord);
        tableCell.dataset.coordArray = coordArray;
        coordArray.splice(0, 2);
      }
    }
    chessTable.appendChild(tableRow);
  }

  //create the knight end place him at start position
  const cellNodes = chessTable.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
      let knightImg = document.createElement("img");
      knightImg.src = "./assets/knight.svg";
      cellNode.appendChild(knightImg);
    }
  });

  document.body.appendChild(chessTable);
};

const resetBoard = (() => {
  const resetButton = document.querySelector(".clear");
  resetButton.addEventListener("click", () => {
    location.reload();
  });
})();

const uiController = () => {
  const cellNodes = document.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (cellNode.querySelector("img" !== null)) {
      let knightLocation = JSON.parse(`[${cellNode.dataset.coordArray}]`);
      console.log("Current knight location", knightLocation);
    }

    cellNode.addEventListener("click", () => {
      let clickedLocation = JSON.parse(`[${cellNode.dataset.coordArray}]`);
      console.log("Current location", clickedLocation);

      const cellNodes = document.querySelectorAll("td");
      cellNodes.forEach((cellNode) => {
        if (cellNode.querySelector("img") !== null) {
          let knightLocation = JSON.parse(`[${cellNode.dataset.coordArray}]`);
          console.log("Current knight location", knightLocation);
          const knightImg = document.querySelector("img");
          knightImg.remove();
          knightsTravails(knightLocation, clickedLocation);
        }
      });
      const knightImg = document.createElement("img");
      knightImg.src = "./assets/knight.svg";
      cellNode.appendChild(knightImg);
    });
  });
};

const displayMoves = (path, squareCoord) => {
  if (document.querySelector("p") !== null) {
    const displayDiv = document.querySelector(".display");
    const pNodes = document.querySelectorAll("p");
    pNodes.forEach((pNode) => pNode.remove());
  }
  const displayDiv = document.querySelector(".display");
  const moves = document.createElement("p");
  const coordList = document.createElement("p");
  moves.textContent = `The shortest path was ${path.length - 1} moves!`;
  coordList.innerHTML = squareCoord.join("<br>");
  displayDiv.appendChild(moves);
  displayDiv.appendChild(coordList);
};
export { gameboard, uiController, displayMoves };
