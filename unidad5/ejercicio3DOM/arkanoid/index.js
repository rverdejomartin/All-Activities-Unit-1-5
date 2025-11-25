const GAME_WIDTH = 700;
const GAME_HEIGHT = 700;
let blocksArray = [];
//start coords
let paddleX = GAME_WIDTH/2; //appear in the middle
let paddleY = GAME_HEIGHT-35; //appear near the final in bottom
let ballX = GAME_WIDTH/2;
let ballY = (GAME_HEIGHT/2)-50;
let ballSize = 15;
let half_ballSize = ballSize/2; //radius

//start variable for the bounce of the ball
let speedY = 3;
let speedX = 3;


//intervals aux
let moveBall;

window.onload = () =>{
    const game_view = document.getElementById("game");
    drawBall(game_view);
    drawPaddle(game_view);
    drawBlocks(game_view);
    paddleMove();
    bouncingOfTheBall(game_view);
    btnReset(game_view);
}

function drawBall(game_view){
    let myBall = document.createElement("div");
    myBall.id = "ball";
    myBall.style.width = ballSize+"px";
    myBall.style.height = ballSize+"px";
    myBall.style.backgroundColor = "red";
    myBall.style.left = (ballX - (ballSize/2))+"px";
    myBall.style.top = (ballY - (ballSize/2))+"px";
    game_view.appendChild(myBall);
}

function drawPaddle(game_view){
    let myPaddle = document.createElement("div");
    myPaddle.id = "paddle";
    myPaddle.style.width = 100+"px";
    myPaddle.style.height = 20+"px";
    myPaddle.style.backgroundColor = "green";
    myPaddle.style.left = (paddleX - 50)+"px";
    myPaddle.style.top = (paddleY - 10)+"px";
    game_view.appendChild(myPaddle);
}

function drawBlocks(game_view){
    const BLOCK_WIDTH = 80;;
    const BLOCK_HEIGHT = 20;
    const BLOCK_GAP = 5;
    const TOTAL_BLOCK = BLOCK_WIDTH + BLOCK_GAP;
    const NUM_BLOCKS = Math.floor(GAME_WIDTH/TOTAL_BLOCK)
    blocksArray = [];
    for(let i = 0;i<NUM_BLOCKS;i++){
        let xPos = i*TOTAL_BLOCK;
        let newBlock = document.createElement("div");
        newBlock.className = "blocks";
        newBlock.style.boxSizing = "border-box";
        newBlock.style.position = "absolute";
        newBlock.style.backgroundColor = "blue";
        newBlock.style.width = BLOCK_WIDTH+"px";
        newBlock.style.height = BLOCK_HEIGHT+"px";
        newBlock.style.left = xPos + "px";
        newBlock.style.top = 10+"px";

        blocksArray.push(newBlock);
        game_view.appendChild(newBlock);
    }
    for(let i = 0;i<NUM_BLOCKS;i++){
        let xPos = i*TOTAL_BLOCK;
        let newBlock = document.createElement("div");
        newBlock.className = "blocks";
        newBlock.style.boxSizing = "border-box";
        newBlock.style.position = "absolute";
        newBlock.style.backgroundColor = "blue";
        newBlock.style.width = BLOCK_WIDTH+"px";
        newBlock.style.height = BLOCK_HEIGHT+"px";
        newBlock.style.left = xPos + "px";
        newBlock.style.top = 35+"px";

        blocksArray.push(newBlock);
        game_view.appendChild(newBlock);
    }
}

function bouncingOfTheBall(game_view){
    let ball = document.getElementById("ball");
    let paddle = document.getElementById("paddle");
    let gameRect = game_view.getBoundingClientRect();

    
    moveBall = setInterval(()=>{
        ballX += speedX;
        ballY += speedY;
        
        ball.style.left = (ballX - half_ballSize)+"px";
        ball.style.top = (ballY - half_ballSize)+"px";

        //use getBoundinClientRect()
        let ballRect = ball.getBoundingClientRect();
        let gameRect = game_view.getBoundingClientRect();
        let paddleRect = paddle.getBoundingClientRect();

        //coord x
        if(ballRect.left+1 <= gameRect.left){
            speedX *= -1;
        } else if(ballRect.right >= gameRect.right){
            speedX *= -1;
        }

        //coord y
        if(ballRect.top+1 <= gameRect.top){
            speedY *= -1;
        } else if(
            ballRect.bottom+1 >= paddleRect.top &&
            ballRect.right+1 > paddleRect.left && 
            ballRect.left+1 < paddleRect.right
        )
        {
            speedY *= -1;
        } else if(ballRect.bottom+1 >= gameRect.bottom){
            endGame();
        }

        colissionBlock();
        if(blocksArray.length === 0){
            endGame();
            let title = document.createElement("h1");
            title.style.marginTop = 200+"px";
            title.style.marginLeft = 350+"px";
            game_view.appendChild("title");
        }
    },15)
}

function paddleMove(){
    let paddleSpeed = 30;
    let half_width = 50;
    document.addEventListener("keydown", (e)=>{
        let paddleElement = document.getElementById("paddle");
        if(e.key == "ArrowRight"){
            paddleX += paddleSpeed;

            if(paddleX >= (GAME_WIDTH - half_width)){
                paddleX = GAME_WIDTH - half_width;
            }

            paddleElement.style.left = (paddleX-50)+"px";
        }

        if(e.key == "ArrowLeft"){
            paddleX -= paddleSpeed;

            if(paddleX < 50){
                paddleX = 50;
            }

            paddleElement.style.left = (paddleX-50)+"px";
        }
    });
}

function endGame(){
    clearInterval(moveBall);
}

function reset(game_view){
    endGame() //clear the interval

    ballX = GAME_WIDTH/2;
    ballY = (GAME_HEIGHT)/2 - 50;
    paddleX = GAME_WIDTH/2;

    //delete all of the game
    game_view.innerHTML = '';

    drawBall(game_view);
    drawPaddle(game_view);
    drawBlocks(game_view);
    bouncingOfTheBall(game_view);
}

function btnReset(game_view){
    let btn = document.getElementById("reset");
    btn.addEventListener("click", ()=>{
        reset(game_view);
    })
}

function colissionBlock(){
    let ball = document.getElementById("ball");
    let ballRect = ball.getBoundingClientRect();
    let detectedCol = false;
    //calculating the hit
    for(let i = blocksArray.length - 1; i>= 0 && !detectedCol; i--){
        let block = blocksArray[i];
        let blockRect = block.getBoundingClientRect();

        if(
            ballRect.bottom >= blockRect.top &&
            ballRect.top <= blockRect.bottom && 
            ballRect.left <= blockRect.right && 
            ballRect.right >= blockRect.left
        ){
            speedY *= -1;

            block.remove();
            blocksArray.splice(i,1);
            detectedCol = true;
        }
    }
}