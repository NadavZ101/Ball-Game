'use strict'

var gBallSize = 50

function onBallClick() {
    gBallSize += 50

    const elBall = document.querySelector('.ball')
    const currHeight = parseInt(elBall.style.height)
    const currWidth = parseInt(elBall.style.width)
    var newHeight = currHeight + gBallSize
    var newWidth = currWidth + gBallSize


    if (gBallSize === 400) {
        gBallSize = 0
        newHeight = 100
        newWidth = 100
    }

    elBall.style.height = newHeight + 'px'
    elBall.style.width = newWidth + 'px'
    elBall.innerText = gBallSize
}