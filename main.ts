radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("A")
    } else {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.showString("B")
    }
})
radio.setGroup(1)
OLED.init(128, 64)
OLED.writeStringNewLine("hello")
OLED.writeStringNewLine("world")
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("A")
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.showString("B")
    }
})
