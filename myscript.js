let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const paintContainer = document.querySelector('.paintContainer');
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
    return false;
}
window.onload = paintBlack();


const black = document.querySelector('.black');
black.addEventListener('click touchend', paintBlack);


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
input.addEventListener('change', paintBlack);

const clear = document.querySelector('.clear');
clear.addEventListener('click', newGrid);
clear.addEventListener('click', paintBlack);

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', generateRainbow);

function generateRainbow() {
    for(const each of box) {
        each.addEventListener('mouseover', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return;
            let random = Math.floor(Math.random() * 12) + 1;
            switch(random) {
                case 1: each.setAttribute(`style`, `background: rgb(255,0,0);`); 
                    break;
                case 2: each.setAttribute(`style`, `background: rgb(255,127,0);`);
                    break;
                case 3: each.setAttribute(`style`, `background: rgb(255,255,0);`); 
                    break;
                case 4: each.setAttribute(`style`, `background: rgb(127,255,0);`);
                    break;
                case 5: each.setAttribute(`style`, `background: rgb(0,255,0);`); 
                    break;
                case 6: each.setAttribute(`style`, `background: rgb(0,255,127);`);
                    break;
                case 7: each.setAttribute(`style`, `background: rgb(0,255,255);`); 
                    break;
                case 8: each.setAttribute(`style`, `background: rgb(0,127,255);`);
                    break;
                case 9: each.setAttribute(`style`, `background: rgb(0,0,255);`); 
                    break;
                case 10: each.setAttribute(`style`, `background: rgb(127,0,255);`);
                    break;
                case 11: each.setAttribute(`style`, `background: rgb(255,0,255);`); 
                    break;
                case 12: each.setAttribute(`style`, `background: rgb(255,0,127);`);
                    break;
                default: each.setAttribute(`style`, `background: rgb(255,0,127);`);
              }
        });

        each.addEventListener('mouseDown', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return;
            let random = Math.floor(Math.random() * 12) + 1;
            switch(random) {
                case 1: each.setAttribute(`style`, `background: rgb(255,0,0);`); 
                    break;
                case 2: each.setAttribute(`style`, `background: rgb(255,127,0);`);
                    break;
                case 3: each.setAttribute(`style`, `background: rgb(255,255,0);`); 
                    break;
                case 4: each.setAttribute(`style`, `background: rgb(127,255,0);`);
                    break;
                case 5: each.setAttribute(`style`, `background: rgb(0,255,0);`); 
                    break;
                case 6: each.setAttribute(`style`, `background: rgb(0,255,127);`);
                    break;
                case 7: each.setAttribute(`style`, `background: rgb(0,255,255);`); 
                    break;
                case 8: each.setAttribute(`style`, `background: rgb(0,127,255);`);
                    break;
                case 9: each.setAttribute(`style`, `background: rgb(0,0,255);`); 
                    break;
                case 10: each.setAttribute(`style`, `background: rgb(127,0,255);`);
                    break;
                case 11: each.setAttribute(`style`, `background: rgb(255,0,255);`); 
                    break;
                case 12: each.setAttribute(`style`, `background: rgb(255,0,127);`);
                    break;
                default: each.setAttribute(`style`, `background: rgb(255,0,127);`);
              }
        });
    }
}