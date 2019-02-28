let x, y;
let maze = [];

function setup() {
  createCanvas(600, 600);
  for (x = 0; x < width / 10; ++x)
    for (y = 0; y < height / 10; ++y) {
      let cell = new Cell(x, y);
      maze.push(cell);
    }
}

function draw() {
  background(1);
  for (let i = 0; i < maze.length; ++i) maze[i].show();

}

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