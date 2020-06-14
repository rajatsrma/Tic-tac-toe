// Win counts
var winX = 0;
var winO = 0;

// show these counts in the win count table

// var to keep track of win condition
var win = 0;

//bool to keep track on player turns
// turn = 0 for "0" and turn = 1 for "X"
var turn = 1; //1st player

// No. of times clicked on the board
var timesClicked = 0;

// Show current player
function changePlayer() {
  document.getElementById("currentPlayer").textContent = turn ? "X" : "O";
  checkResult();
}

// marking signs on the board according to the current player
var boxes = document.querySelectorAll("td");
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (box.textContent === "-") {
      timesClicked++;
      box.textContent = turn ? "X" : "O";
      turn = !turn;
      // check winning combinations
      changePlayer();
    }
  });
});

// Result check

function checkResult() {
  var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < winCombinations.length; i++) {
    if (
      boxes[winCombinations[i][0]].textContent ===
        boxes[winCombinations[i][1]].textContent &&
      boxes[winCombinations[i][1]].textContent ===
        boxes[winCombinations[i][2]].textContent &&
      boxes[winCombinations[i][1]].textContent != "-"
    ) {
      win = 1;
      console.log("game won");
    }
  }

  //draw check--
  if (timesClicked === 9 || win === 1) {
    // increase win count-
    // draw condition
    if (!win) {
      document.getElementById("winX").textContent++;
      document.getElementById("winO").textContent++;
    }
    // win condition
    if (win) {
      if (!turn) document.getElementById("winX").textContent++;
      else document.getElementById("winO").textContent++;
    }

    // enable buttons
    document.querySelectorAll("button").forEach(function (button) {
      button.disabled = false;
    });

    // diable clicking on the board on winning
    document.getElementById("ability").style.pointerEvents = "none";
    // enable both buttons

    // remove current player status
    document.getElementById("currentPlayer").textContent = "-";
  }
}

// Fresh start button functionality
document.getElementById("freshGame").addEventListener("click", function () {
  location.reload();
});

// Carry on button functionality
document.getElementById("continueGame").addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.textContent = "-";
  });
  // set winTrack bool = 0 and turn = 1
  turn = 1;
  win = 0;
  // set clicked = 0
  timesClicked = 0;
  // disable both the buttons
  document.querySelectorAll("button").forEach(function (button) {
    button.disabled = true;
  });
  // enable clicking on the board and
  document.getElementById("ability").style.pointerEvents = "auto";

  // set current player back to X
  document.getElementById("currentPlayer").textContent = "X";
});
