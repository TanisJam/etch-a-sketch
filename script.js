window.onload = runEtchASketch(16);

//main function
function runEtchASketch(sideValue) {
    let gridSide = sideValue;

    
    createGrid(gridSide);
    addFunctionToItems();
}


//reference and event listener for recreate button
let btnRecreate = document.querySelector("#recreate");
btnRecreate.addEventListener("click", recreate);

//reset and recreate with new side value
function recreate() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    
    //aks input from user and set default value if no enter
    let sideValue = prompt("Side value?", "16");
    let newSide = sideValue ? sideValue : 16;


    runEtchASketch(newSide <= 100 ? newSide : 100);
}

//funtion to add hover listeners
function addFunctionToItems() {
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.addEventListener("mouseover", changeBackgroundColor)
    });
}


//change background color
function changeBackgroundColor(element, color = "black") {
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