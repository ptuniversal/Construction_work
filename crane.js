class Crane{
    constructor(x,y,width, height){
        var option={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Matter.Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
    }
    display(){

        push ();
        translate (this.body.position.x, this.body.position.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("yellow");
        rect(0,0,this.width,this.height);
        pop ();
    }
}