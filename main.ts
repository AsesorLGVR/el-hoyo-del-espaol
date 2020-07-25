scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, myTiles.transparency16)
    mySprite.startEffect(effects.spray)
})
let mySprite: Sprite = null
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
controller.moveSprite(mySprite, 100, 100)
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
