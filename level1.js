
var world = new World();

var container = document.getElementById('world');

world.tiles = 
[[new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new StoneTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()]];

var player = new Player();

Utils.setUpPlayer(player, world);

world.draw(container);
world.loop();
