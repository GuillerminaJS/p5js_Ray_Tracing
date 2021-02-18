class Particula {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rayos = [];
    for (let a = 0; a < 360; a += 1) {
      this.rayos.push(new Rayo(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(pared) {
    for (let rayo of this.rayos) {
      let closest = null;
      let record = Infinity;
      for (let pared of paredes){
        const pt = rayo.cast(pared);
      if (pt) {
        const d = p5.Vector.dist(this.pos, pt);
        if (d < record) {
          record = d;
          closest = pt;
        }
      }
    }
    if (closest) {
      stroke(255, 100);
      line(this.pos.x, this.pos.y, closest.x, closest.y);
    }
  }
}

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let rayo of this.rayos) {
      rayo.show();
    }
  }
}
