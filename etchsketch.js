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
            newGridRow.appendChild(newGridSquare);
        }
        
    }
    const hoverOverSquares = document.querySelectorAll(".grid-square");
    createSquareFunctionality(hoverOverSquares);
}

function createSquareFunctionality(inputSquares){
    inputSquares.forEach(div => {
        div.addEventListener("mouseover", function(){
            console.log("Hovered div");
            div.style.backgroundColor = "black";
        });
    });
}



btnReset.addEventListener("click", function() {
    hoverOverSquares.forEach(div => {
      div.style.backgroundColor = "white";
    });
});

btnDimensionSelector.forEach(button => {
    button.addEventListener("click", function(){
        console.log("Grid Created");
        createGrid(parseInt(button.id, 10));
    });
});
