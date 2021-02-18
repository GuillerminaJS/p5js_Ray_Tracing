let paredes = [];
let rayo;
let particula;
let xoff = 0;
let yoff = 10000;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);

    paredes[i] = new Perimetro(x1, y1, x2, y2);
  }
  paredes.push(new Perimetro(0, 0, width, 0));
  paredes.push(new Perimetro(width, 0, width, height));
  paredes.push(new Perimetro(width, height, 0, height));
  paredes.push(new Perimetro(0, height, 0, 0));


  particula = new Particula();
}
function draw() {
  // put drawing code here
  background(0);
  for (let pared of paredes) {
    pared.show();
  }
  particula.update(noise(xoff) * width, noise(yoff) * height);
  particula.show();
  particula.look(paredes);

  xoff += 0.01;
  yoff += 0.01;
  // pruebas iniciales del raytracing no son necesarias debido a que el rayo inicial se cambia
  // rayo.show();
  // rayo.lookAt(mouseX, mouseY);

  // let pt = rayo.cast(pared);
  // if (pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
