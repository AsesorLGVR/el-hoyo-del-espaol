enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    mySprite.startEffect(effects.confetti)
    info.changeScoreBy(1)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    mySprite.startEffect(effects.confetti)
    info.changeScoreBy(1)
    music.baDing.play()
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
tiles.setTilemap(tiles.createTilemap(hex`1400190007070707070707070000000000000000000000000707070707070707000707090909090909090900000000000000000000000700000000000000000000000706060707070700070b0b09000009090909070000060607070700050709090900000000050b0000000101000000000101090b09090900090909000007010b00000000050100000000000000000500000001040000000003010009090909090909090700000101010000010101000000000000000000000000010000000000000100000000000000000000000701050000000000010b0909090509090900000000010300000000040109090b0909090b0900000000010101000001010100000000000000000007000001000000000000010500000000000000000000000105000000000b010909090900090909090000070104000000000301000000000000000000000000010101000001010105090509090905090007000001000000000000010b0905090509050900000005010b000000000b010909090905090909000000070103000000000401000000000000000000000000010101000001010105000b0005000b000b0b0000010b00000000000109000900090009000907000001020000000002010b0000000009090909000000010100000005010105000000000a0a0a090707080101010101010101090909090909090a00`, img`
    2 2 2 2 2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . 2 . . . . . . . . . 
    . . 2 . . 2 2 2 2 . 2 . . 2 . . 2 2 2 2 
    2 . . . . 2 2 2 . . 2 2 2 2 . . . . . . 
    . . . 2 2 . . . . 2 2 2 . 2 2 2 . 2 2 2 
    . . 2 2 . . . . . . 2 . . . . . . . . . 
    . . . 2 . . . . . . 2 . 2 2 2 2 2 2 2 2 
    2 . . 2 2 2 . . 2 2 2 . . . . . . . . . 
    . . . 2 . . . . . . 2 . . . . . . . . . 
    . . 2 2 . . . . . . 2 . 2 2 2 . 2 2 2 . 
    . . . 2 . . . . . . 2 2 2 . 2 2 2 . 2 . 
    . . . 2 2 2 . . 2 2 2 . . . . . . . . . 
    2 . . 2 . . . . . . 2 . . . . . . . . . 
    . . . 2 . . . . . . 2 2 2 2 2 . 2 2 2 2 
    . . 2 2 . . . . . . 2 . . . . . . . . . 
    . . . 2 2 2 . . 2 2 2 . 2 . 2 2 2 . 2 . 
    2 . . 2 . . . . . . 2 . 2 . 2 . 2 . 2 . 
    . . . 2 . . . . . . 2 2 2 2 2 . 2 2 2 . 
    . . 2 2 . . . . . . 2 . . . . . . . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . . . . . 
    . . . 2 . . . . . . 2 2 . 2 . 2 . 2 . 2 
    2 . . 2 . . . . . . 2 . . . . . 2 2 2 2 
    . . . 2 2 . . . . 2 2 . . . . . . . . 2 
    2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    `, [myTiles.tile0,sprites.dungeon.floorLight5,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedSouth,sprites.dungeon.collectibleRedCrystal,sprites.builtin.forestTiles29,sprites.builtin.brick,sprites.dungeon.doorClosedNorth,sprites.castle.rock2,sprites.castle.shrub,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorClosedNorth)
scene.cameraFollowSprite(mySprite)
mySprite.say("Obvio")
info.setScore(0)
info.startCountdown(180)
mySprite.ay = 800
myEnemy.follow(mySprite, 5)
