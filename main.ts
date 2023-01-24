radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Te" + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Ti" + input.temperature())
})
radio.onReceivedString(function (receivedString) {
    radio.sendNumber(input.temperature())
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Te")
})
radio.setGroup(1)
basic.forever(function () {
	
})
