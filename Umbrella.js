class Umbrella{
    constructor(x,y){
        var option={
            isStatic:true,
          }
        this.body=Bodies.circle(x,y,150,option)
        this.r=150;
        World.add(world,this.body);
        this.img=loadImage("WalkingFrame/walking_1.png");
    }

    
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,250,400)
        pop();
    }

}