function Cell(x, y) {
  this.loc = [x, y]; //location
  this.wal = [true, true, true, true] //walls U,R,D,L
  this.viz = false;

  this.show = function() {
    let xw = this.loc[0] * w;
    let yw = this.loc[1] * w;

    if (this.wal[0]) line(xw, yw, xw + w, yw);
    if (this.wal[1]) line(xw + w, yw, xw + w, yw + w);
    if (this.wal[2]) line(xw + w, yw + w, xw, yw + w);
    if (this.wal[3]) line(xw, yw + w, xw, yw);

  }
}