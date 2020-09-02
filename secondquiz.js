let genres = [];
function secondQuizOne(){
  if(document.querySelector('input[type="checkbox"]:checked')) {
    let checkbox = document.getElementById('genre1').name;
      genres.push(checkbox);
  }
  console.log(genres);
  document.getElementById('quizzz').style.display = "block";
}

function secondQuizTwo(){
  if(document.querySelector('input[type="checkbox"]:checked')) {
    let checkbox = document.getElementById('genre2').name;
      genres.push(checkbox);
  }
  console.log(genres);
  document.getElementById('quizzz').style.display = "block";
}

function secondQuizThree(){
  if(document.querySelector('input[type="checkbox"]:checked')) {
    let checkbox = document.getElementById('genre3').name;
      genres.push(checkbox);
  }
  console.log(genres);
  document.getElementById('quizzz').style.display = "block";
}
