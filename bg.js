var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var bg_img1;
var bg_img2;
var bg1_on = true;

var game = new Phaser.Game(config);
var timer = new Phaser.Time.TimerEvent();

function preload ()
{
    this.load.image('bg1', 'assets/bg1.png');
    this.load.image('bg2', 'assets/bg2.png');
}

function create ()
{
    bg_img1 = this.add.image(config.height/2, config.width/2, 'bg1');
    bg_img1.setVisible(true);
    bg_img2 = this.add.image(config.height/2, config.width/2, 'bg2');
    bg_img2.setVisible(false);

}

function update (time)
{
    console.log("Time elapsed: " + time);
    timer = time % 5015;
    if(timer >= 5000){
        if(bg1_on == true){
            console.log("Changing to bg2");
            bg_img1.setVisible(false);
            bg_img2.setVisible(true);
            bg1_on = false;
        }
        else{
            console.log("Changing to bg1");
            bg_img1.setVisible(true);
            bg_img1.setVisible(false);
            bg1_on = true;
        }
    }
}
