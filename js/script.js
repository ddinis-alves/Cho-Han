function validate()
{
  if(document.getElementById("even").checked || document.getElementById("odd").checked)
  {
    document.getElementById("error").innerText = "";
    roll();
  }
  else
  {
    document.getElementById("error").innerText = "Please Select An Option!";
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
  }
  else
  {
    result.innerText = "LOSER!";
  }
}
