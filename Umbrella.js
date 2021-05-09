class Umbrella {

    constructor() {
        var options = {
            isStatic: true,
            restitution: 0.5
        };
        var radius = 25;
        this.body = Matter.Bodies.circle(100, 350, radius, options);
        this.width = radius;
        this.image=loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png", "Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.height = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        image(this.image, 150, pos.y - 20, 175, 175);
    }
}
