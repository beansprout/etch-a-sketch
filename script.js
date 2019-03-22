const container = document.getElementById('container');
const rightContainer = document.getElementById('right-container');
// define container as grid
container.style.display = 'grid';
container.style.width = '1060px';
// set column and row sizes
const x = 16 // grid size example 2 equals 2x2 grid
const colSize = 100 / x; //100% divided by x divs
const rowSize = 100 / x; //100% divided x divs
container.style.gridTemplateColumns = "repeat("+x+", "+colSize+"%)";
// container.style.gridTemplateRows = "repeat("+x+", "+rowSize+"%)";
// container.style.gridTemplateColumns = "repeat("+x+", 60px)";
container.style.gridTemplateRows = "repeat("+x+", 60px)";
container.style.gridColumnGap = '10px';
container.style.gridRowGap = '10px';

const createGrid = (gridSize) => {
  let grid;
  for (let i = 0; i < gridSize; i++) {
    grid = document.createElement('div');
    container.appendChild(grid);
    if (i >= 0 && i <= 15) {
      grid.className += 'row1 ';
    }
    if (i >=16 && i <= 32) {
      grid.className += 'row2 ';
    }
    grid.id = (`div${i}`);
    grid.className += ('box');
  }
}

createGrid(256);

const varyColor = () => {
  const color = Math.floor((Math.random()*1e6));
  return '#'+color;
}

const boxes = document.querySelectorAll('.box');
const len = boxes.length;

const setBGColor = (color) => {

  for (let i = 0; i < len; i++) {
    boxes[i].style.backgroundColor = color;
  }
}

setBGColor('#905858');

let setColor = varyColor();

const hoverEffect = () => {
  for (let i = 0; i < len; i++) {
    boxes[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = setColor;
    })
  }
}

hoverEffect();

const createButtons = (num) => {
  let btn;
  let p;
  for (let i = 0; i < num; i++) {
    btn = document.createElement('div');
    p = document.createElement('p');
    rightContainer.appendChild(btn);
    rightContainer.appendChild(p);
    console.log(btn);
    btn.className = 'btn';
    btn.id ='btn'+ i;
    btn.style.width = '160px;'
    btn.style.height = '100px;'
    btn.innerHTML = 'I\'m  a button';
    btn.style.padding = '20px';
    btn.style.background = '#b5e0ba';
    btn.style.borderRadius = '25px';
    btn.style.fontSize = '28px';
    btn.style.margin = "0 0 200px";

  }
}

createButtons(3);

// btn1.id = 'btn1';
// btn1.class = 'btn';
// btn1.style.backgroundColor = '#b5e0ba';
// btn1.style.color = '#905858'
// btn1.style.width = '200px';
// btn1.style.height = '150px';
// btn1.style.fontSize = '28px';
// btn1.innerHTML = 'Click me to change pen color';

// const btns = querySelectorAll('btn');














