radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Te" + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Ti" + input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
	
})
