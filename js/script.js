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

  checkDieValue(dieValue1, 1);
  checkDieValue(dieValue2, 2);

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

function getDiceImage(img, die)
{
  var dice; 

  if (die == 1)
  {
    dice = document.getElementById('die1');
  }
  else
  {
    dice = document.getElementById('die2');
  }

  dice.src = img;
}

function checkDieValue(dieValue, dice)
{
  var diceImage;
  switch(dieValue)
  {
    case 1:
      diceImage = "images/Dice1.png";
      break;
    case 2:
      diceImage = "images/Dice2.png";
      break;
    case 3:
      diceImage = "images/Dice3.png";
      break;
    case 4:
        diceImage = "images/Dice4.png";
      break;
    case 5:
        diceImage = "images/Dice5.png";
      break;
    case 6:
        diceImage = "images/Dice6.png";
      break;
  }

  if (dice == 1)
    getDiceImage(diceImage, 1);
  else
    getDiceImage(diceImage, 2);

}

function calculatePoints(win)
{
  var betAmount = +document.getElementById("betAmount").value;
  points = getPoints();

  if(win)
  {
    points += (betAmount);
  }
  else
  {
    points -= betAmount;
    checkZeroPoints(points);
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

function checkZeroPoints(pointLoss)
{
  if(pointLoss <= 0)
  {
    gameOver();
  }
}

function gameOver()
{
  document.getElementById("result").innerText = "GAME OVER! \n You Lost All Your Points!";
  disableForm();
}

function disableForm()
{
  document.getElementById("betAmount").disabled = true;
  document.getElementById("rollButton").disabled = true;
}

function toggleHelp()
{
  let info = document.getElementById("info");

  if (info.style.display === "none")
  {
    info.style.display = "block";
  }
  else
  {
    info.style.display = "none";
  }
}
