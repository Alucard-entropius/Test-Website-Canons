
function randomize() {
  let x = genres[Math.floor(Math.random() * genres.length)];;
  let y = names[Math.floor(Math.random() * names.length)];;
  let z = document.querySelector("input[type='radio'][name='instance']:checked").value;

  console.log("How about " + x + " story about " + y + " in " + z + ".");
  document.getElementById('finalAnswer').innerHTML = "<br>How about " + x + " story about " + y + " in " + z + ".";
}
