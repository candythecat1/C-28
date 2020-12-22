class slingshot{
    constructor(body1,point2){
        options = {bodyA: body1,
            pointB: point2,
            stffness: 0.03,
            length: 100};
 this.slingshot = Constraint.create(options);
 World.add(world,this.slingshot);


    }
    display(){
    if (this.slingshot.bodyA!== null ){
        var birdpos = this.slingshot.bodyA.position
        var pointBpos = this.slingshot.pointB
        line(birdpos.x,birdpos.y,pointBpos.x, pointBpos.y)
    }
    }
    fly(){
    this.slingshot.bodyA = null
    }
}