class hammer{
    constructor(x,y,width,height){
        var hammer_options={
            'isStatic':true,
            'friction':1,
            'density':2,
            'restitution':0.5
        
        }
        this.body=Bodies.rectangle(x,y,width,height,hammer_options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
        }
    display(x,y,width,height) {
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY
        fill("yellow");
        strokeWeight("2");
        stroke("white")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}