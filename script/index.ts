import { rand, loadImage } from "./util";
import { Drawer } from "./Drawer";
import { Viper, Position } from "./character";

declare global {
  interface Window {
    isKeyDown: {
      key_ArrowLeft?: boolean;
      key_ArrowRight?: boolean;
      key_ArrowUp?: boolean;
      key_ArrowDown?: boolean;
    };
  }
}

window.isKeyDown = {};

const images = require("../image/*.*");
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

let draw: Drawer = null;
let canvas: HTMLCanvasElement = null;
let ctx: CanvasRenderingContext2D = null;
let image: HTMLImageElement = null;
let startTime: number = null;
let viper: Viper = null;

window.addEventListener(
  "load",
  async () => {
    draw = new Drawer(document.body.querySelector("#main_canvas"));
    canvas = draw.canvas;
    ctx = draw.context;
    image = await loadImage(images.viper.png);
    initialize();
    eventSetting();
    startTime = Date.now();
    render();
  },
  false
);

const initialize = () => {
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  viper = new Viper(ctx, 0, 0, 64, 64, image);
  viper.setComing(
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT + 50,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT - 100
  );
};

const eventSetting = () => {
  window.addEventListener(
    "keydown",
    ev => {
      window.isKeyDown[`key_${ev.key}`] = true;
    },
    false
  );
  window.addEventListener(
    "keyup",
    ev => {
      window.isKeyDown[`key_${ev.key}`] = false;
    },
    false
  );
};

const render = () => {
  ctx.globalAlpha = 1.0;
  draw.rect(0, 0, canvas.width, canvas.height, "#eeeeee");
  let nowTime = (Date.now() - startTime) / 1000;
  viper.update();
  requestAnimationFrame(render);
};
