function step () {
    strip.show()
    basic.pause(500)
}
function test1 () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    step()
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    step()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    step()
}
// CYCLE: 
// Rouge Bleu
// Orange Rouge
// Jaune Orange
// Blanc Jaune
// --- Blanc
function test2 () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    step2()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    step2()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    step2()
    step2()
    step2()
    step2()
    step2()
    step2()
}
function step2 () {
    strip.show()
    basic.pause(1000)
    strip.shift(1)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 5, NeoPixelMode.RGB)
strip.setBrightness(31)
basic.forever(function () {
    test2()
    basic.showIcon(IconNames.Yes)
    basic.pause(600)
    basic.clearScreen()
})
