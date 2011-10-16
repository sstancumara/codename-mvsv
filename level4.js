
var world = new World();

var container = document.getElementById('world');

world.tiles = 
[[new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FountainTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new TerminalTile(), new GroundTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new ExitTile(), new ExitTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new ExitTile(), new ExitTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()]];
for(var i = 0;i<world.tiles.length;++i) {
  for (var j=0;j<world.tiles.length;++j){
    if (Utils.getObjectClass(world.tiles[i][j]) == "TerminalTile") {
      world.tiles[i][j].hack = function(){
	for (var k=world.tiles.length - 4;k < world.tiles.length; ++k) {
	  world.tiles[k][world.tiles[0].length - 9].node.parentElement.removeChild(world.tiles[k][world.tiles[0].length - 9].node);
	  world.tiles[k][world.tiles[0].length - 9] = new FreeTile();
	  world.tiles[k][world.tiles[0].length - 9].draw(container, k, world.tiles[0].length - 9, world);
	}
	world.tiles[world.tiles.length - 5][world.tiles[0].length - 9].node.parentElement.removeChild(world.tiles[world.tiles.length - 5][world.tiles[0].length - 9].node);
	world.tiles[world.tiles.length - 5][world.tiles[0].length - 9] = new GroundTile();
	world.tiles[world.tiles.length - 5][world.tiles[0].length - 9].draw(container, world.tiles.length - 5, world.tiles[0].length - 9, world);
      }
      break;
    }
  }
}
var player = new Player();
Utils.setUpPlayer(player, world);
player.magician.actor.y = 14;
player.magician.actor.x = 20;
player.scientist.actor.y = 14;
world.draw(container);
world.loop();
C.jumpBoost = -12;
