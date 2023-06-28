const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color =  document.querySelector(".color");

btn.addEventListener("click", function(){
    // let hexColor = "#";
    let hexColor ="";
    
          hexColor = colors[getRandomNumber()];
    

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

})

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length) 
}