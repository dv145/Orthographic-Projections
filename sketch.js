let angle = 0;
let w = 25;
let ma;
let maxD;
let sliderA;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
  ambientLight(230);
  
  //frameRate(30)
  //createLoop({duration:2,gif:true})
  //sliderA = createSlider(0.01, 0.5, 0.1, 0.01);
}

function draw() {
  
  background(0); 
  ortho(-400, 400, 400, -400, 0, 1000);
    rotateX(ma);
  rotateY(-QUARTER_PI);


  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      
      push();
      
      let d = dist(x, z, width / 2, height / 2);
      
      let offset = map(d, 0, maxD, -PI, PI);
      
      let a = angle + offset;
      
      let h = (map(sin(a), -1, 1, 60, 300));
      
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w);
      
      pop();
      
    }
  }

  angle -= 0.1;
}
