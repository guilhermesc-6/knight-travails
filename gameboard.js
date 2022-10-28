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

export { gameboard };
