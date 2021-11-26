class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.sling = Constraint.create(options);
  
        this.sling1 = loadImage("sprites/archery.png");

        Composite.add(world, this.sling);
    } 
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            console.log(this.sling.bodyA.position)
            push()
            stroke(42,22,8);
           
                strokeWeight(7);
                line(pointA.x,pointA.y-30,pointB.x-10 ,pointB.y-45);
                line(pointA.x,pointA.y-30,pointB.x+15 ,pointB.y+20);
                
                
           
            pop()
        }
        image(this.sling1,40,450)
    }
}