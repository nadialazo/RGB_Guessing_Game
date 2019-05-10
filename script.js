
let coloredSquare = document.getElementsByClassName("square");
let myColorArray = generateRandomColors();
let secretColor = getColor();
let resetBtn = document.getElementById("reset");




document.getElementById("changingColor").innerHTML = secretColor;



//document.getElementById('result').style.color = 'white';




// changes the colors of ther other squares after the correct square has been selected
function changeColors(color) {
  for (let i = 0; i < coloredSquare.length; i++) {
    coloredSquare[i].style.backgroundColor = color;
  }
}

function generateRandomColors() {
  let newColorArray = [];
  for (i = 0; i < coloredSquare.length; i++) {
    newColorArray.push(randomColor());
    console.log(newColorArray);
  }
  return newColorArray;
}

//generates the number in th hearder
function getColor() {
  let randomMyArray = myColorArray[Math.floor(Math.random() * myColorArray.length)];
  return randomMyArray;
}

getColor();


function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

randomColor();


for (i = 0; i < coloredSquare.length; i++) {
  coloredSquare[i].style.backgroundColor = myColorArray[i];
  coloredSquare[i].addEventListener('click', function () {
    let clickedSquare = this.style.backgroundColor;
    if (clickedSquare === secretColor) {
      document.getElementById('result').textContent = "Correct!";
      changeColors(clickedSquare);
      document.getElementById('header').style.backgroundColor = clickedSquare;
      document.getElementById('reset').innerHTML = 'Play Again?'
    } else {
      this.style.backgroundColor = 'rgb(35, 35, 35)';
      document.getElementById('result').innerHTML = "Try again..."
    }
  })
}


resetBtn.addEventListener('click', function (){
myColorArray = generateRandomColors(myColorArray.length);
secretColor = getColor();
document.getElementById("changingColor").innerHTML = getColor();
document.getElementById('result').innerHTML = "";
document.getElementById('header').style.backgroundColor = 'steelblue';
document.getElementById('reset').innerHTML = 'New Colors'
for (let i = 0; i<coloredSquare.length; i++){
  coloredSquare[i].style.backgroundColor = myColorArray[i];
}
})

















