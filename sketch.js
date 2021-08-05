let angle = 0;
let w = 25;
let ma;
let maxD;
let sliderA;

function setup() {
  createCanvas(400, 400, WEBGL);
  ambientLight(230);
  
  //frameRate(30)
  //createLoop({duration:2,gif:true})
  //sliderA = createSlider(0.01, 0.5, 0.1, 0.01);
}

function draw() {
  
  background(0); 
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(atan(cos(QUARTER_PI)));
  rotateY(-QUARTER_PI);


  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      
      push();
      
      let dtheta = map(dist(x, z, width / 2, height / 2), 0, dist(0, 0, 200, 200), -PI, PI);
      
      let theta = angle + dtheta;
      
      let h = (map(sin(theta), -1, 1, 60, 300));
      
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w);
      
      pop();
      
    }
  }

  angle -= 0.1;
}
