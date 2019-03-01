let x, y, c, r, w;
let maze = [];
let current;

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
  current = maze[0];
}

function draw() {
  background(1);
  stroke(255);
  for (let i = 0; i < maze.length; ++i) maze[i].show();

  current.visited = true;

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    //STEP 3
    removeWalls(current, next);
    //STEP 4
    current = next;
  }
}

function index(x, y) {
  if (x < 0 || y < 0 || x > -1 + c || y > -1 + r) {
    return -1;
  }
  return x + (y * c);
}

function removeWalls(c, n) {
  let a = c.x - n.x;
  let b = c.y - n.y;
  if (a > 0) {
    c.wal[3] = false;
    n.wal[1] = false;
  } else if (a < 0) {
    c.wal[1] = false;
    n.wal[3] = false;
  } else if (b > 0) {
    c.wal[0] = false;
    n.wal[2] = false;
  } else if (b < 0) {
    c.wal[2] = false;
    n.wal[0] = false;
  }
}
//part3
//psudo-code
/*
Make the initial cell the current cell and mark it as visited           √
While there are unvisited cells                                         ·
  If the current cell has any neighbours which have not been visited    ·
    Choose randomly one of the unvisited neighbours                     √
    Push the current cell to the stack                                  x
    Remove the wall between the current cell and the chosen cell        x
    Make the chosen cell the current cell and mark it as visited        √
  Else if stack is not empty                                            x
    Pop a cell from the stack
    Make it the current cell                                            
*/