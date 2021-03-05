window.onload = runEtchASketch(16);

//global variables
let pencilType = "pen"; //pen, RGB, brush
let pencilColor = "rgba(0, 0, 0, 0.99 )";

//main function
function runEtchASketch(sideValue) {
    let gridSide = sideValue;

    //change color an type of draw


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
function changeBackgroundColor(element) {

    let color = createPencil(element.target.style.backgroundColor);

    element.target.style.backgroundColor = color;
}

//createa a color style
function createPencil(previousColor) {


    let color;

    switch (pencilType) {
        case "RGB":
            color = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 100 )`;
            break;

        case "brush":
            if (previousColor == "") { previousColor = "rgba(0, 0, 0, 0.00)" }
            let previousOpacity = parseFloat(previousColor.slice(14, -1));

            let colorBefore = previousColor.slice(0, -5);
            let newColor = `${colorBefore} ${previousOpacity + 0.10})`;

            color = newColor;
            break;

        case "pen":
            color = pencilColor;

        default:
            break;
    }
    return color;

    function randomColor() {
        let num = Math.floor(Math.random() * 255);
        return num;
    }
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

//configure pen
let btnPen = document.querySelector("#pen");
let btnRGB = document.querySelector("#rgb");
let btnBrush = document.querySelector("#brush");
btnPen.addEventListener("click", () => { pencilType = "pen" });
btnRGB.addEventListener("click", () => { pencilType = "RGB" });
btnBrush.addEventListener("click", () => { pencilType = "brush" });