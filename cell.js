function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.wal = [true, true, true, true]; //walls U,R,D,L
  this.viz = false;

  this.show = function() {
    let xw = this.x * w;
    let yw = this.y * w;
    // U, R, D, L
    if (this.wal[0]) line(xw, yw, xw + w, yw);
    if (this.wal[1]) line(xw + w, yw, xw + w, yw + w);
    if (this.wal[2]) line(xw + w, yw + w, xw, yw + w);
    if (this.wal[3]) line(xw, yw + w, xw, yw);
  }
}