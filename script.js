let sketchArea = document.getElementById("container")
let size = 16
let area = size*size

for (let i = 0; i < area; i++) {
    const square = document.createElement('div');
    let sideSize = 960 / size;
    square.style.width = `${sideSize}px`;
    square.style.height = `${sideSize}px`;
    square.classList.add('flex-square');

    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
    })

    sketchArea.appendChild(square);
}

function createNewSketchArea(number) {
    sketchArea.innerHTML = '';
    let area = number*number

    for (let i = 0; i < area; i++) {
        const square = document.createElement('div');
        let sideSize = 960 / number;
        square.style.width = `${sideSize}px`;
        square.style.height = `${sideSize}px`;
        square.classList.add('flex-square');
    
        square.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    
        sketchArea.appendChild(square);
    }
}
 
let btn = document.getElementById("adjust-size");

btn.addEventListener("click", () => {
    let userChoice = prompt('Enter amount of squares by one side between 16 and 100');

    let gridSize = parseInt(userChoice);

    if (gridSize > 16 && gridSize <= 100) {
        createNewSketchArea(gridSize)
    } else {
        alert("Please, enter number between 16 and 100");
    }
})

let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    let allSquares = document.querySelectorAll(".flex-square");

    allSquares.forEach(square =>{
        square.style.backgroundColor = "white";
    } )
})
