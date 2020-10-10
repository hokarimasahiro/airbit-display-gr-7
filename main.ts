input.onGesture(Gesture.ScreenDown, function () {
    Throttle = 0
    Arm = 0
})
input.onButtonPressed(Button.AB, function () {
    Arm = 1 - Arm
    Throttle = 0
    Yaw = 0
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    commandList = receivedString.split(",")
    for (let commandItem of commandList) {
        command = commandItem.split("=")[0]
        parameter = parseFloat(commandItem.split("=")[1])
        if (command == "A") {
            dx = 6
            dy = 0
        }
        if (command == "P") {
            dx = 6
            dy = 1
        }
        if (command == "R") {
            dx = 6
            dy = 2
        }
        if (command == "Y") {
            dx = 6
            dy = 3
        }
        if (command == "T") {
            dx = 6
            dy = 4
        }
        if (command == "DB") {
            dx = 20
            dy = 0
        }
        if (command == "DA") {
            dx = 20
            dy = 1
        }
        if (command == "DG") {
            dx = 20
            dy = 2
        }
        if (command == "DP") {
            dx = 20
            dy = 3
        }
        if (command == "DR") {
            dx = 20
            dy = 4
        }
        if (command == "DY") {
            dx = 20
            dy = 5
        }
        if (command == "DT") {
            dx = 20
            dy = 6
        }
        if (command == "TGT") {
            dx = 6
            dy = 7
        }
        if (command == "ALT") {
            dx = 20
            dy = 7
        }
        OLED12864_I2C.showString(
        dx,
        dy,
        ("     " + convertToText(parameter)).substr(convertToText(parameter).length, 8),
        1
        )
    }
})
input.onButtonPressed(Button.B, function () {
    Throttle += 5
})
radio.onReceivedValue(function (name, value) {
	
})
let dy = 0
let dx = 0
let parameter = 0
let command = ""
let commandList: string[] = []
let Yaw = 0
let Arm = 0
let Throttle = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.setTxBufferSize(128)
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
OLED12864_I2C.showString(
0,
0,
"AIR =",
1
)
OLED12864_I2C.showString(
0,
1,
"PICH=",
1
)
OLED12864_I2C.showString(
0,
2,
"ROLL=",
1
)
OLED12864_I2C.showString(
0,
3,
"YAW=",
1
)
OLED12864_I2C.showString(
0,
4,
"THLO=",
1
)
OLED12864_I2C.showString(
14,
0,
"BAT =",
1
)
OLED12864_I2C.showString(
14,
1,
"ANA =",
1
)
OLED12864_I2C.showString(
14,
2,
"G   =",
1
)
OLED12864_I2C.showString(
14,
3,
"PICH=",
1
)
OLED12864_I2C.showString(
14,
4,
"ROLL=",
1
)
OLED12864_I2C.showString(
14,
5,
"YAW =",
1
)
OLED12864_I2C.showString(
14,
6,
"THLO=",
1
)
OLED12864_I2C.showString(
0,
7,
"TGT =",
1
)
OLED12864_I2C.showString(
14,
7,
"ALT =",
1
)
let radioGroup = 7
radio.setGroup(radioGroup)
basic.showNumber(radioGroup)
