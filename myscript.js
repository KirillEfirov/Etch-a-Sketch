let click = false;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const paintContainer = document.querySelector('.paintContainer');
const grid = {rows: prompt('number of rows?'), cols: prompt('numb of cols?')};
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


        for(const each of box) {
            each.addEventListener('mouseover', (e) => {
                if (e.type === 'mouseover' && !mouseDown) return;
                    each.setAttribute('style', 'background: black'); 
                /*if(click) {
                each.setAttribute('style', 'background: black');
                }*/
            });

            each.addEventListener('mouseDown', (e) => {
                if (e.type === 'mouseover' && !mouseDown) return;
                    each.setAttribute('style', 'background: black'); 
            })
        }
        
        /*document.querySelector('body').addEventListener('click', () => {
            console.log('body click');
            click = !click;
        })*/



