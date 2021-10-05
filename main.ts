input.onButtonPressed(Button.A, function () {
    _1erNombre += 1
    basic.showNumber(_1erNombre)
})
input.onButtonPressed(Button.B, function () {
    _2èmeNombre += 1
    basic.showNumber(_2èmeNombre)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(_1erNombre + _2èmeNombre)
})
let _2èmeNombre = 0
let _1erNombre = 0
_1erNombre = 0
_2èmeNombre = 0
