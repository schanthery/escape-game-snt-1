// mettre ici les variables globales du projets
var states = {};
// création de la fenetre phaser
var game = new Phaser.Game(1024,  768, Phaser.AUTO);
Phaser.Device.whenReady(function () {
    game.plugins.add(PhaserInput.Plugin);
});
// liste des états
game.state.add('menu', menu);
// lancement du jeu
game.state.start('menu');
// fin du boot