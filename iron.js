class iron{
    constructor(x,y,width,height,angle) {
        var options={
            isStatic:true,
            density:5,
            friction:5,
            restitution:0.32
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.angle=angle
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle)
    }
    display(x,y,width,height,angle) {
        var pos=this.body.position;
      
        fill("silver");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height,this.angle);
        console.log(PI/(60/3)+PI)
    }
}