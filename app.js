// 1.check for win
// 2.check for drew
// 3. switch_Turn

const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const x = document.createElement("x");
const o = document.createElement("o");
const h3 = document.querySelector("h3");
const restart = document.querySelector("#restartButton");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----------check win---------*/
const calculateWinner = () => {
  if (
    (cells[0].textContent === "o" || cells[0].textContent === "x") &&
    cells[0].textContent == cells[1].textContent &&
    cells[0].textContent == cells[2].textContent
  ) {
    return cells[0].textContent + " Won";
  } else if (
    (cells[3].textContent === "o" || cells[3].textContent === "x") &&
    cells[3].textContent == cells[4].textContent &&
    cells[3].textContent == cells[5].textContent
  ) {
    return cells[3].textContent + " Won";
  } else if (
    (cells[6].textContent === "o" || cells[6].textContent === "x") &&
    cells[6].textContent == cells[7].textContent &&
    cells[6].textContent == cells[8].textContent
  ) {
    return cells[6].textContent + " Won";
  } else if (
    (cells[0].textContent === "o" || cells[0].textContent === "x") &&
    cells[0].textContent == cells[3].textContent &&
    cells[0].textContent == cells[6].textContent
  ) {
    return cells[0].textContent + " Won";
  } else if (
    (cells[1].textContent === "o" || cells[1].textContent === "x") &&
    cells[1].textContent == cells[4].textContent &&
    cells[1].textContent == cells[7].textContent
  ) {
    return cells[1].textContent + " Won";
  } else if (
    (cells[2].textContent === "o" || cells[2].textContent === "x") &&
    cells[2].textContent == cells[5].textContent &&
    cells[2].textContent == cells[8].textContent
  ) {
    return cells[2].textContent + " Won";
  } else if (
    (cells[0].textContent === "o" || cells[0].textContent === "x") &&
    cells[0].textContent == cells[4].textContent &&
    cells[0].textContent == cells[8].textContent
  ) {
    return cells[0].textContent + " Won";
  } else if (
    (cells[2].textContent === "o" || cells[2].textContent === "x") &&
    cells[2].textContent == cells[4].textContent &&
    cells[2].textContent == cells[6].textContent
  ) {
    return cells[2].textContent + " Won";
  } else if (
    cells[0].textContent != "" &&
    cells[1].textContent != "" &&
    cells[2].textContent != "" &&
    cells[3].textContent != "" &&
    cells[4].textContent != "" &&
    cells[5].textContent != ""
  ) {
    return "drew";
  }
};

//-------------do if the game end in winner or drew--------
const clickHandler = (e) => {
  put(e.target);
  const winner = calculateWinner();
  if (winner) {
    h3.innerText = winner.toUpperCase();
    console.log(winner); //do something to tell about the winner
  }
  if (calculateDraw()) {
    console.log("drew");
  }
};

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", clickHandler, { once: true });
}

const gameState = {
  x: true,
};

function put(e) {
  if (gameState.x === true) {
    e.innerText = "x";
    gameState.x = false;
  } else {
    e.innerText = "o";
    gameState.x = true;
  }
}
function reset() {
  for (let item of cells) {
    item.textContent = "";
  }
}
board.addEventListener("click", clickHandler, { once: true });
restart.addEventListener("click", reset);
