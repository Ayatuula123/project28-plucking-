class  Stone{
    constructor(x,y,diametre){
        var options={
            isStatic:false,
            restitutions:0,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,diametre,diametre,options);
        this.diametre=diametre;
        this.image=loadImage("image/stone.png");
        world.add(world,this.body);
    }
    fly(){
       this.Stone.bodyA=null;

    }
    display(){
        Push();
           Translate(this.body.position.x,this.body.position.y);
           image(CENTEER);
           image(this.image,0,0,this.diametre);
           Pop();
    }
}   