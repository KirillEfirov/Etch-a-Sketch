let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const paintContainer = document.querySelector('.paintContainer');
/*Szie by default*/ 
const grid = {rows: 64, cols: 64};
let total = grid.cols * grid.rows;
let rememberValue = total;


function createGrid(total) {
    for(let i = 0; i < total; i++) {
        const ele = document.createElement('div');
        paintContainer.append(ele);
        //ele.textContent = `${i + 1}`;
        ele.classList.add('box');
    }
    paintContainer.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, auto)`);
}
window.onload = createGrid(total);



let box = document.getElementsByClassName('box');

function paintBlack() {
    for(const each of box) {
        each.addEventListener('mouseover', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return;
                each.setAttribute('style', 'background: black'); 
        });

        each.addEventListener('mouseDown', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return;
                each.setAttribute('style', 'background: black'); 
        });
    }
}
window.onload = paintBlack();


const black = document.querySelector('.black');
black.addEventListener('click', paintBlack);




const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', Eraser);

function Eraser() {
for(const each of box) {
    each.addEventListener('mouseover', (e) => {
        if (e.type === 'mouseover' && !mouseDown) return;
            each.setAttribute('style', 'background: white'); 
    });

    each.addEventListener('mouseDown', (e) => {
        if (e.type === 'mouseover' && !mouseDown) return;
            each.setAttribute('style', 'background: white'); 
    });
}
}



function getValue(e) {
    rememberValue = e.target.value;
    console.log(rememberValue);
    grid.cols = e.target.value;
    return rememberValue;
}


function newGrid() {
        paintContainer.innerHTML = '';
        createGrid(grid.cols**2);
}

const input = document.querySelector('input');
input.addEventListener('change', getValue);
input.addEventListener('change', newGrid);