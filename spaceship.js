class SpaceShip {
  constructor(x,y) {
    this.body = Bodies.rectangle(x,y,100,100);
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.image = loadImage("images/R.png");
    this.bullets = new Bullets();
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 10) {
      this.x = this.x - 5;
    }
  }

  moveRight() {
    if (this.x < 1190) {
      this.x = this.x + 5;
    }
  }
  
  shoot() {
    this.bullets.shoot(this.x, this.y);
  }
}