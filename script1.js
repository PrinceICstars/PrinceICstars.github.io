//gameCanvas
var blocksize = 25;
var rows = 35;
var cols = 40; 
var gameCanvas;
var context;


//snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//snake food
var foodX
var foodY 


var gameOver = false;

function resetGame() {
    snakeX = blocksize * 5;
    snakeY = blocksize * 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    gameOver = false;
    placefood();
}



window.onload = function() {
    gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.height = rows * blocksize;
    gameCanvas.width = cols * blocksize;
    context = gameCanvas.getContext("2d");

    placefood();
    document.addEventListener("keyup", changeDirection);
    document.addEventListener("keydown", function(e) {
        if (gameOver && e.code === "Space") {
            resetGame();
        }
    });
    update();
    setInterval(update, 1000/10);
}


function update() {
    if (gameOver) {
        context.fillStyle = "rgba(0,0,0,0.7)";
        context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        context.fillStyle = "white";
        context.font = "40px Arial";
        context.textAlign = "center";
        context.fillText("Game Over", gameCanvas.width/2, gameCanvas.height/2 - 20);
        context.font = "20px Arial";
        context.fillText("Press Space to Restart", gameCanvas.width/2, gameCanvas.height/2 + 20);
        return;
    }
    
    context.fillStyle= "black";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);


    context.fillStyle= "brown";
    context.fillRect(foodX, foodY, blocksize, blocksize);
     
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placefood();
    }

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX,foodY])
        placefood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    

     context.fillStyle= "lime";
     snakeX += velocityX * blocksize;
     snakeY += velocityY * blocksize;
     context.fillRect(snakeX, snakeY, blocksize, blocksize);
     for (let i =0; i< snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
     }
     
     // game over conditions
     if (snakeX < 0 || snakeX >= cols*blocksize || snakeY < 0 || snakeY >= rows*blocksize) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
        }
    }
}
//place food in random position
function placefood() {
    foodX = Math.floor(Math.random() * cols) * blocksize
    foodY = Math.floor(Math.random() * rows) * blocksize
}


function changeDirection(e) {
    if(e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    
     else if(e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }

     else if(e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }

     else if(e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

    




        
}

