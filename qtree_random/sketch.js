function setup() { //funcion configuracion del sketch
  createCanvas(400, 400);//tamaño del lienzo

  let boundary = new Rectangle(200, 200, 200, 200); //
  let qt = new QuadTree(boundary, 4);
  console.log(qt);

  for (let i = 0; i < 500; i++) {
    let p = new Point(random(width), random(height));
    qt.insert(p);
  }
  background(0);
  qt.show();

}