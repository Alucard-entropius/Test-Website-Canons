let names = [''];

function writeNames() {
  let inputText = document.getElementById('inputText').value;
  names.push(inputText);

  let pval = "";

  for (let i = 0; i < names.length; i++) {
    pval = pval + names[i] + "<br/>";
  }

  document.getElementById('ptext').innerHTML = "My fav chars are: " + pval;
  console.log(names);

  if(names.length === 4) {
    document.getElementById('addButton').style.display = "none";
    document.getElementById('2ndquiz').style.display = "block";
  }
}
