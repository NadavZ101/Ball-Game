'use strict'

var gBallSize = 50

function onBallClick() {
    const elBall = document.querySelector('.ball')

    gBallSize += 50

    const currHeight = elBall.style.height
    console.log('currHeight ', currHeight)

    const currWidth = elBall.style.width
    console.log('currWidth ', currWidth)

    // console.log('gBallSize ', gBallSize)
    elBall.style.height = (currHeight + (gBallSize + 'px'))
    elBall.style.width = (currWidth + (gBallSize + 'px'))
    elBall.innerText = gBallSize

    console.log('elBall ', elBall)



}