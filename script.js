/***************** Declarations **********************/
const container = document.getElementById("container");
let gridSize = 15;
let grid;
const gridSizeBtn = document.querySelector(".gridSizeBtn");
let hover = [];
const randomButtom = document.querySelector(".randomButton");
const reset = document.querySelector(".reset");

/***************** Functions **************************/
function genGrid(gridSize){
    for (let i = 0;i<gridSize*gridSize;i++){
        grid = document.createElement("div");
        grid.id = ("row");
        grid.style.border = "1px solid black";
        grid.style.height = (500/gridSize).toString() + "px";
        grid.style.width = (500/gridSize).toString() + "px";
        grid.style.display = "inline-block";
        grid.style.boxSizing = "border-box";
        grid.style.backgroundColor = "white";
        container.appendChild(grid);
    }
    black();
}

function remove(delSize){
    for (let i = 0;i<delSize*delSize;i++){
    let del = document.getElementById("row");
    container.removeChild(del);
    }
}

function black(){
    hover = document.querySelectorAll("#row");
    for (let j = 0;j<hover.length;j++){
        hover[j].addEventListener("mouseover", ()=> {
            hover[j].style.background = "transparent";  
        });
    }
}

function randomClr(){
    hover = document.querySelectorAll("#row");
    for (let j = 0;j<hover.length;j++){
        hover[j].addEventListener("mouseover", ()=> {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            hover[j].style.background = `#${randomColor}`;  
        });
    }
}

/***************** Event Listners ************************/
gridSizeBtn.addEventListener("click", () => {
    let delSize = gridSize;
    gridSize = prompt("Enter the grid size");
    if (isNaN(gridSize) || gridSize == null || gridSize == "" || gridSize.trim() == ""){
        alert("Please enter a number");
    }
    else {
        remove(delSize);
        genGrid(gridSize);
    }
});

randomButtom.addEventListener("click", randomClr);

reset.addEventListener("click", () =>{
    let delSize = gridSize;
    remove(delSize);
    genGrid(gridSize);
});

genGrid(gridSize);



