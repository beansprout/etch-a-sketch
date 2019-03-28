#Etch-a-Sketch Project Instructions

## What is this:

Drawing game interface similar to etch-a-sketch in that the drawing is continuous.  When the mouse hovers over a grid unit the unit changes color.

Created almost entirely with vanilla JS.  Tried not use CSS for anything except grid container.  Almost all styling done with Javascript (as per the project challenge instructions).

## How I created this:
-created a 16x16 grid of circle shaped divs (using CSS grid)
-set up a hover effect where the color changed on mousover
-set up buttons for...
  1. grid size change
  2. reset button to reset the grid
  3. change grid unit shape (toggles to change from circle to square and back again)
  4. choosing a color randomly
  5. choosing a specific color

###Notes:
- Color changes accomplished by using javascript to change the background color
- shape changes - javascript used to change border-radius of class
- random color changes were a challenge because I was used to using hex for color.  I switched to using rgb to make colors truly random, but when I did that, the color selector box didn't work properly anymore.  I got around that by learning how to convert rgb to hex code so the color selector box reflected the random color instead of black.
- learned how to incorporate sound effects (surprisingly so easy!)
- used transition and transform to make buttons grow on hover
- grid resize is slow over 35 x 35 - I speculate it's because I am restyling using javascript?  I imagine using CSS would make it much faster.

Credits:

project idea from: https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

Sound effects for buttons courtesy of https://zapsplat.com
