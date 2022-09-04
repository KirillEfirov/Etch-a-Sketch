let click = false;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const paintContainer = document.querySelector('.paintContainer');
const grid = {rows: 8, cols: 8};
const total = grid.cols * grid.rows;

createGrid(total);


function createGrid(total) {
    for(let i = 0; i < total; i++) {
        const ele = document.createElement('div');
        paintContainer.append(ele);
        //ele.textContent = `${i + 1}`;
        ele.classList.add('box');
    }
    paintContainer.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, auto)`);
}




let box = document.getElementsByClassName('box');
console.log(box);

    function paint() {
        for(const each of box) {
            each.addEventListener('mouseover', (e) => {
                if (e.type === 'mouseover' && !mouseDown) return;
                    each.setAttribute('style', 'background: black'); 
            });

            each.addEventListener('mouseDown', (e) => {
                if (e.type === 'mouseover' && !mouseDown) return;
                    each.setAttribute('style', 'background: black'); 
            })
        }
    }

window.onload = createGrid();