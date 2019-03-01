let x, y, c, r, w;
let maze = [];
let current;
let stack = [];

function setup() {
  createCanvas(300, 300);
  w = 15;
  c = floor(width / w);
  r = floor(height / w);
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
  current.head();
  // STEP 1
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    //STEP 2
    stack.push(current);
    //STEP 3
    removeWalls(current, next);
    //STEP 4
    current = next;
    console.log(current);
  } else if (stack.length > 0) {
    current = stack.pop();
    console.log('cur', current);
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
//frills
//psudo-code
/*
1 Make the initial cell the current cell and mark it as visited           √
2 While there are unvisited cells                                         √
  1 If the current cell has any neighbours which have not been visited    √
    1 Choose randomly one of the unvisited neighbours                     √
    2 Push the current cell to the stack                                  √
    3 Remove the wall between the current cell and the chosen cell        √
    4 Make the chosen cell the current cell and mark it as visited        √
  2 Else if stack is not empty                                            √
    1 Pop a cell from the stack                                           √
    2 Make it the current cell                                            √
*/