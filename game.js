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
var timer = new Phaser.Time.TimerEvent();

var cursors;

var player;
var grnd1;
var grnd2;

var bg_img1;
var bg_img2;
var bg1_on = true;

function preload(){
    this.load.spritesheet('player', 'assets/placeholder-player.png', {frameWidth: 50, frameHeight: 50});
    this.load.image('grnd', 'assets/ground.png');
    this.load.image('bg1', 'assets/bg1.png');
    this.load.image('bg2', 'assets/bg2.png');
}

function create(){
    cursors = this.input.keyboard.createCursorKeys();

    bg_img1 = this.add.image(config.width/2, config.height/2, 'bg1');
    bg_img1.setVisible(true);
    bg_img2 = this.add.image(config.width/2, config.height/2, 'bg2');
    bg_img2.setVisible(false);

    var ground = this.physics.add.staticGroup();

    ground.create(config.width/2, 500, 'grnd');

    player = this.physics.add.sprite(125,300, 'player');
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, ground);

    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player', {start:1, end: 4}),
        frameRate: 10,
        repeat: 3
    });
}

function update(time){
    player.anims.play('run', true);

    //console.log(player.body.touching.down);
    if(cursors.up.isDown && player.body.onFloor()){
        player.setVelocityY(-400);
    }

    timer = time % 5015;
    console.log("Time elapsed: " + timer);
    if(timer >= 5000){
        if(bg1_on){
            console.log("Changing to bg2");
            bg_img1.setVisible(false);
            bg_img2.setVisible(true);
            bg1_on = false;
            timer = 0;
        }
        else{
            console.log("Changing to bg1");
            bg_img1.setVisible(true);
            bg_img2.setVisible(false);
            bg1_on = true;
            timer = 0;
        }
    }
};