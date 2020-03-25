class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0,
          restitution: 1.0,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(4);
      stroke(0,124,142);
      ellipseMode(CENTER);
      fill(70,2,107);
    ellipse(pos.x, pos.y, this.r);
    }
  };