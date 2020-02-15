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
    },

    physics:{
        default: 'arcade',
        arcade:{
            gravity: {
                y:1000
            },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);
var cursors;

var player;
var grnd1;
var grnd2;

function preload(){
    this.load.spritesheet('player', 'assets/placeholder-player.png', {frameWidth: 50, frameHeight: 50});
    this.load.image('grnd', 'assets/ground.png');
}

function create(){
    cursors = this.input.keyboard.createCursorKeys();
    grnd1 = this.physics.add.sprite(config.width/2, 500, 'grnd');
    grnd1.body.moves = false;

    player = this.physics.add.sprite(125,300, 'player');
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, grnd1);

    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player', {start:1, end: 4}),
        frameRate: 10,
        repeat: 3
    });
}

function update(){
    player.anims.play('run', true);

    //console.log(player.body.touching.down);
    if(cursors.up.isDown && player.body.onFloor()){
        player.setVelocityY(-400);
    }
};