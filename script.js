window.onload = runEtchASketch;

//main function
function runEtchASketch() {
    let gridSide = 16;

    createGrid(gridSide);
    addFunctionToItems();
}


//funtion to add hover listeners
function addFunctionToItems() {
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.addEventListener("mouseover", changeBackgroundColor)
    });
}

//change background color
function changeBackgroundColor(element, color = "black"){
    element.target.style.backgroundColor = color;
}


//Create grid of given side
function createGrid(gridSide) {
    const container = document.querySelector(".container");


    for (x = 0; x < gridSide; x++) {
        //first create a row
        let row = document.createElement("div");
        row.classList.add("row")

        for (y = 0; y < gridSide; y++) {
            //populate the row with div of item class
            let item = document.createElement("div");
            item.classList.add("item");
            row.appendChild(item);
        }

        container.appendChild(row);
    }

}