class ball

{
    constructor(x,y)
    {
        var option={
            'isStatic':0.5,
            'density':1.2,
            'friction':0.4
        }
        this.radius=25
        this.body=Bodies.circle(x,y,25,option);
        World.add(world,this.body);
        
      
    }

    display()
    {
        fill("pink")
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
       
    }
}