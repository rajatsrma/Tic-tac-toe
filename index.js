// Player Signs
// var playerSign1 = "X";
// var playerSign2 = "0";

//bool to keep track on player turns
// turn = 0 for "0" and turn = 1 for "X"
var turn = 1; //1st player
changePlayer(turn);
//Show current player
function changePlayer(turn) {
  document.getElementById("player").textContent = turn ? "X" : "O";
  checkResult(!turn);
}

//filling boxes on click
//box 1
document.getElementById("one").addEventListener("click", function () {
  var boxContent = document.getElementById("one").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("one").textContent = "X";
    else document.getElementById("one").textContent = "O";
    document.getElementById("one").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 2
document.getElementById("two").addEventListener("click", function () {
  var boxContent = document.getElementById("two").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("two").textContent = "X";
    else document.getElementById("two").textContent = "O";
    document.getElementById("two").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 3
document.getElementById("three").addEventListener("click", function () {
  var boxContent = document.getElementById("three").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("three").textContent = "X";
    else document.getElementById("three").textContent = "O";
    document.getElementById("three").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 4
document.getElementById("four").addEventListener("click", function () {
  var boxContent = document.getElementById("four").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("four").textContent = "X";
    else document.getElementById("four").textContent = "O";
    document.getElementById("four").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 5
document.getElementById("five").addEventListener("click", function () {
  var boxContent = document.getElementById("five").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("five").textContent = "X";
    else document.getElementById("five").textContent = "O";
    document.getElementById("five").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 6
document.getElementById("six").addEventListener("click", function () {
  var boxContent = document.getElementById("six").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("six").textContent = "X";
    else document.getElementById("six").textContent = "O";
    document.getElementById("six").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 7
document.getElementById("seven").addEventListener("click", function () {
  var boxContent = document.getElementById("seven").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("seven").textContent = "X";
    else document.getElementById("seven").textContent = "O";
    document.getElementById("seven").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 8
document.getElementById("eight").addEventListener("click", function () {
  var boxContent = document.getElementById("eight").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("eight").textContent = "X";
    else document.getElementById("eight").textContent = "O";
    document.getElementById("eight").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});
//box 9
document.getElementById("nine").addEventListener("click", function () {
  var boxContent = document.getElementById("nine").textContent;
  if (boxContent === "-") {
    if (turn) document.getElementById("nine").textContent = "X";
    else document.getElementById("nine").textContent = "O";
    document.getElementById("nine").style.color = "black";
    // checkResult(turn);
    turn = !turn;
    changePlayer(turn);
  }
});

// Result logic
function checkResult(turn) {
  var a = document.getElementById("one").textContent;
  var b = document.getElementById("two").textContent;
  var c = document.getElementById("three").textContent;
  var d = document.getElementById("four").textContent;
  var e = document.getElementById("five").textContent;
  var f = document.getElementById("six").textContent;
  var g = document.getElementById("seven").textContent;
  var h = document.getElementById("eight").textContent;
  var i = document.getElementById("nine").textContent;

  //winning combo check

  if (
    (a == b && b == c && a !== "-") ||
    (d == e && e == f && e !== "-") ||
    (g == h && h == i && i !== "-") ||
    (a == d && d == g && a !== "-") ||
    (b == e && e == h && e !== "-") ||
    (c == f && f == i && i !== "-") ||
    (a == e && e == i && i !== "-") ||
    (c == e && c == g && e !== "-")
  ) {
    document.getElementById("result").textContent = turn
      ? "player X won the game"
      : "player O won the game";
    document.getElementById("restart").removeAttribute("disabled");
  }

  // Game draw
  if (
    a !== "-" &&
    b !== "-" &&
    c !== "-" &&
    d !== "-" &&
    e !== "-" &&
    f !== "-" &&
    g !== "-" &&
    h !== "-" &&
    i !== "-"
  ) {
    document.getElementById("result").textContent = "Game draw";
    document.getElementById("restart").removeAttribute("disabled");
  }
}

// Restart button functionality
document.getElementById("restart").addEventListener("click", function () {
  location.reload();
});
