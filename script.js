//-------- define colors-----------
const bgColor = '#cdffeb'; // grid box color
const color1 = '#ffaaaa'; // h1 color
const color2 = '#c7004c'; // button background
const color3 = '#8f1537'; // button shadow
const color4 = '#f6f5f5';
const color5 = '#33313b';
const color6 = '#cdffeb'; //button font

const varyColor = () => {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  // convert to hex so that color selector shows random color (rgb just shows black in color selector)
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// --------- sound ----------------
const bleep = new Audio();
bleep.src = 'lesser_vibes_HTIS_Buttons_59_013.mp3';
const blip = new Audio();
blip.src ='blip_generic_tone_001_17637.mp3';
const blip2 = new Audio();
blip2.src = 'blip_generic_tone_004_17640.mp3';
const reset = new Audio();
reset.src = 'cartoon_blink_x2_marimba_18052.mp3';
const brrp = new Audio();
brrp.src = 'cartoon_fast_shake_marimba_002_18059.mp3';


// --------misc -------------------
document.querySelector('h1').style.color = color1;
document.querySelector('body').style.backgroundColor = color5;
const numOfButtons = 4;


//--------- containers -------------
const container = document.getElementById('container');
const rightContainer = document.getElementById('right-container');
const instructions = document.createElement('p');
rightContainer.appendChild(instructions);
instructions.innerHTML = 'Instructions: Move the mouse around on the grid';
instructions.style.fontSize = '18px'
instructions.style.color = color1;
instructions.marginTop = '-30px';

// define container as grid
container.style.display = 'grid';
container.style.width = '800px';
// set column and row sizes
let gridSize = 16 // grid size example 2 equals 2x2 grid

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
  const colSize = (800 / gridSize) + 'px'; //100% divided by x divs
  const rowSize = (760 / gridSize) + 'px';
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${colSize})`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${rowSize})`;
  container.style.gridColumnGap = '2px';
  container.style.gridRowGap = '2px';
  let grid;
  let gridArea = gridSize * gridSize;
  for (let i = 0; i < gridArea; i++) {
    grid = document.createElement('div');
    container.appendChild(grid);
    grid.className += ('box');
    grid.style.borderRadius = '100%';
    grid.style.backgroundColor = bgColor;
    hoverEffect();
  }
}

createGrid(gridSize);

//  -------------- change/ set pen color ------
  let setColor = color1;


// ------remove grid---------------------------
const removeGrid = () => {
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
}

// ------ buttons -----------------------------

const createButtons = (num) => {
  let btn;
  for (let i = 0; i < num; i++) {
    btn = document.createElement('div');
    // p = document.createElement('p');
    rightContainer.appendChild(btn);
    // rightContainer.appendChild(p);
    btn.className = 'btn';
    btn.id ='btn'+ i;
    btn.style.width = '160px;'
    btn.style.height = '70px;'
    btn.innerHTML = 'I\'m  a button';
    btn.style.padding = '20px';
    btn.style.background = color2;
    btn.style.borderRadius = '25px';
    btn.style.fontSize = '20px';
    btn.style.color = color6;
    btn.style.margin = "0 0 20px";
    btn.style.cursor = 'pointer';
    btn.style.transition = '0.1s';
  }
}

createButtons(numOfButtons);

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btns = document.querySelectorAll('.btn')

const text1 = document.createElement('p');
const text2 = document.createElement('p');
text1.innerHTML = 'To choose pen color<br>click the box below';
text1.style.color = color2;
text1.style.fontSize = '20px';
rightContainer.appendChild(text1);

// color selector -----------------------------
const colorSelector = document.createElement('input');
colorSelector.type = 'color';
colorSelector.id = 'colorSelect';
colorSelector.value = setColor;
colorSelector.style.cursor = 'pointer';
rightContainer.appendChild(colorSelector);
colorSelector.style.transform = 'scale(2.0)'
colorSelector.addEventListener('mouseenter', (e) => {
  colorSelector.style.transform = ('scale(2.2)');
  colorSelector.style.boxShadow = (`${color4} 1px 1px 50px`)
});
colorSelector.addEventListener('mouseout', (e) => {
  colorSelector.style.transform = ('scale(2.0)');
  colorSelector.style.boxShadow = (``)
});

const setButtonEffects = (num) => {
  for (let i = 0; i < num; i++) {
    btns[i].addEventListener('mousedown', (e) => {
      btns[i].style.background = color1;
    })
    btns[i].addEventListener('mouseup', (e) => {
      btns[i].style.background = color2;
    })
    btns[i].addEventListener('mouseenter', (e) => {
      btns[i].style.transform = ('scale(1.2)');
      btns[i].style.boxShadow = (`${color4} 2px 2px 50px`);
    })
    btns[i].addEventListener('mouseleave', (e) => {
      btns[i].style.transform = ('scale(1.0)');
      btns[i].style.boxShadow = (``)
    })
  }
}

setButtonEffects(numOfButtons);

const gridSizePrompt = () => {
  let newGridSize = prompt('New grid size: How many units per side?');
  console.log(newGridSize);
  const doIt = () => {
    removeGrid();
    createGrid(newGridSize);
    const boxes = document.querySelectorAll('.box');
  }
  if (newGridSize <= 0 || newGridSize.match(/[^0-9]/g) !== null) {
    alert('Nice try butterfly but that is an invalid input.  Try again.')
    gridSizePrompt()
  }
  if (newGridSize > 0 && newGridSize < 25) {
    doIt();
  }
  if (newGridSize >= 25) {
    alert('Please wait... This may take a while....');
    doIt();
  }
  if (newGridSize >= 40) {
    alert('Sorry - that grid is too big for my little processor to handle.  Please try again')
    gridSizePrompt();
  }
};

btn0.innerHTML = 'Click to change grid size';
btn0.addEventListener('click', (e) => {
  blip.play();
  gridSizePrompt();
});

btn1.innerHTML = 'Click to reset';
btn1.addEventListener('click', (e) => {
  reset.play();
  removeGrid();
  createGrid(16);
});

btn2.innerHTML = 'Click to toggle shape of grid units';
btn2.addEventListener('click', (e) => {
  blip2.play();
  const boxes = document.querySelectorAll('.box');
  let newBorderRadius;
  console.log(boxes[0].style.borderRadius);
  if (boxes[0].style.borderRadius === '100%') {
    newBorderRadius = '';
  } else {
    newBorderRadius = '100%';
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.borderRadius = newBorderRadius;
  }
})

btn3.innerHTML = 'Click to change to random pen color';
btn3.addEventListener('click', (e) => {
  setColor = varyColor();
  colorSelector.value = setColor;
  bleep.play();
});

colorSelector.addEventListener('click', (e) => brrp.play());
colorSelector.addEventListener('change', (e) => {
  setColor = colorSelector.value;
});






