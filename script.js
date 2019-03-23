//-------- define colors-----------
const bgColor = '#3bb4c1'; // grid box color
const color1 = '#3bb4c1'; // h1 color
const color2 = '#b5e0ba'; // button background
const color3 = '#e9e4e6'; // button shadow
const color4 = '#f6f5f5';
const color5 = '#33313b';

const varyColor = () => {
  let color = Math.floor((Math.random()*1e5));
  const hue = Math.floor((Math.random()*6));
  console.log(color)
  if (color.toString().length === 4) {
    color = 'f'+color;
  }
    switch (hue) {
      case 1: return '#f' + color;
      case 2: return '#1' + color;
      case 3: return '#0' + color;
      case 4: return '#c' + color;
      case 5: return '#b' + color;
      default: return '#2' +color;
    }
}

// --------- sound ----------------
const bleep = new Audio();
bleep.src = 'lesser_vibes_HTIS_Buttons_59_013.mp3';

// --------misc -------------------
document.querySelector('h1').style.color = color1;
document.querySelector('body').style.backgroundColor = color5;
const numOfButtons = 3;

//--------- containers -------------
const container = document.getElementById('container');
const rightContainer = document.getElementById('right-container');
// define container as grid
container.style.display = 'grid';
container.style.width = '1060px';
// set column and row sizes
let gridSize = 4 // grid size example 2 equals 2x2 grid

// ---------- hover effect function-------------
const hoverEffect = () => {
  const boxes = document.querySelectorAll('.box');
  const len = boxes.length;
  for (let i = 0; i < len; i++) {
    boxes[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = setColor;
    })
  }
}

hoverEffect();

const createGrid = (gridSize) => {
  const colSize = (1060 / gridSize) + 'px'; //100% divided by x divs
  const rowSize = (960 / gridSize) + 'px';
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${colSize})`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${rowSize})`;
  container.style.gridColumnGap = '2px';
  container.style.gridRowGap = '2px';
  let grid;
  let gridArea = gridSize * gridSize;
  for (let i = 0; i < gridArea; i++) {
    grid = document.createElement('div');
    container.appendChild(grid);
    grid.id = (`div${i}`);
    grid.className += ('box');
    grid.style.borderRadius = '100%';
    grid.style.backgroundColor = bgColor;
    hoverEffect();
  }
}

createGrid(gridSize);

//  -------------- change/ set pen color ------
  let setColor = varyColor();


// ------remove grid---------------------------
const removeGrid = () => {
  console.log(container);
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }

}
// ------ buttons -----------------------------

const createButtons = (num) => {
  let btn;
  let p;
  for (let i = 0; i < num; i++) {
    btn = document.createElement('div');
    p = document.createElement('p');
    rightContainer.appendChild(btn);
    rightContainer.appendChild(p);
    btn.className = 'btn';
    btn.id ='btn'+ i;
    btn.style.width = '160px;'
    btn.style.height = '100px;'
    btn.innerHTML = 'I\'m  a button';
    btn.style.padding = '20px';
    btn.style.background = color2;
    btn.style.borderRadius = '25px';
    btn.style.fontSize = '40px';
    btn.style.margin = "0 0 100px";
    btn.style.cursor = 'pointer';
    btn.style.transition = '0.2s';
    btn.style.boxShadow = `${color3} 1px 1px 10px 10px`;
  }
}

createButtons(numOfButtons);

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn1');
const btns = document.querySelectorAll('.btn')

const setButtonEffects = (num) => {
  for (let i = 0; i < num; i++) {
    btns[i].addEventListener('mousedown', (e) => {
      btns[i].style.background = color1;
      console.log(e.target)
    })
    btns[i].addEventListener('mouseup', (e) => {
      btns[i].style.background = color2;
    })
    btns[i].addEventListener('mouseenter', (e) => {
      btns[i].style.transform = ('scale(1.2)');
      btns[i].style.boxShadow = (`${color4} 2px 2px 100px`);
    })
    btns[i].addEventListener('mouseleave', (e) => {
      btns[i].style.transform = ('scale(1.0)');
      btns[i].style.boxShadow = (`${color3} 1px 1px 10px 10px`)
    })
  }
}

setButtonEffects(numOfButtons);

btn0.innerHTML = 'Click to change grid size';
btn0.addEventListener('click', (e) => {
  let newGridSize = prompt('New grid size: How many units per side?');
  removeGrid();
  createGrid(newGridSize);
  const boxes = document.querySelectorAll('.box');
})

btn1.innerHTML = 'Click to change to random pen color';
btn1.addEventListener('click', (e) => {
  setColor = varyColor();
  console.log(setColor);
  bleep.play();
})





