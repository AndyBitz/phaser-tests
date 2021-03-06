function Boot() {}

Boot.preload = function() {
  // load assets
  game.load.image('bot', 'res/bot.png');
  game.load.image('explosion', 'res/explosion.png');
  game.load.image('enemy', 'res/enemy.png');
  game.load.image('battery', 'res/battery.png');
  game.load.audio('boom', 'res/boom.m4a');
  game.load.audio('over', 'res/over.m4a');
  game.load.audio('noice', 'res/noice.m4a');
};

Boot.create = function() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

  game.state.start('menu');
};

Boot.update = function() {

};