function Enemy() {
  Enemy.group = game.add.group();
  Enemy.spawnLoop();
}

Enemy.spawnLoop = function() {
  game.time.events.loop(
    Phaser.Timer.SECOND,
    Enemy.spawn,
    this
  );
};

Enemy.spawn = function() {
  // never spawn more than 50
  if (Enemy.group.length > 50) return;

  const enemy = game.add.sprite(0, 0, 'collection', 'enemy/frame1.png');
  const direction = game.rnd.integerInRange(0, 1);
  const velocity = game.rnd.integerInRange(100, 140);

  // defaults
  enemy.health = 10;

  // position
  enemy.x = direction ? 0 : game.world.width-enemy.width;
  enemy.y = game.world.centerX;

  // physics
  game.physics.arcade.enable(enemy);
  enemy.body.gravity.y = 1000;
  enemy.body.collideWorldBounds = true;
  enemy.body.velocity.x = direction ? velocity : -velocity;
  enemy.body.bounce.set(1);

  // add to group
  Enemy.group.add(enemy);
};