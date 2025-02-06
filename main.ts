let fahrenheit = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(5000)
    while (input.temperature() < 8 && input.temperature() > 0) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.pause(3000)
        basic.clearScreen()
    }
    while (input.temperature() < 0) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(3000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    fahrenheit = input.temperature() * 9
    fahrenheit = fahrenheit / 5
    fahrenheit = fahrenheit + 32
    basic.showNumber(fahrenheit)
    basic.pause(5000)
    basic.clearScreen()
})
