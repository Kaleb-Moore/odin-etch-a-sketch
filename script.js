let makeGrid = (size) => {
    const grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let newSize = size * size;
    for(let i = 0; i < newSize; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "blue";
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