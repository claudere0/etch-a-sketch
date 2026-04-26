let sketchArea = document.getElementById("container")
let size = 16
let area = size*size

for (let i = 0; i < area; i++) {
    const square = document.createElement('div');
    square.classList.add('flex-square');

    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
    })

    sketchArea.appendChild(square);
}


