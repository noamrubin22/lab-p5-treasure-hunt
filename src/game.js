class Game {
  drawGrid() {
    // draw x-axes
    for (let x = 0; x < WIDTH + 1; x += SQUARE_SIDE) {
      line(0, x, WIDTH, x);
    }
    // draw y-axes
    for (let y = 0; y < HEIGHT + 1; y += SQUARE_SIDE) {
      line(y, 0, y, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }
  moveUp() {
    this.col -= 100;
  }
  moveDown() {
    this.col += 100;
  }
  moveLeft() {
    this.row -= 100;
  }
  moveRight() {
    this.row += 100;
  }
  draw(direction) {
    // draws player in the right direction
    if (direction === "down") {
      image(imgDown, this.row, this.col, 100, 100);
    } else if (direction === "left") {
      image(imgLeft, this.row, this.col, 100, 100);
    } else if (direction === "right") {
      image(imgRight, this.row, this.col, 100, 100);
    } else if (direction === "up") {
      image(imgUp, this.row, this.col, 100, 100);
    }
  }
}

function keyPressed(position) {
  // moves the player recording to the key pressed, inside the grid
  if ((keyCode === 37) && player.row > 0) {
    player.moveLeft();
    direction = "left";
  } else if ((keyCode === 39) && player.row < WIDTH - 100) {
    player.moveRight();
    direction = "right";
  } else if ((keyCode === 40) && player.col < HEIGHT - 100) {
    player.moveDown();
    direction = "down";
  } else if ((keyCode === 38) && player.col > 0) {
    player.moveUp();
    direction = "up";
  }
}

class Treasure {
  constructor(col, row) {
    this.setRandomPosition();
  }
  setRandomPosition() {
    // finds random positions for row and column
    this.col = ((Math.floor(Math.random() * 10)) * 100);
    this.row = ((Math.floor(Math.random() * 10)) * 100);
  }

  drawTreasure() {
    // draws treasure
    image(treasureImg, this.row, this.col, 100, 100);
  }

  vanishTreasure() {
    // if player takes the treasure
    if (player.col === treasure.col && player.row === treasure.row) {
      // assign a score to player
      player.score += 10;
      // adjust score in HTML
      document.body.getElementsByTagName("h2")[0].innerText = "SCORE: " + player.score;
      // create new treasure
      treasure.setRandomPosition();
    }
  }
}

function drawTreasure() {
  // puts the treasure in a random position
  image(treasureImg, treasure.setRandomPosition(), treasure.setRandomPosition(), 100, 100);
}

// initializes treasure
const treasure = new Treasure;