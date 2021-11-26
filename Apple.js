class Apple extends BaseClass{
    constructor(x,y,width, height){
        super(x, y, width, height)
        this.image = loadImage("sprites/apple.png");
    }
    display(){
        super.display()
        push()
        this.image.resize(50,50)
        
        pop()
    }
}