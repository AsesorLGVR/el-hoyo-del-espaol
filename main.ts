enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    mySprite.say("Buen trabajo", 1000)
    info.changeScoreBy(1)
})
let mySprite: Sprite = null
game.showLongText("EL HOYO", DialogLayout.Center)
mySprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 d d d d d d d 1 1 1 1 
    . . 1 1 d d d d d d d d d 1 1 1 
    . . 1 d d d d d d d d d d 1 1 1 
    . . d d d f d d d f d d d 1 1 1 
    . . d d d d d d d d d d d 1 1 1 
    . . d d d d d d d d d d d 1 1 1 
    . . d d d f f f f d d d 1 1 1 . 
    . . d d d d d d d d d d d . . . 
    d d d d d d d d d d d d d d d . 
    d d d d d d d d d d d d d d d . 
    d . d d d d d d d d d d d . d . 
    d . d d d d d d d d d d d . d . 
    . . d d d d e d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . . d d d . d d d d . . . . . 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`0800140001010000000001010100000000000001010400000000030101010100000101010100000000000001010000000000000101030000000004010101010000010101010000000000000101000000000000010104000000000301010101000001010101000000000000010100000000000001010300000000040101010100000101010100000000000001010200000000020101010000000501010101010101010101`, img`
    2 2 . . . . 2 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 2 2 . . 2 2 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 2 2 . . 2 2 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 2 2 . . 2 2 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 2 2 . . 2 2 2 
    2 . . . . . . 2 
    2 . . . . . . 2 
    2 2 . . . . 2 2 
    2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,sprites.dungeon.floorLight5,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedSouth,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
scene.cameraFollowSprite(mySprite)
mySprite.say("Obvio")
info.setScore(0)
mySprite.ay = 800
myEnemy.follow(mySprite, 5)
