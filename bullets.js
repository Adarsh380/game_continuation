class Bullets {

    constructor() {
        this.bullets = createGroup();
      }

      shoot(x,y){
        var bullet = createSprite(x, y, 10,20);
        var image = loadImage("images/bullet.png");
        bullet.addImage(image);
        bullet.scale=0.06;
        bullet.velocityY= -5;

        this.bullets.add(bullet);
      }
}