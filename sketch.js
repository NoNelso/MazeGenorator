let x, y, c, r, w;
let maze = [];

function setup() {
  createCanvas(300, 300);
  w = 15;
  c = floor(width / w);
  r = floor(height / w);
  frameRate(5);
  for (y = 0; y < r; ++y)
    for (x = 0; x < c; ++x) {
      let cell = new Cell(x, y);
      maze.push(cell);
    }
}

function draw() {
  background(1);
  stroke(255);
  for (let i = 0; i < maze.length; ++i) {
    maze[i].show();
  }
}
// part 2
//psudo-code
/*
Make the initial cell the current cell and mark it as visited
While there are unvisited cells
  If the current cell has any neighbours which have not been visited
    Choose randomly one of the unvisited neighbours
    Push the current cell to the stack
    Remove the wall between the current cell and the chosen cell
    Make the chosen cell the current cell and mark it as visited
  Else if stack is not empty
    Pop a cell from the stack
    Make it the current cell
*/