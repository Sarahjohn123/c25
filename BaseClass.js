class BaseClass{
  constructor(x,y,width,height,angle){
    var options={
      'density':1,
      'friction':1,
      'restitution':0.8,
    }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.height=height;
    this.width=width;
    this.image=loadImage("sprites/base.png");
    World.add(world,this.body);
  }
  display(){
    var angle=this.body.angle;
    push ();
    translate (this.body.x,this.body.y);
    rotate (angle);
    imageMode (CENTER);
    image (0,0,this.width,this.height);
    pop ();
  }
}