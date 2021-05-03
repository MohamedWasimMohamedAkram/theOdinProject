function setBox(size){
const container = document.getElementById("mainContainer");
var all = document.getElementsByClassName('element');
var reset = document.getElementById("resetButton");
//const div = document.createElement("div");
//div.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 50px); grid-template-rows: repeat(16, 50px); width: auto; height: auto; border: 1px solid black');
//div.classList.add("grid-container");
for (let i  = 0; i < size*size; i++){
    let gridElements = document.createElement("div");
    gridElements.classList.add("element");
    container.appendChild(gridElements);
}
let boxSize = 960/size + "px";
container.setAttribute("style", `display: grid; grid-template-columns: repeat(${size}, ${boxSize}); grid-template-rows: repeat(${size}, ${boxSize}); width: 960px; height: 960px; margin: auto`);
for (var i = 0; i < all.length; i++) {
    all[i].setAttribute("style", "border: 1px solid black");
}
document.addEventListener("mouseover", (e) => {
    let className = e.target.className;
    if(className != "element"){
        return;
    }
    console.log(className);
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.setAttribute("style", `background-color: ${bgColor} ; border: 1px solid black`);
})

document.addEventListener("click", (e) => {
    let userPrompt = prompt("Enter dimension (1 to 100): ");
    let buttonId = e.target.className;
    if(buttonId != "resetButton"){
        return;
    }
    let boxSize = 960/userPrompt + "px";
    container.setAttribute("style", `display: grid; grid-template-columns: repeat(${userPrompt}, ${boxSize}); grid-template-rows: repeat(${userPrompt}, ${boxSize}); width: 960px; height: 960px; margin: auto`);
    for (var i = 0; i < all.length; i++) {
        all[i].setAttribute("style", "border: 1px solid black");
    }
})
}
let userPrompt = prompt("Enter dimension (1 to 100): ");
setBox(userPrompt);

