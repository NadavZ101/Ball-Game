'use strict'

// var gBallSize = 0

function onBallClick(maxSize) {

    /* ball1 */
    const elBall1 = document.querySelector('.ball')
    const currHeight = parseInt(elBall1.style.height)
    const currWidth = parseInt(elBall1.style.width)
    var newHeight = currHeight + getRandomInt(20, 60)
    var newWidth = currWidth + getRandomInt(20, 60)
    var ballSize1 = newHeight

    if (ballSize1 >= maxSize) {
        ballSize1 = 100
    }
    elBall1.style.backgroundColor = getRandomColor()

    elBall1.style.height = ballSize1 + 'px'
    elBall1.style.width = ballSize1 + 'px'
    elBall1.innerText = ballSize1


    /* ball2 */
    const elBall2 = document.querySelector('.ball2')
    const currHeight2 = parseInt(elBall2.style.height)
    const currWidth2 = parseInt(elBall2.style.width)
    var newHeight2 = currHeight2 + getRandomInt(20, 60)
    var newWidth2 = currWidth2 + getRandomInt(20, 60)
    var ballSize2 = newHeight2

    if (ballSize2 >= maxSize) {
        ballSize2 = 100
    }
    elBall2.style.height = ballSize2 + 'px'
    elBall2.style.width = ballSize2 + 'px'
    elBall2.innerText = ballSize2

}