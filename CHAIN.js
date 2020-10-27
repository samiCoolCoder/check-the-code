class chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            
            bodyA: bodyA,
           bodyB: bodyB,
            stiffness: 0.09,
            length: 10

        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
       
        //this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
      line (this.sling.bodyA.position.x,this.sling.badyA.position.y,this.sling.bodyB.position.x+this.offsetX,this.sling.bodyB.position.y+this.offsetY)
      console.log(this.sling) 
      /*if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;   
            push()
            strokeWeight(8);
            stroke(color(48,22,8))
            if(pointA.x>220){
           line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
           line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
           image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            }
            else
            {
                line(pointA.x+25, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)   
            }
           pop()*/
        
    }
    
}