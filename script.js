let color = "black"

let makeGrid = (size) => {
    const grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let newSize = size * size;
    for(let i = 0; i < newSize; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorGrid)
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement('beforeend', square);
    }
}

makeGrid(16)

let changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        makeGrid(input);
    } else {
        console.log("too many squares")
    }
}


function colorGrid() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}