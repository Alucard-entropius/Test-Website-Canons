function greeting() {
  document.getElementById('HiddenMessage').style.display = "block";
  document.getElementById('countDownButton').style.display = "block";
}

function countDown() {
  let currentValue = document.getElementById('countDownButton').innerHTML;
  let newValue = 0;
  if(currentValue > 0) {
    newValue = currentValue - 1;
  }
  document.getElementById('countDownButton').innerHTML = newValue;

}

function quizz() {
  let button = document.getElementById('countDownButton').innerHTML;
  console.log(button);
  if (button === '0'){
    document.getElementById('quiz').style.display = "block";
    }
}

/*function writeNames() {
  let names = [];
  document.getElementById('loreChars').value.push(names);
  return names[];
}*/
