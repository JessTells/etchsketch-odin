const gridContainer = document.getElementById("grid-container");
const btnDimensionSelector = document.querySelectorAll(".btn-dim");
const btnReset = document.getElementById("reset");

function createGrid(gridDimension){
    console.log("Create grid");
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for(let i = 0; i < gridDimension; ++i){
        const newGridRow = document.createElement("div");
        newGridRow.classList.add("grid-row");
        gridContainer.appendChild(newGridRow);

        for(let j = 0; j < gridDimension; ++j){
            const newGridSquare = document.createElement("div");
            newGridSquare.classList.add("grid-square");
            newGridSquare.style.backgroundColor = "rgb(250, 250, 250)";
            newGridRow.appendChild(newGridSquare);
        }
        
    }
    const hoverOverSquares = document.querySelectorAll(".grid-square");
    createSquareFunctionality(hoverOverSquares);
}

function createSquareFunctionality(inputSquares){
    inputSquares.forEach(div => {
        div.addEventListener("mouseover", function(){
            const computedStyle = window.getComputedStyle(div);
            const backgroundColor = computedStyle.backgroundColor;
            const rgbValues = backgroundColor.match(/\d+/g);
            console.log(rgbValues);
            
            const whiteVal = parseInt(rgbValues[0]) - 50;
            
            div.style.backgroundColor = `rgb(${whiteVal}, ${whiteVal}, ${whiteVal})`;
            
        });
    });
}

btnReset.addEventListener("click", function() {
    const squares = document.querySelectorAll(".grid-square")
    squares.forEach(div => {
        div.style.backgroundColor = "rgb(250, 250, 250)";
    });
});

btnDimensionSelector.forEach(button => {
    button.addEventListener("click", function(){
        console.log("Grid Created");
        createGrid(parseInt(button.id, 10));
    });
});

createGrid(16);
