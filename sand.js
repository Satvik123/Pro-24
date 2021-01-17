class sand {
    constructor(x,y,radius){
        var options={
            'restitution':0.5,
            'density':1,
            'friction':5,
            isStatic:true,
            
        }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
 
    World.add(world,this.body)
    }
    display(x,y,radius) {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        strokeWeight(2.5);
        stroke("black");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}