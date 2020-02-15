var config = {
    type: Phaser.WEBGL,
    width: 1250,
    height: 480,
    backgroundColor: '#2975f0',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){
    this.load.image('player', 'assets/placeholder-player.png');
}

function create(){

}

function update(){

};