let fahrenheit = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    fahrenheit = input.temperature() * 9
    fahrenheit = fahrenheit / 5
    fahrenheit = fahrenheit + 32
    basic.showNumber(fahrenheit)
    basic.pause(5000)
    basic.clearScreen()
})
