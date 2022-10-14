// 1.check for win
// 2.check for drew
// 3. switch_Turn

const board = document.querySelector(".board");
const cell = document.querySelectorAll(".cell");
const x = document.createElement("x");
const o = document.createElement("o");

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

board.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("x") || e.target.classList.contains("o")) {
  }
  return put(e.target);
});

function switch_Turn(e) {}
