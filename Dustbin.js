class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true  
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world,this.body);

         this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");

    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    fill(225);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        
    }
}