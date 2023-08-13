const gridContainer = document.getElementById("grid-container");

function createGrid(gridDimension){
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
}

createGrid(16);

const hoverOverSquare = document.querySelectorAll(".grid-square");

hoverOverSquare.forEach(div => {
    div.addEventListener("mouseover", function(){
        console.log("Hovered div");
        div.style.backgroundColor = "black";
    });
});
