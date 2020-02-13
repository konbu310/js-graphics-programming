export class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(x: number | null, y: number | null) {
    if (x !== null) this.x = x;
    if (y !== null) this.y = y;
  }
}

export class Character {
  ctx: CanvasRenderingContext2D;
  position: Position;
  width: number;
  height: number;
  life: number;
  image: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    life: number,
    image: HTMLImageElement
  ) {
    this.ctx = ctx;
    this.position = new Position(x, y);
    this.width = w;
    this.height = h;
    this.life = life;
    this.image = image;
  }

  draw() {
    let offsetX = this.width / 2;
    let offsetY = this.height / 2;
    this.ctx.drawImage(
      this.image,
      this.position.x - offsetX,
      this.position.y - offsetY,
      this.width,
      this.height
    );
  }
}

export class Viper extends Character {
  ctx: CanvasRenderingContext2D;
  image: HTMLImageElement;
  isComing: boolean;
  comingStart: number;
  comingStartPosition: Position;
  comingEndPosition: Position;
  speed: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    image: HTMLImageElement
  ) {
    super(ctx, x, y, w, h, 0, image);
    this.speed = 3;
    this.isComing = false;
    this.comingStart = null;
    this.comingStartPosition = null;
    this.comingEndPosition = null;
  }

  setComing(startX: number, startY: number, endX: number, endY: number) {
    this.isComing = true;
    this.comingStart = Date.now();
    this.position.set(startX, startY);
    this.comingStartPosition = new Position(startX, startY);
    this.comingEndPosition = new Position(endX, endY);
  }

  update() {
    let justTime = Date.now();
    if (this.isComing === true) {
      let comingTime = (justTime - this.comingStart) / 1000;
      let y = this.comingStartPosition.y - comingTime * 50;
      if (y <= this.comingEndPosition.y) {
        this.isComing = false;
        y = this.comingEndPosition.y;
      }
      this.position.set(this.position.x, y);
      if (justTime % 100 < 50) {
        this.ctx.globalAlpha = 0.5;
      }
    } else {
      if (window.isKeyDown.key_ArrowLeft === true) {
        this.position.x -= this.speed;
      }
      if (window.isKeyDown.key_ArrowRight === true) {
        this.position.x += this.speed;
      }
      if (window.isKeyDown.key_ArrowUp === true) {
        this.position.y -= this.speed;
      }
      if (window.isKeyDown.key_ArrowDown === true) {
        this.position.y += this.speed;
      }
      let canvasWidth = this.ctx.canvas.width;
      let canvasHeight = this.ctx.canvas.height;
      let tx = Math.min(
        Math.max(this.position.x, this.width / 2),
        canvasWidth - this.width / 2
      );
      let ty = Math.min(
        Math.max(this.position.y, this.height / 2),
        canvasHeight - this.width / 2
      );
      this.position.set(tx, ty);
    }
    this.draw();
    this.ctx.globalAlpha = 1.0;
  }
}
