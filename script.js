const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const screenWidth = canvas.offsetWidth;
const screenHeight = canvas.offsetHeight;

const racket = { w: 200, h: 10 }
var mouseE;
var mousePosition = (screenWidth / 2) - (racket.w / 2);
canvas.addEventListener('mousemove', (e) => {
    mouseE = e;
    if (e.offsetX > racket.w / 2 && e.offsetX < screenWidth - racket.w / 2) {
        mousePosition = e.offsetX - racket.w / 2;
    }
});

var mainBall = { x: screenWidth / 2, y: screenHeight / 2, rad: 10 }
var moveY = 1;
var moveX = 1;
function updateGame() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.beginPath();
    ctx.arc(mainBall.x, mainBall.y, mainBall.rad, 0, 360);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(mousePosition, screenHeight - racket.h - 10, racket.w, racket.h);
    ctx.stroke();

    if (mainBall.y + mainBall.rad >= screenHeight) {
        gameOver();
    }
    if (mainBall.y <= 0 + mainBall.rad) {
        moveY *= -1;
    }
    if (mainBall.x + mainBall.rad >= screenWidth || mainBall.x <= 0 + mainBall.rad) {
        moveX *= -1;
    }

    if ((mainBall.y + mainBall.rad >= screenHeight - racket.h - 10) && (mouseE.offsetX - racket.w / 2 < mainBall.x && mouseE.offsetX + racket.w / 2 > mainBall.x)) {
        moveY *= -1;
    }

    mainBall.x += moveX;
    mainBall.y += moveY;
}

var theUpdateGame = setInterval(() => {
    updateGame();
}, 1);

function gameOver() {
    clearInterval(theUpdateGame);
}