DFRobotMaqueenPlus.I2CInit()

basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 100)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 100)
})