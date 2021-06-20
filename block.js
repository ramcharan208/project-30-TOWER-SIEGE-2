class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png");
      }
      
display() {
  var pos = this.body.position;
  var angle = this.body.angle;
  if (this.body.speed<7) {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height)
      pop ();
  } else {
      push ();
          World.remove(world,this.body);
          this.visiblity = this.visiblity-5
          tint(255,this.visiblity)
      pop();
      
  }

}
}
