controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(1)
})
info.onLifeZero(function () {
    game.over(false, effects.smiles)
})
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff
    fffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff
    fffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff
    fffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff
    ffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff
    fffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
    fffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
    ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff
    fffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffff
    fffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffff
    ffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff
    ffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff
    fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffff
    fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff
    fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    fff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    ffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff
    fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff
    fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff
    fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffff
    fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffff
    ffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff
    ffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff
    fffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffff
    fffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffff
    ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff
    fffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
    fffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
    ffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff
    fffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff
    fffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff
    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff
    fffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
    ffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff
    fffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
info.setScore(0)
info.setLife(1)
game.showLongText("welcome to the mackcode party! prees A Button for play a game", DialogLayout.Full)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . . f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . f f 4 4 4 e d d e b f . . 
    . . . f f f f f f e e f f . . . 
    . . . . f f . . . f f f . . . . 
    `],
200,
true
)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite2,
[img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd111111111f......
    ......fd11111111df......
    ......fd11111111df......
    ......fcdd1111ddcff.....
    .......fbcf11fcbfbbf....
    .......ffbdb1bdffff.....
    ........fcbfbfdf........
    ........ffffffff........
    ......ffffffffff........
    .....fcb1bcffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fdd111111ddf......
    ......fbdd1111dddf......
    ......fcdbfddfbdbf......
    .......fbcf11fcbfff.....
    .......ffb1111bcfbcf....
    ........fcdb1bdfbbbf....
    .......ffffffffffcf.....
    .....fcb1bcfffff........
    .....f1b1b1ffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `],
100,
true
)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite3,
[img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 d 1 5 b . 
    . b 5 3 1 5 b . 
    . c 5 3 1 d c . 
    . c 5 1 d d c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `],
100,
true
)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite4,
[img`
    . . . . c c c c c c c . . . . . 
    . . . c 6 7 7 7 7 7 6 c . . . . 
    . . c 6 7 c 6 6 6 6 c 7 c . . . 
    . . c 7 7 6 f 6 6 f 6 7 6 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 7 6 1 f f 1 8 7 f . . 
    . . f 7 7 7 f 1 f f 1 f 6 f . . 
    . . f 6 7 7 f 2 2 2 2 f f . . . 
    . . c f 6 7 7 2 2 2 2 f c c . . 
    . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
    c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
    c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 1 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `],
100,
true
)
mySprite2.setPosition(29, 45)
mySprite3.setPosition(97, 49)
mySprite4.setPosition(125, 34)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(60000, function () {
    info.changeLifeBy(1)
})
