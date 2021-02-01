grovejoystick.onJoystick(GroveJoystickKey.Left, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.West)
})
grovejoystick.onJoystick(GroveJoystickKey.Press, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showIcon(IconNames.Heart)
})
grovejoystick.onJoystick(GroveJoystickKey.Up, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.North)
})
grovejoystick.onJoystick(GroveJoystickKey.Right, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.East)
})
grovejoystick.onJoystick(GroveJoystickKey.LR, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.SouthEast)
})
grovejoystick.onJoystick(GroveJoystickKey.UL, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.NorthWest)
})
grovejoystick.onJoystick(GroveJoystickKey.Down, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.South)
})
grovejoystick.onJoystick(GroveJoystickKey.UR, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.NorthEast)
})
grovejoystick.onJoystick(GroveJoystickKey.LL, GroveJoystickPins.P0, GroveJoystickPins.P1, function () {
    basic.showArrow(ArrowNames.SouthWest)
})
