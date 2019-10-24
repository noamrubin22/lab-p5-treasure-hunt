// initiliaze images
let imgDown;
let treasureImg;

function preload() {
  // preloads images
  imgDown = loadImage("./assets/character-down.png");
  imgUp = loadImage("./assets/character-up.png");
  imgLeft = loadImage("./assets/character-left.png");
  imgRight = loadImage("./assets/character-right.png");
  treasureImg = loadImage("./assets/treasure.png");
}

// initliaze classes 
const game = new Game();
const player = new Player(0, 0)
// set default direction
let direction = "down";

function setup() {
  // setup canvas
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  // main function
  clear();
  game.drawGrid();
  player.draw(direction);
  treasure.drawTreasure();
  treasure.vanishTreasure();
}