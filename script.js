// console.log('d')
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const screenWidth = canvas.offsetWidth;
const screenHeight = canvas.offsetHeight;

ctx.beginPath();
ctx.arc(screenWidth / 2, screenHeight / 2, 30, 0, 360);
ctx.stroke();

var mainBall = { x: screenWidth / 2, y: screenHeight / 2, rad: 30 }
var moveY = 1;
var moveX = 1;
function updateGame() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.beginPath();
    ctx.arc(mainBall.x, mainBall.y, 30, 0, 360);
    ctx.stroke();

    if (mainBall.y + mainBall.rad >= screenHeight || mainBall.y <= 0 + mainBall.rad) {
        moveY *= -1;
    }
    if (mainBall.x + mainBall.rad >= screenWidth || mainBall.x <= 0 + mainBall.rad) {
        moveX *= -1;
    }

    mainBall.x += moveX;
    mainBall.y += moveY;
}

setInterval(() => {
    updateGame();
}, 1);