basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . # . # .
            # # . # #
            # # # # #
            . # . # .
            . . # . .
            `)
    }
})
