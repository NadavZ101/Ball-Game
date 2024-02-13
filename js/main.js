'use strict'

// var gBallSize = 0

function onBallClick() {

    const elBall = document.querySelector('.ball')
    const currHeight = parseInt(elBall.style.height)
    const currWidth = parseInt(elBall.style.width)
    var newHeight = currHeight + getRandomInt(20, 60)
    var newWidth = currWidth + getRandomInt(20, 60)
    var ballSize = newHeight

    if (ballSize >= 400) {
        ballSize = 100
    }

    elBall.style.backgroundColor = getRandomColor()

    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerText = ballSize

}