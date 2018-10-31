const DEFAULT_POINT_VALUE = 1000;
var points = 0;

window.onload = function()
{
  document.getElementById("currentPoints").innerText = DEFAULT_POINT_VALUE;
  points = DEFAULT_POINT_VALUE;
};

function validate()
{
  if(isValidChoice() && isValidBet())
  {
    roll();
  }
}

function isValidChoice()
{
  if(document.getElementById("even").checked || document.getElementById("odd").checked)
  {
    document.getElementById("error").innerText = "";
    return true;
  }
  else
  {
    document.getElementById("error").innerText = "Please Select An Option!";
    return false;
  }
}

function isValidBet()
{
  var betAmount = +document.getElementById("betAmount").value;

  if(betAmount > 0 && betAmount <= getPoints())
  {
    return true;
  }
  else
  {
    document.getElementById("error").innerText = "Please Enter A Valid Bet Amount!";
    return false;
  }
}

function roll()
{
  var dieValue1 = Math.floor(Math.random() * 6) + 1;
  var dieValue2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("die1").innerText = dieValue1;
  document.getElementById("die2").innerText = dieValue2;

  var diceSum = dieValue1 + dieValue2;
  document.getElementById("diceTotal").innerText = diceSum;

  var result = document.getElementById("result");

  if(document.getElementById("even").checked && diceSum % 2 == 0 || document.getElementById("odd").checked && diceSum % 2 !=0)
  {
    result.innerText = "WINNER!";
    calculatePoints(true);
  }
  else
  {
    result.innerText = "LOSER!";
    calculatePoints(false);
  }
}

function calculatePoints(win)
{
  var betAmount = +document.getElementById("betAmount").value;
  points = getPoints();

  if(win)
  {
    points += (betAmount * 2);
  }
  else
  {
    points -= betAmount;
  }
  updatePoints(points);
}

function updatePoints(newPointValue)
{
  points = newPointValue;
  document.getElementById("currentPoints").innerText = points;
}

function getPoints()
{
  return points;
}
