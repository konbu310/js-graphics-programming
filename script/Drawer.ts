export class Drawer {
  cv: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.cv = canvas;
    this.ctx = this.cv.getContext("2d");
  }

  get canvas() {
    return this.cv;
  }

  get context() {
    return this.ctx;
  }

  rect(x: number, y: number, width: number, height: number, color?: string) {
    this.ctx.fillStyle = color && color;
    this.ctx.fillRect(x, y, width, height);
  }

  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    width: number = 1,
    color?: string
  ) {
    this.ctx.fillStyle = color && color;
    this.ctx.lineWidth = width;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  polygon(points: number[], color?: string) {
    if (Array.isArray(points) !== true || points.length < 6) {
      return;
    }
    this.ctx.fillStyle = color && color;
    this.ctx.beginPath();
    this.ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2) {
      this.ctx.lineTo(points[i], points[i + 1]);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  circle(x: number, y: number, radius: number, color?: string) {
    this.ctx.fillStyle = color && color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0.0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  fan(
    x: number,
    y: number,
    radius: number,
    startRadian: number,
    endRadian: number,
    color?: string
  ) {
    this.ctx.fillStyle = color && color;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, radius, startRadian, endRadian);
    this.ctx.closePath();
    this.ctx.fill();
  }

  quadraticBezier(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx: number,
    cy: number,
    width: number = 1,
    color?: string
  ) {
    this.ctx.fillStyle = color && color;
    this.ctx.lineWidth = width;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.quadraticCurveTo(cx, cy, x2, y2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  cubicBezier(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    width: number = 1,
    color?: string
  ) {
    this.ctx.fillStyle = color && color;
    this.ctx.lineWidth = width;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  text(text: string, x: number, y: number, width: number = 1, color?: string) {
    this.ctx.strokeStyle = color && color;
    this.ctx.fillText(text, x, y, width);
  }
}
