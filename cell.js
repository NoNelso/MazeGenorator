function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.wal = [true, true, true, true]; //walls U,R,D,L
  this.viz = false;

  this.checkNeighbors = function() {
    let n = [];
    let u = maze[index(this.x, -1 + this.y)]
    let r = maze[index(1 + this.x, this.y)]
    let d = maze[index(this.x, 1 + this.y)]
    let l = maze[index(-1 + this.x, this.y)]
    if (u && !u.visited) n.push(u);
    if (r && !r.visited) n.push(r);
    if (d && !d.visited) n.push(d);
    if (l && !l.visited) n.push(l);
    if (n.length > 0) {
      let i = floor(random(n.length));
      return n[i];
    } else return undefined;
  }

  this.head = function() {
    let x = (this.x + .5) * w;
    let y = (this.y + .5) * w;
    let r = w * 0.75;
    noStroke();
    fill(200);
    ellipse(x, y, r);
  }

  this.show = function() {
    let xw = this.x * w;
    let yw = this.y * w;
    // U, R, D, L
    stroke(255);
    if (this.wal[0]) line(xw, yw, xw + w, yw);
    if (this.wal[1]) line(xw + w, yw, xw + w, yw + w);
    if (this.wal[2]) line(xw + w, yw + w, xw, yw + w);
    if (this.wal[3]) line(xw, yw + w, xw, yw);
    if (this.visited) {
      noStroke();
      fill(100, 200, 45, 145);
      rect(xw, yw, w, w);
    }
  }
}