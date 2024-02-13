'use strict'

// var gBallSize = 0

function onBallClick() {
    const sizeJump = 50

    const elBall = document.querySelector('.ball')
    const currHeight = parseInt(elBall.style.height)
    const currWidth = parseInt(elBall.style.width)
    var newHeight = currHeight + sizeJump
    var newWidth = currWidth + sizeJump
    var ballSize = newHeight

    if (ballSize > 400) {
        newHeight = 100
        newWidth = 100
    }

    elBall.style.height = newHeight + 'px'
    elBall.style.width = newWidth + 'px'
    elBall.innerText = newWidth

}