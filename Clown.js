class Clown{
    constructor(x,y,w,h){
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/clown.png")
        Composite.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        this.image.resize(this.width,this.height)
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}

