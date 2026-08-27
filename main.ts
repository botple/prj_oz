let running = false
let turnRight = false

DFRobotMaqueenPlus.I2CInit()

input.onButtonPressed(Button.A, function () {
    running = !running
})

input.onButtonPressed(Button.B, function () {
    turnRight = !turnRight
})

basic.forever(function () {
    if (!running) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else {
        if (turnRight) {
            // 우회전
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 110)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        } else {
            // 좌회전
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 110)
        }
    }

    basic.pause(50)
})