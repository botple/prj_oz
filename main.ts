DFRobotMaqueenPlus.I2CInit()

basic.forever(function () {
    let distance = DFRobotMaqueenPlus.ultraSonic(PIN.P0, PIN.P0)

    basic.showNumber(distance)

    basic.pause(500)
})