namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
	
})
let mySprite = sprites.create(img`
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
tiles.setTilemap(tiles.createTilemap(
            hex`0800140002020808080802020208080808080802020c080808080b02020202080802020202080808080808020208080808080802020b080808080c02020202080802020202080808080808020208080808080802020c080808080b02020202080802020202080808080808020208080808080802020b080808080c0202020208080202020208080808080802020708080808070202020808080802020202020202020202`,
            img`
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
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.dungeon.floorLight5,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.doorOpenNorth,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.doorLockedNorth,sprites.dungeon.chestClosed,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedWest],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
scene.cameraFollowSprite(mySprite)
