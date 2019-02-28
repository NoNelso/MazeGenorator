function Cell(x, y) {
  this.loc = [x, y]; //location
  this.wal = [true, true, true, true] //walls L,R,U,D
  this.viz = false;

  this.show = function() {
    let xw = this.loc[0] * w;
    let yw = this.loc[1] * w;
    stroke(255);
    if (this.wal[0]) line(xw, yw, xw + w, yw);
    if (this.wal[1]) line(x + w, y, x + w, y + w);
    if (this.wal[2]) line(x + w, y + w, x, y + w);
    if (this.wal[3]) line(x, y + w, x, y);

  }
}