function WoodenTile() {
  this.passible = false;
}


WoodenTile.prototype.draw = function(container, x, y) {
  Tile.draw(this, container, x, y, "bg_brown.png");
}
