let names = ['myself'];

function writeNames() {
  let inputText = document.getElementById('inputText').value;
  names.push(inputText);

  let pval = "";

  for (let i = 0; i < names.length; i++) {
    pval = pval + names[i] + "<br/>";
  }

  document.getElementById('ptext').innerHTML = "My fav char is: " + pval;
  console.log(names);

}
