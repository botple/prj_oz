DFRobotMaqueenPlus.I2CInit()

basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 100)
})