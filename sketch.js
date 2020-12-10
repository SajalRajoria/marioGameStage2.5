var gameState = "PLAY";

var pipe_differ, pipe_differ_img;
var mario, mario_stand, mario_running;
var bricks, bricks_image;
var background1, sign, sign_board;
var block, block_img, block1, block4;
var invisibleGround;
var pipe, pipe_img;
var building, building_img;
var building2,
  building3,
  building4,
  building5,
  building6,
  building_img2,
  building_img3,
  building_img4;
var bird, birds_img;
var halfblocks, half_blocks;
var mario_jump;
var coins, coin_animation;
var fire, fire_img;
var flame, flame_img, flame_animation;
var mushroom, enemies_img;
var half_blocks2;
var small_Jump_2_1, small_Jump_2_2, small_Jump_2_;
var left_arrow,
  left_arrow_img,
  right_arrow,
  right_arrow_img,
  up_arrow,
  up_arrow_img;
var covid1,
  covid2,
  covid3,
  covid4,
  covid4_img,
  covid1_img,
  covid2_img,
  covid3_img;
var restart, restart_img;

var lifeline, heart_img;
var small_Jump;
var count = 0;
var sound, bg_sound;
var jump_sound;
var game_over;
function preload() {
  bricks_image = loadImage("images/bricks.png");
  sign_board = loadImage("images/sign.png");
  background_img1 = loadImage("images/background-18.jpg");
  mario_stand = loadImage("images/mario1.png");
  mario_jump = loadImage("images/mario5.png");
  coin_animation = loadAnimation(
    "images/coin_animation/coin1.png",
    "images/coin_animation/coin2.png",
    "images/coin_animation/coin3.png",
    "images/coin_animation/coin4.png",
    "images/coin_animation/coin5.png",
    "images/coin_animation/coin6.png"
  );
  mario_running = loadAnimation(
    "images/mario2.png",
    "images/mario3.png",
    "images/mario4.png"
  );
  block_img = loadImage("images/blocks.png");
  pipe_img = loadImage("images/pi.png");
  building_img = loadImage("images/building1.png");
  building_img2 = loadImage("images/building2.png");
  building_img3 = loadImage("images/building3.png");
  birds_img = loadAnimation(
    "images/bird1.png",
    "images/bird2.png",
    "images/bird3.png"
  );
  /*flame_img = loadImage("pictures/fire_stage1.png");
  flame_animation = loadAnimation(
    
    "pictures/fire_animation/fire_stage3.png",
    "pictures/fire_animation/fire_stage4.png",
    "pictures/fire_animation/fire_stage5.png"
  );
  */
  restart_img = loadImage("pictures/restart_imgs.png");
  half_blocks = loadImage("images/blockshalf.png");
  fire_img = loadImage("images/fire.png");
  enemies_img = loadImage("pictures/corona_img.png");
  half_blocks2 = loadImage("pictures/blok.png");
  left_arrow_img = loadImage("arrows/left_arrows.png");
  right_arrow_img = loadImage("arrows/right_arrows.png");
  up_arrow_img = loadImage("arrows/up_arrows.png");
  covid1_img = loadImage("pictures/covid1.png");
  covid2_img = loadImage("pictures/covid2.png");
  covid3_img = loadImage("pictures/covid3.png");
  covid4_img = loadImage("pictures/covid4.png");
  heart_img = loadImage("pictures/heart_img.png");
  pipe_differ_img = loadImage("pictures/pipe_differ.png");

 
  bg_sound = loadSound("sound_effect/super-mario-bros.mp3");
  jump_sound = loadSound("sound_effect/jump_sound.mp3");
  game_over = loadSound("sound_effect/game_over.mp3");
  sound = loadSound("sound_effect/coin_sound.wav");
}

function setup() {
  createCanvas(1300, 400);

  background1 = createSprite(650, 200, 1300, 400);
  background1.addAnimation("bg", background_img1);
  background1.scale = 4.5;

  building = createSprite(170, 215, 10, 20);
  building.addAnimation("building", building_img);

  building3 = createSprite(970, 215, 10, 20);
  building3.addAnimation("building", building_img);

  building2 = createSprite(340, 215, 10, 20);
  building2.addAnimation("building", building_img2);

  building4 = createSprite(1170, 215, 10, 20);
  building4.addAnimation("building", building_img2);

  building5 = createSprite(650, 215, 10, 20);
  building5.addAnimation("building", building_img3);

  building6 = createSprite(530, 215, 10, 20);
  building6.addAnimation("building", building_img2);

  bird = createSprite(10, 30, 8, 5);
  bird.addAnimation("flying", birds_img);
  bird.velocityX = 6;

  bird1 = createSprite(250, 30, 10, 5);
  bird1.addAnimation("flying", birds_img);
  bird1.velocityX = 8;

  for (var k = 0; k < 1300; k = k + 70) {
    bricks = createSprite(k, 370, 10, 3);
    bricks.addAnimation("tiles", bricks_image);
    bricks.scale = 0.1;
  }

  invisibleGround = createSprite(650, 335, 1300, 5);
  invisibleGround.visible = false;
  //invisibleGround.debug = true;

  block = createSprite(300, 323, 50, 50);
  block.addAnimation("box", block_img);
  block.setCollider("rectangle", 0, 0, 20, 20);

  block1 = createSprite(275, 323, 50, 50);
  block1.addAnimation("box", block_img);
  block1.setCollider("rectangle", 0, 0, 20, 20);

  block2 = createSprite(250, 323, 50, 50);
  block2.addAnimation("box", block_img);
  block2.setCollider("rectangle", 0, 0, 20, 20);

  block3 = createSprite(225, 323, 50, 50);
  block3.addAnimation("box", block_img);
  block3.setCollider("rectangle", 0, 0, 20, 20);
  block3.debug = false;

  block4 = createSprite(350, 323, 50, 50);
  block4.addAnimation("box", block_img);
  block4.setCollider("rectangle", 0, 0, 20, 20);

  block5 = createSprite(350, 299, 50, 50);
  block5.addAnimation("box", block_img);
  block5.setCollider("rectangle", 0, 0, 20, 20);

  block6 = createSprite(350, 275, 50, 50);
  block6.addAnimation("box", block_img);
  block6.setCollider("rectangle", 0, 0, 20, 20);

  block7 = createSprite(350, 251, 50, 50);
  block7.addAnimation("box", block_img);
  block7.setCollider("rectangle", 0, 0, 20, 20);
  block7.debug = true;

  block8 = createSprite(375, 323, 50, 50);
  block8.addAnimation("box", block_img);
  block8.setCollider("rectangle", 0, 0, 20, 20);

  block9 = createSprite(375, 299, 50, 50);
  block9.addAnimation("box", block_img);
  block9.setCollider("rectangle", 0, 0, 20, 20);

  block10 = createSprite(375, 275, 50, 50);
  block10.addAnimation("box", block_img);
  block10.setCollider("rectangle", 0, 0, 20, 20);

  block11 = createSprite(400, 323, 50, 50);
  block11.addAnimation("box", block_img);
  block11.setCollider("rectangle", 0, 0, 20, 20);
  block11.debug = true;
  block12 = createSprite(400, 299, 50, 50);
  block12.addAnimation("box", block_img);
  block12.setCollider("rectangle", 0, 0, 20, 20);

  block13 = createSprite(425, 323, 50, 50);
  block13.addAnimation("box", block_img);
  block13.setCollider("rectangle", 0, 0, 20, 20);

  block14 = createSprite(750, 323, 50, 50);
  block14.addAnimation("box", block_img);
  block14.setCollider("rectangle", 0, 0, 20, 20);

  block15 = createSprite(775, 323, 50, 50);
  block15.addAnimation("box", block_img);
  block15.setCollider("rectangle", 0, 0, 20, 20);

  block16 = createSprite(775, 299, 50, 50);
  block16.addAnimation("box", block_img);
  block16.setCollider("rectangle", 0, 0, 20, 20);

  block17 = createSprite(800, 323, 50, 50);
  block17.addAnimation("box", block_img);
  block17.setCollider("rectangle", 0, 0, 20, 20);

  block18 = createSprite(800, 299, 50, 50);
  block18.addAnimation("box", block_img);
  block18.setCollider("rectangle", 0, 0, 20, 20);

  block19 = createSprite(800, 275, 50, 50);
  block19.addAnimation("box", block_img);
  block19.setCollider("rectangle", 0, 0, 20, 20);

  block20 = createSprite(825, 323, 50, 50);
  block20.addAnimation("box", block_img);
  block20.setCollider("rectangle", 0, 0, 20, 20);

  block21 = createSprite(825, 299, 50, 50);
  block21.addAnimation("box", block_img);
  block21.setCollider("rectangle", 0, 0, 20, 20);

  block22 = createSprite(825, 275, 50, 50);
  block22.addAnimation("box", block_img);
  block22.setCollider("rectangle", 0, 0, 20, 20);

  block23 = createSprite(825, 250, 50, 50);
  block23.addAnimation("box", block_img);
  block23.setCollider("rectangle", 0, 0, 25, 25);

  block24 = createSprite(850, 323, 50, 50);
  block24.addAnimation("box", block_img);
  block24.setCollider("rectangle", 0, 0, 25, 25);
  block24.debug = true;
  block25 = createSprite(850, 299, 50, 50);
  block25.addAnimation("box", block_img);
  block25.setCollider("rectangle", 0, 0, 20, 20);

  block26 = createSprite(850, 275, 50, 50);
  block26.addAnimation("box", block_img);
  block26.setCollider("rectangle", 0, 0, 20, 20);

  block27 = createSprite(850, 250, 50, 50);
  block27.addAnimation("box", block_img);
  block27.setCollider("rectangle", 0, 0, 20, 20);

  block28 = createSprite(850, 225, 50, 50);
  block28.addAnimation("box", block_img);
  block28.setCollider("rectangle", 0, 0, 25, 25);

  block29 = createSprite(875, 323, 50, 50);
  block29.addAnimation("box", block_img);
  block29.setCollider("rectangle", 0, 0, 25, 25);

  block30 = createSprite(875, 299, 50, 50);
  block30.addAnimation("box", block_img);
  block30.setCollider("rectangle", 0, 0, 20, 20);

  block31 = createSprite(875, 275, 50, 50);
  block31.addAnimation("box", block_img);
  block31.setCollider("rectangle", 0, 0, 20, 20);

  block32 = createSprite(875, 250, 50, 50);
  block32.addAnimation("box", block_img);
  block32.setCollider("rectangle", 0, 0, 20, 20);

  block33 = createSprite(875, 225, 50, 50);
  block33.addAnimation("box", block_img);
  block33.setCollider("rectangle", 0, 0, 20, 20);

  block34 = createSprite(875, 200, 50, 50);
  block34.addAnimation("box", block_img);
  block34.setCollider("rectangle", 0, 0, 25, 25);

  block38 = createSprite(1295, 323, 50, 50);
  block38.addAnimation("box", block_img);
  block38.setCollider("rectangle", 0, 0, 25, 25);

  block39 = createSprite(1295, 299, 50, 50);
  block39.addAnimation("box", block_img);
  block39.setCollider("rectangle", 0, 0, 20, 20);

  block40 = createSprite(1295, 275, 50, 50);
  block40.addAnimation("box", block_img);
  block40.setCollider("rectangle", 0, 0, 20, 20);

  block41 = createSprite(1295, 250, 50, 50);
  block41.addAnimation("box", block_img);
  block41.setCollider("rectangle", 0, 0, 20, 20);

  block42 = createSprite(1295, 225, 50, 50);
  block42.addAnimation("box", block_img);
  block42.setCollider("rectangle", 0, 0, 20, 20);

  block43 = createSprite(1295, 200, 50, 50);
  block43.addAnimation("box", block_img);
  block43.setCollider("rectangle", 0, 0, 25, 25);

  block44 = createSprite(1270, 323, 50, 50);
  block44.addAnimation("box", block_img);
  block44.setCollider("rectangle", 0, 0, 25, 25);

  block45 = createSprite(1270, 299, 50, 50);
  block45.addAnimation("box", block_img);
  block45.setCollider("rectangle", 0, 0, 20, 20);

  block46 = createSprite(1270, 275, 50, 50);
  block46.addAnimation("box", block_img);
  block46.setCollider("rectangle", 0, 0, 20, 20);

  block47 = createSprite(1270, 250, 50, 50);
  block47.addAnimation("box", block_img);
  block47.setCollider("rectangle", 0, 0, 20, 20);

  block48 = createSprite(1270, 225, 50, 50);
  block48.addAnimation("box", block_img);
  block48.setCollider("rectangle", 0, 0, 25, 25);

  block49 = createSprite(1245, 323, 50, 50);
  block49.addAnimation("box", block_img);
  block49.setCollider("rectangle", 0, 0, 20, 20);

  block50 = createSprite(1245, 299, 50, 50);
  block50.addAnimation("box", block_img);
  block50.setCollider("rectangle", 0, 0, 20, 20);
  block50.debug = true;

  block51 = createSprite(1245, 275, 50, 50);
  block51.addAnimation("box", block_img);
  block51.setCollider("rectangle", 0, 0, 20, 20);
  block51.debug = true;

  block52 = createSprite(1245, 250, 50, 50);
  block52.addAnimation("box", block_img);
  block52.setCollider("rectangle", 0, 0, 25, 25);
  block52.debug = true;

  block53 = createSprite(750, 323, 50, 50);
  block53.addAnimation("box", block_img);
  block53.setCollider("rectangle", 0, 0, 20, 20);

  block54 = createSprite(1270, 200, 50, 50);
  block54.addAnimation("box", block_img);
  block54.setCollider("rectangle", 0, 0, 25, 25);

  block55 = createSprite(1245, 200, 50, 50);
  block55.addAnimation("box", block_img);
  block55.setCollider("rectangle", 0, 0, 25, 25);

  block56 = createSprite(1245, 225, 50, 50);
  block56.addAnimation("box", block_img);
  block56.setCollider("rectangle", 0, 0, 25, 25);

  block57 = createSprite(1220, 323, 50, 50);
  block57.addAnimation("box", block_img);
  block57.setCollider("rectangle", 0, 0, 25, 25);

  block58 = createSprite(1220, 299, 50, 50);
  block58.addAnimation("box", block_img);
  block58.setCollider("rectangle", 0, 0, 20, 20);

  block59 = createSprite(1220, 275, 50, 50);
  block59.addAnimation("box", block_img);
  block59.setCollider("rectangle", 0, 0, 20, 20);

  block60 = createSprite(1220, 250, 50, 50);
  block60.addAnimation("box", block_img);
  block60.setCollider("rectangle", 0, 0, 20, 20);

  block61 = createSprite(1220, 225, 50, 50);
  block61.addAnimation("box", block_img);
  block61.setCollider("rectangle", 0, 0, 20, 20);

  block62 = createSprite(1220, 200, 50, 50);
  block62.addAnimation("box", block_img);
  block62.setCollider("rectangle", 0, 0, 25, 25);

  block63 = createSprite(1200, 323, 50, 50);
  block63.addAnimation("box", block_img);
  block63.setCollider("rectangle", 0, 0, 25, 25);

  block64 = createSprite(1200, 299, 50, 50);
  block64.addAnimation("box", block_img);
  block64.setCollider("rectangle", 0, 0, 20, 20);

  block65 = createSprite(1200, 275, 50, 50);
  block65.addAnimation("box", block_img);
  block65.setCollider("rectangle", 0, 0, 20, 20);

  block66 = createSprite(1200, 250, 50, 50);
  block66.addAnimation("box", block_img);
  block66.setCollider("rectangle", 0, 0, 20, 20);

  block67 = createSprite(1175, 225, 50, 50);
  block67.addAnimation("box", block_img);
  block67.setCollider("rectangle", 0, 0, 20, 20);

  block68 = createSprite(1175, 200, 50, 50);
  block68.addAnimation("box", block_img);
  block68.setCollider("rectangle", 0, 0, 25, 25);

  block69 = createSprite(1175, 323, 50, 50);
  block69.addAnimation("box", block_img);
  block69.setCollider("rectangle", 0, 0, 25, 25);

  block70 = createSprite(1175, 299, 50, 50);
  block70.addAnimation("box", block_img);
  block70.setCollider("rectangle", 0, 0, 20, 20);

  block71 = createSprite(1175, 275, 50, 50);
  block71.addAnimation("box", block_img);
  block71.setCollider("rectangle", 0, 0, 20, 20);

  block72 = createSprite(1175, 250, 50, 50);
  block72.addAnimation("box", block_img);
  block72.setCollider("rectangle", 0, 0, 20, 20);

  block73 = createSprite(1200, 225, 50, 50);
  block73.addAnimation("box", block_img);
  block73.setCollider("rectangle", 0, 0, 20, 20);

  block74 = createSprite(1200, 200, 50, 50);
  block74.addAnimation("box", block_img);
  block74.setCollider("rectangle", 0, 0, 25, 25);

  block75 = createSprite(1150, 225, 50, 50);
  block75.addAnimation("box", block_img);
  block75.setCollider("rectangle", 0, 0, 20, 20);

  block76 = createSprite(1150, 200, 50, 50);
  block76.addAnimation("box", block_img);
  block76.setCollider("rectangle", 0, 0, 25, 25);

  block77 = createSprite(1150, 323, 50, 50);
  block77.addAnimation("box", block_img);
  block77.setCollider("rectangle", 0, 0, 25, 25);

  block78 = createSprite(1150, 299, 50, 50);
  block78.addAnimation("box", block_img);
  block78.setCollider("rectangle", 0, 0, 20, 20);

  block79 = createSprite(1150, 275, 50, 50);
  block79.addAnimation("box", block_img);
  block79.setCollider("rectangle", 0, 0, 20, 20);

  block80 = createSprite(1150, 250, 50, 50);
  block80.addAnimation("box", block_img);
  block80.setCollider("rectangle", 0, 0, 20, 20);

  block81 = createSprite(1125, 225, 50, 50);
  block81.addAnimation("box", block_img);
  block81.setCollider("rectangle", 0, 0, 25, 25);

  block82 = createSprite(1125, 323, 50, 50);
  block82.addAnimation("box", block_img);
  block82.setCollider("rectangle", 0, 0, 25, 25);

  block83 = createSprite(1125, 299, 50, 50);
  block83.addAnimation("box", block_img);
  block83.setCollider("rectangle", 0, 0, 20, 20);

  block84 = createSprite(1125, 275, 50, 50);
  block84.addAnimation("box", block_img);
  block84.setCollider("rectangle", 0, 0, 20, 20);

  block85 = createSprite(1125, 250, 50, 50);
  block85.addAnimation("box", block_img);
  block85.setCollider("rectangle", 0, 0, 20, 20);

  block86 = createSprite(1100, 323, 50, 50);
  block86.addAnimation("box", block_img);
  block86.setCollider("rectangle", 0, 0, 25, 25);

  block87 = createSprite(1100, 299, 50, 50);
  block87.addAnimation("box", block_img);
  block87.setCollider("rectangle", 0, 0, 20, 20);

  block88 = createSprite(1100, 275, 50, 50);
  block88.addAnimation("box", block_img);
  block88.setCollider("rectangle", 0, 0, 20, 20);

  block89 = createSprite(1100, 250, 50, 50);
  block89.addAnimation("box", block_img);
  block89.setCollider("rectangle", 0, 0, 20, 20);

  block90 = createSprite(1075, 299, 50, 50);
  block90.addAnimation("box", block_img);
  block90.setCollider("rectangle", 0, 0, 20, 20);

  block91 = createSprite(1075, 323, 50, 50);
  block91.addAnimation("box", block_img);
  block91.setCollider("rectangle", 0, 0, 20, 20);

  block92 = createSprite(1075, 275, 50, 50);
  block92.addAnimation("box", block_img);
  block92.setCollider("rectangle", 0, 0, 20, 20);

  block93 = createSprite(1050, 299, 50, 50);
  block93.addAnimation("box", block_img);
  block93.setCollider("rectangle", 0, 0, 20, 20);

  block94 = createSprite(1050, 323, 50, 50);
  block94.addAnimation("box", block_img);
  block94.setCollider("rectangle", 0, 0, 20, 20);

  block95 = createSprite(1025, 323, 50, 50);
  block95.addAnimation("box", block_img);
  block95.setCollider("rectangle", 0, 0, 20, 20);

  block97 = createSprite(775, 200, 50);
  block97.addAnimation("box", block_img);
  block97.setCollider("rectangle", 0, 0, 20, 20);

  block98 = createSprite(750, 200, 50, 50);
  block98.addAnimation("box", block_img);
  block98.setCollider("rectangle", 0, 0, 20, 20);

  block99 = createSprite(725, 200, 50, 50);
  block99.addAnimation("box", block_img);
  block99.setCollider("rectangle", 0, 0, 20, 20);

  block100 = createSprite(700, 200, 50, 50);
  block100.addAnimation("box", block_img);
  block100.setCollider("rectangle", 0, 0, 20, 20);

  block101 = createSprite(675, 200, 50, 50);
  block101.addAnimation("box", block_img);
  block101.setCollider("rectangle", 0, 0, 20, 20);

  block102 = createSprite(650, 200, 50, 50);
  block102.addAnimation("box", block_img);
  block102.setCollider("rectangle", 0, 0, 20, 20);

  block103 = createSprite(625, 200, 50, 50);
  block103.addAnimation("box", block_img);
  block103.setCollider("rectangle", 0, 0, 20, 20);

  block104 = createSprite(600, 200, 50, 50);
  block104.addAnimation("box", block_img);
  block104.setCollider("rectangle", 0, 0, 20, 20);

  block105 = createSprite(575, 200, 50, 50);
  block105.addAnimation("box", block_img);
  block105.setCollider("rectangle", 0, 0, 20, 20);

  block106 = createSprite(550, 200, 50, 50);
  block106.addAnimation("box", block_img);
  block106.setCollider("rectangle", 0, 0, 20, 20);

  block107 = createSprite(525, 200, 50, 50);
  block107.addAnimation("box", block_img);
  block107.setCollider("rectangle", 0, 0, 20, 20);

  block108 = createSprite(500, 200, 50, 50);
  block108.addAnimation("box", block_img);
  block108.setCollider("rectangle", 0, 0, 20, 20);

  block109 = createSprite(475, 200, 50, 50);
  block109.addAnimation("box", block_img);
  block109.setCollider("rectangle", 0, 0, 20, 20);

  block110 = createSprite(450, 200, 50, 50);
  block110.addAnimation("box", block_img);
  block110.setCollider("rectangle", 0, 0, 20, 20);

  block111 = createSprite(425, 200, 50, 50);
  block111.addAnimation("box", block_img);
  block111.setCollider("rectangle", 0, 0, 20, 20);

  block112 = createSprite(400, 200, 50, 50);
  block112.addAnimation("box", block_img);
  block112.setCollider("rectangle", 0, 0, 20, 20);

  block127 = createSprite(800, 125, 50, 50);
  block127.addAnimation("box", block_img);
  block127.setCollider("rectangle", 0, 0, 20, 20);

  block128 = createSprite(825, 125, 50, 50);
  block128.addAnimation("box", block_img);
  block128.setCollider("rectangle", 0, 0, 20, 20);

  block129 = createSprite(850, 125, 50, 50);
  block129.addAnimation("box", block_img);
  block129.setCollider("rectangle", 0, 0, 20, 20);

  block130 = createSprite(875, 125, 50, 50);
  block130.addAnimation("box", block_img);
  block130.setCollider("rectangle", 0, 0, 20, 20);

  block131 = createSprite(400, 175, 50, 50);
  block131.addAnimation("box", block_img);
  block131.setCollider("rectangle", 0, 0, 20, 20);

  block132 = createSprite(400, 150, 50, 50);
  block132.addAnimation("box", block_img);
  block132.setCollider("rectangle", 0, 0, 20, 20);

  block133 = createSprite(400, 125, 50, 50);
  block133.addAnimation("box", block_img);
  block133.setCollider("rectangle", 0, 0, 20, 20);

  block134 = createSprite(400, 100, 50, 50);
  block134.addAnimation("box", block_img);
  block134.setCollider("rectangle", 0, 0, 20, 20);

  block135 = createSprite(900, 125, 50, 50);
  block135.addAnimation("box", block_img);
  block135.setCollider("rectangle", 0, 0, 20, 20);

  block136 = createSprite(900, 150, 50, 50);
  block136.addAnimation("box", block_img);
  block136.setCollider("rectangle", 0, 0, 20, 20);

  block137 = createSprite(900, 175, 50, 50);
  block137.addAnimation("box", block_img);
  block137.setCollider("rectangle", 0, 0, 20, 20);

  block138 = createSprite(900, 200, 50, 50);
  block138.addAnimation("box", block_img);
  block138.setCollider("rectangle", 0, 0, 20, 20);

  block139 = createSprite(775, 125, 50, 50);
  block139.addAnimation("box", block_img);
  block139.setCollider("rectangle", 0, 0, 20, 20);

  block140 = createSprite(775, 100, 50, 50);
  block140.addAnimation("box", block_img);
  block140.setCollider("rectangle", 0, 0, 20, 20);

  block141 = createSprite(775, 75, 50, 50);
  block141.addAnimation("box", block_img);
  block141.setCollider("rectangle", 0, 0, 20, 20);

  block142 = createSprite(775, 50, 50, 50);
  block142.addAnimation("box", block_img);
  block142.setCollider("rectangle", 0, 0, 20, 20);

  block143 = createSprite(775, 25, 50, 50);
  block143.addAnimation("box", block_img);
  block143.setCollider("rectangle", 0, 0, 20, 20);

  block144 = createSprite(775, 0, 50, 50);
  block144.addAnimation("box", block_img);
  block144.setCollider("rectangle", 0, 0, 20, 20);

  block145 = createSprite(250, 323 - 25, 50, 50);
  block145.addAnimation("box", block_img);
  block145.setCollider("rectangle", 0, 0, 20, 20);
  block145.debug = false;

  block146 = createSprite(275, 323 - 25, 50, 50);
  block146.addAnimation("box", block_img);
  block146.setCollider("rectangle", 0, 0, 20, 20);
  block146.debug = false;

  block147 = createSprite(300, 323 - 25, 50, 50);
  block147.addAnimation("box", block_img);
  block147.setCollider("rectangle", 0, 0, 20, 20);
  block147.debug = false;

  block148 = createSprite(275, 323 - 50, 50, 50);
  block148.addAnimation("box", block_img);
  block148.setCollider("rectangle", 0, 0, 20, 20);
  block148.debug = false;

  block149 = createSprite(300, 323 - 50, 50, 50);
  block149.addAnimation("box", block_img);
  block149.setCollider("rectangle", 0, 0, 20, 20);
  block149.debug = false;

  block150 = createSprite(300, 323 - 75, 50, 50);
  block150.addAnimation("box", block_img);
  block150.setCollider("rectangle", 0, 0, 20, 20);
  block150.debug = false;

  pipe1 = createSprite(490, 310, 30, 50);
  pipe1.addAnimation("pipe", pipe_img);
  pipe1.scale = 1.1;
  pipe1.setCollider("rectangle", 0, 0, 30, 40);

  pipe = createSprite(695, 310, 30, 50);
  pipe.addAnimation("pipe", pipe_img);
  pipe.scale = 1.1;
  pipe.setCollider("rectangle", 0, 0, 30, 40);

  fire = createSprite(330, 315, 10, 70);
  fire.addAnimation("fire", fire_img);

  sign = createSprite(50, 295, 10, 40);
  sign.addAnimation("signBoard", sign_board);
  sign.scale = 0.2;
  //pipe.debug = true

  coin = createSprite(200, 320, 30, 30);
  coin.addAnimation("coins", coin_animation);
  coin.setCollider("circle", 0, 0, 15);

  coin.scale = 0.5;

  coin1 = createSprite(250, 270, 30, 30);
  coin1.addAnimation("coins", coin_animation);
  coin1.scale = 0.5;
  coin1.setCollider("circle", 0, 0, 15);
  coin1.debug = true;

  coin2 = createSprite(225, 300, 30, 30);
  coin2.addAnimation("coins", coin_animation);
  coin2.setCollider("circle", 0, 0, 15);
  coin2.scale = 0.5;

  coin3 = createSprite(275, 250, 30, 30);
  coin3.addAnimation("coins", coin_animation);
  coin3.scale = 0.5;
  coin3.setCollider("circle", 0, 0, 15);

  coin4 = createSprite(300, 230, 30, 30);
  coin4.addAnimation("coins", coin_animation);
  coin4.scale = 0.5;
  coin4.debug = true;
  coin4.setCollider("circle", 0, 0, 15);

  coin5 = createSprite(350, 230, 30, 30);
  coin5.addAnimation("coins", coin_animation);
  coin5.scale = 0.5;
  coin5.setCollider("circle", 0, 0, 15);

  coin6 = createSprite(375, 250, 30, 30);
  coin6.addAnimation("coins", coin_animation);
  coin6.scale = 0.5;
  coin6.setCollider("circle", 0, 0, 15);

  coin7 = createSprite(400, 275, 30, 30);
  coin7.addAnimation("coins", coin_animation);
  coin7.scale = 0.5;
  coin7.setCollider("circle", 0, 0, 15);

  coin8 = createSprite(425, 300, 30, 30);
  coin8.addAnimation("coins", coin_animation);
  coin8.scale = 0.5;

  coin9 = createSprite(450, 320, 30, 30);
  coin9.addAnimation("coins", coin_animation);
  coin9.scale = 0.5;

  coin10 = createSprite(530, 320, 30, 30);
  coin10.addAnimation("coins", coin_animation);
  coin10.scale = 0.5;
  coin10.setCollider("circle", 0, 0, 15);

  coin11 = createSprite(530, 290, 30, 30);
  coin11.addAnimation("coins", coin_animation);
  coin11.scale = 0.5;
  coin11.setCollider("circle", 0, 0, 15);

  mushroom = createSprite(595, 315);
  mushroom.addAnimation("enemeies", enemies_img);
  mushroom.scale = 0.09;

  coin12 = createSprite(655, 320, 30, 30);
  coin12.addAnimation("coins", coin_animation);
  coin12.scale = 0.5;
  coin12.setCollider("circle", 0, 0, 15);

  coin13 = createSprite(655, 290, 30, 30);
  coin13.addAnimation("coins", coin_animation);
  coin13.scale = 0.5;
  coin13.setCollider("circle", 0, 0, 15);

  coin14 = createSprite(722, 320, 30, 30);
  coin14.addAnimation("coins", coin_animation);
  coin14.scale = 0.5;
  coin14.setCollider("circle", 0, 0, 15);

  coin15 = createSprite(747, 300, 30, 30);
  coin15.addAnimation("coins", coin_animation);
  coin15.scale = 0.5;
  coin15.setCollider("circle", 0, 0, 15);

  coin16 = createSprite(775, 273, 30, 30);
  coin16.addAnimation("coins", coin_animation);
  coin16.scale = 0.5;
  coin16.setCollider("circle", 0, 0, 15);

  coin50 = createSprite(800, 253, 30, 30);
  coin50.addAnimation("coins", coin_animation);
  coin50.scale = 0.5;
  coin50.setCollider("circle", 0, 0, 15);

  coin17 = createSprite(825, 223, 30, 30);
  coin17.addAnimation("coins", coin_animation);
  coin17.scale = 0.5;
  coin17.setCollider("circle", 0, 0, 15);

  coin18 = createSprite(850, 203, 30, 30);
  coin18.addAnimation("coins", coin_animation);
  coin18.scale = 0.5;
  coin18.setCollider("circle", 0, 0, 15);

  coin19 = createSprite(875, 180, 30, 30);
  coin19.addAnimation("coins", coin_animation);
  coin19.scale = 0.5;
  coin19.setCollider("circle", 0, 0, 15);

  coin20 = createSprite(775, 175, 30, 30);
  coin20.addAnimation("coins", coin_animation);
  coin20.scale = 0.5;
  coin20.setCollider("circle", 0, 0, 15);

  coin21 = createSprite(750, 175, 30, 30);
  coin21.addAnimation("coins", coin_animation);
  coin21.scale = 0.5;
  coin21.setCollider("circle", 0, 0, 15);

  coin22 = createSprite(725, 175, 30, 30);
  coin22.addAnimation("coins", coin_animation);
  coin22.scale = 0.5;
  coin22.setCollider("circle", 0, 0, 15);

  coin23 = createSprite(700, 175, 30, 30);
  coin23.addAnimation("coins", coin_animation);
  coin23.scale = 0.5;
  coin23.setCollider("circle", 0, 0, 15);

  coin24 = createSprite(675, 175, 30, 30);
  coin24.addAnimation("coins", coin_animation);
  coin24.scale = 0.5;
  coin24.setCollider("circle", 0, 0, 15);

  coin25 = createSprite(650, 175, 30, 30);
  coin25.addAnimation("coins", coin_animation);
  coin25.scale = 0.5;
  coin25.setCollider("circle", 0, 0, 15);

  coin26 = createSprite(600, 175, 30, 30);
  coin26.addAnimation("coins", coin_animation);
  coin26.scale = 0.5;
  coin26.setCollider("circle", 0, 0, 15);

  coin27 = createSprite(575, 175, 30, 30);
  coin27.addAnimation("coins", coin_animation);
  coin27.scale = 0.5;
  coin27.setCollider("circle", 0, 0, 15);

  coin28 = createSprite(550, 175, 30, 30);
  coin28.addAnimation("coins", coin_animation);
  coin28.scale = 0.5;
  coin28.setCollider("circle", 0, 0, 15);

  coin29 = createSprite(525, 175, 30, 30);
  coin29.addAnimation("coins", coin_animation);
  coin29.scale = 0.5;
  coin29.setCollider("circle", 0, 0, 15);

  coin30 = createSprite(500, 175, 30, 30);
  coin30.addAnimation("coins", coin_animation);
  coin30.scale = 0.5;
  coin30.setCollider("circle", 0, 0, 15);

  coin31 = createSprite(475, 175, 30, 30);
  coin31.addAnimation("coins", coin_animation);
  coin31.scale = 0.5;
  coin31.setCollider("circle", 0, 0, 15);

  coin32 = createSprite(800, 100, 30, 30);
  coin32.addAnimation("coins", coin_animation);
  coin32.scale = 0.5;
  coin32.setCollider("circle", 0, 0, 15);

  coin33 = createSprite(875, 100, 30, 30);
  coin33.addAnimation("coins", coin_animation);
  coin33.scale = 0.5;
  coin33.setCollider("circle", 0, 0, 15);

  coin34 = createSprite(900, 323, 30, 30);
  coin34.addAnimation("coins", coin_animation);
  coin34.scale = 0.5;
  coin34.setCollider("circle", 0, 0, 15);

  coin35 = createSprite(950, 323, 30, 30);
  coin35.addAnimation("coins", coin_animation);
  coin35.scale = 0.5;
  coin35.setCollider("circle", 0, 0, 15);

  coin36 = createSprite(1000, 323, 30, 30);
  coin36.addAnimation("coins", coin_animation);
  coin36.scale = 0.5;
  coin36.setCollider("circle", 0, 0, 15);

  coin37 = createSprite(1025, 323 - 25, 30, 30);
  coin37.addAnimation("coins", coin_animation);
  coin37.scale = 0.5;
  coin37.setCollider("circle", 0, 0, 15);

  coin38 = createSprite(1075, 323 - 75, 30, 30);
  coin38.addAnimation("coins", coin_animation);
  coin38.scale = 0.5;
  coin38.setCollider("circle", 0, 0, 15);

  coin39 = createSprite(1125, 323 - 125, 30, 30);
  coin39.addAnimation("coins", coin_animation);
  coin39.scale = 0.5;
  coin39.setCollider("circle", 0, 0, 15);

  left_arrow = createSprite(1120, 365, 10, 10);
  left_arrow.addAnimation("arrows", left_arrow_img);
  left_arrow.scale = 0.2;

  right_arrow = createSprite(1200, 365, 10, 10);
  right_arrow.addAnimation("arrows", right_arrow_img);
  right_arrow.scale = 0.2;

  up_arrow = createSprite(1155, 300, 10, 10);
  up_arrow.addAnimation("arrows", up_arrow_img);
  up_arrow.scale = 0.2;

  covid1 = createSprite(620, 170, 10, 10);
  covid1.addAnimation("killer", covid1_img);
  covid1.scale = 0.3;

  covid2 = createSprite(770, 170, 10, 10);
  covid2.addAnimation("killer", covid2_img);
  covid2.scale = 0.3;
  covid2.velocityX = -2;

  covid3 = createSprite(430, 170, 10, 10);
  covid3.addAnimation("killer", covid3_img);
  covid3.scale = 0.3;
  covid3.velocityX = 2;

  covid4 = createSprite(925, 315, 10, 10);
  covid4.addAnimation("killer", covid4_img);
  covid4.scale = 0.07;
  covid4.velocityX = 2;

  small_Jump = createSprite(427, 140, 30, 5);
  small_Jump.shapeColor = 0;
  small_Jump.visible = false;

  small_Jump1 = createSprite(440, 163, 5, 50);
  small_Jump1.shapeColor = 0;
  small_Jump1.visible = false;

  mario = createSprite(10, 315, 50, 50);
  mario.addAnimation("stand", mario_stand);
  mario.scale = 1.3;
  mario.addAnimation("running", mario_running);
  mario.setCollider("rectangle", 0, 0, 15, 27);
  mario.debug = false;

  

  pipe2 = createSprite(430, 165, 30, 50);
  pipe2.addAnimation("pipe", pipe_img);
  pipe2.scale = 1.1;
  pipe2.setCollider("rectangle", 0, 0, 30, 40);

  pipe3 = createSprite(840, 90, 30, 50);
  pipe3.addAnimation("pipe", pipe_img);
  pipe3.scale = 1.1;
  pipe3.setCollider("rectangle", 0, 0, 30, 40);

  small_Jump2 = createSprite(427, 183, 30, 5);
  small_Jump2.shapeColor = 0;
  small_Jump2.visible = false;

  small_Jump3 = createSprite(839, 67, 25, 5);
  small_Jump3.shapeColor = 0;
  small_Jump3.visible = false;

  small_Jump4 = createSprite(825, 90, 5, 50);
  small_Jump4.shapeColor = 0;
  small_Jump4.visible = false;

  small_Jump5 = createSprite(850, 90, 5, 50);
  small_Jump5.shapeColor = 0;
  small_Jump5.visible = false;

  small_Jump6 = createSprite(1235, 165, 5, 55);
  small_Jump6.shapeColor = 0;
  small_Jump6.visible = false;

  

  restart = createSprite(1250, 40, 30, 50);
  restart.addAnimation("game", restart_img);
  restart.scale = 0.1;
  restart.visible = false;

 /* flame = createSprite(600, 180, 50, 50);
  flame.addAnimation("hot", flame_animation);
  */
 //bg_sound.play();
}

function draw() {
  background("blue");
  
  if (gameState === "PLAY") {
    console.log(0);
    if (keyDown(RIGHT_ARROW) || mousePressedOver(right_arrow)) {
      mario.changeAnimation("running", mario_running);
      mario.x = mario.x + 5;
    } else {
      mario.changeAnimation("stand", mario_stand);
    }

    if (keyDown(LEFT_ARROW) || mousePressedOver(left_arrow)) {
      mario.changeAnimation("running", mario_running);
      mario.x = mario.x - 5;
    }
    if (covid2.x < 640) {
      covid2.velocityX = 2;
    } else if (covid2.x > 770) {
      covid2.velocityX = -2;
    }

    if (covid3.x > 600) {
      covid3.velocityX = -2;
    } else if (covid3.x < 430) {
      covid3.velocityX = 2;
    }

    if (covid4.x > 1000) {
      covid4.velocityX = -2;
    } else if (covid4.x < 900) {
      covid4.velocityX = 2;
    }

    if (mario.isTouching(coin)) {
      coin.remove();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin1)) {
      coin1.remove();

      sound.play();
      count = count + 5;
    }

    if (mario.isTouching(coin2)) {
      coin2.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin3)) {
      coin3.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin4)) {
      coin4.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin5)) {
      coin5.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin6)) {
      coin6.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin7)) {
      coin7.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin8)) {
      coin8.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin9)) {
      coin9.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin10)) {
      coin10.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin11)) {
      coin11.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin12)) {
      coin12.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin13)) {
      coin13.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin14)) {
      coin14.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin15)) {
      coin15.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin16)) {
      coin16.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin17)) {
      coin17.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin18)) {
      coin18.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin19)) {
      coin19.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin20)) {
      coin20.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin21)) {
      coin21.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin22)) {
      coin22.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin23)) {
      coin23.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin24)) {
      coin24.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin25)) {
      coin25.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin26)) {
      coin26.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin27)) {
      coin27.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin28)) {
      coin28.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin29)) {
      coin29.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin30)) {
      coin30.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin31)) {
      coin31.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin32)) {
      coin32.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin33)) {
      coin33.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin50)) {
      coin50.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin34)) {
      coin34.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin35)) {
      coin35.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin36)) {
      coin36.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin37)) {
      coin37.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin38)) {
      coin38.destroy();
      count = count + 5;
      sound.play();
    }

    if (mario.isTouching(coin39)) {
      coin39.destroy();
      count = count + 5;
      sound.play();
    }


    //console.log(mario.y);
    mario.velocityY = mario.velocityY + 0.8;
    if (
      (keyDown(UP_ARROW) && mario.y >= 254) ||
      mousePressedOver(up_arrow) ||
      keyWentDown("i")
    ) {
      jump_sound.play();
      mario.velocityY = -9;
    }

    if (mario.isTouching(small_Jump)) {
      mario.velocityY = 2;
    }
    if (mario.isTouching(small_Jump2)) {
      mario.x = 843;
      mario.y = 85;
      mario.velocityY = -8;
    }
    if (mario.y < 65) {
      mario.collide(small_Jump3);
    }

   

    if (bird.x > 1300) {
      bird.x = 20;
      bird.y = 30;
    }
    if (bird1.x > 1300) {
      bird1.x = 0;
      bird1.y = 30;
    }

    mario.collide(block);
    mario.collide(block3);
    //mario.collide(block35);
    //mario.collide(block36);
    mario.collide(block4);
    mario.collide(block5);
    mario.collide(block6);
    mario.collide(block7);

    mario.collide(block10);

    mario.collide(block12);
    mario.collide(block13);
    mario.collide(block14);
    mario.collide(block16);
    mario.collide(block19);
    mario.collide(block22);
    mario.collide(block23);
    mario.collide(block28);
    mario.collide(block29);
    mario.collide(block30);
    mario.collide(block31);
    mario.collide(block32);
    mario.collide(block33);
    mario.collide(block34);

    mario.collide(block38);
    mario.collide(block39);
    mario.collide(block40);
    mario.collide(block41);
    mario.collide(block42);
    mario.collide(block43);
    mario.collide(block44);
    mario.collide(block45);
    mario.collide(block46);
    mario.collide(block47);
    mario.collide(block48);
    mario.collide(block49);
    mario.collide(block50);
    mario.collide(block51);
    mario.collide(block52);
    mario.collide(block53);
    mario.collide(block54);
    mario.collide(block55);
    mario.collide(block56);
    mario.collide(block57);
    mario.collide(block58);
    mario.collide(block59);
    mario.collide(block60);
    mario.collide(block61);
    mario.collide(block62);
    mario.collide(block63);
    mario.collide(block64);
    mario.collide(block65);
    mario.collide(block66);
    mario.collide(block67);
    mario.collide(block68);
    mario.collide(block69);
    mario.collide(block70);
    mario.collide(block71);
    mario.collide(block72);
    mario.collide(block73);
    mario.collide(block74);
    mario.collide(block75);
    mario.collide(block76);
    mario.collide(block77);
    mario.collide(block78);
    mario.collide(block79);
    mario.collide(block80);
    mario.collide(block81);
    mario.collide(block82);
    mario.collide(block83);
    mario.collide(block84);
    mario.collide(block85);
    mario.collide(block86);
    mario.collide(block87);
    mario.collide(block88);
    mario.collide(block89);
    mario.collide(block90);
    mario.collide(block91);
    mario.collide(block92);
    mario.collide(block93);
    mario.collide(block94);
    mario.collide(block95);

    mario.collide(block97);
    mario.collide(block98);
    mario.collide(block99);
    mario.collide(block100);
    mario.collide(block101);
    mario.collide(block102);
    mario.collide(block103);
    mario.collide(block104);
    mario.collide(block105);
    mario.collide(block106);
    mario.collide(block107);
    mario.collide(block108);
    mario.collide(block109);
    mario.collide(block110);
    mario.collide(block111);
    mario.collide(block112);

    mario.collide(block127);
    mario.collide(block128);
    mario.collide(block129);
    mario.collide(block130);
    mario.collide(block131);
    mario.collide(block132);
    mario.collide(block133);
    mario.collide(block134);
    mario.collide(block135);
    mario.collide(block136);
    mario.collide(block137);
    mario.collide(block138);
    mario.collide(block139);
    mario.collide(block140);
    mario.collide(block141);
    mario.collide(block142);
    mario.collide(block143);
    mario.collide(block144);
    mario.collide(block145);
    mario.collide(block146);
    mario.collide(block147);
    mario.collide(block148);
    mario.collide(block149);
    mario.collide(block150);
    mario.collide(pipe);
    mario.collide(pipe1);
    //mario.collide(small_Jump);
    mario.collide(small_Jump1);
    mario.collide(small_Jump4);
    mario.collide(small_Jump5);
    mario.collide(small_Jump6);
    

    mario.collide(invisibleGround);

    if (mario.isTouching(fire)) {
      gameState = "END";
      game_over.play();
    }

    if(mario.isTouching(covid1)){
      gameState = "END";
      mario.changeAnimation("stand",mario_stand);
    }

    if(mario.isTouching(covid2)){
      gameState = "END";
       mario.changeAnimation("stand",mario_stand);
    }

    if(mario.isTouching(covid3)){
      gameState = "END";
       mario.changeAnimation("stand",mario_stand);
    }

    if(mario.isTouching(covid4)){
      gameState = "END";
       mario.changeAnimation("stand",mario_stand);
    }

    if(mario.isTouching(mushroom)){
      gameState = "END";
       mario.changeAnimation("stand", mario_stand);
    }
  } else if (gameState === "END") {
    mario.velocityY = 0;

    restart.visible = true;
    covid2.visible = false;
    covid3.visible = false;
    covid4.visible = false;

    console.log("from End");
  }

  if (mousePressedOver(restart) && gameState === "END") {
    reset();
  }

  drawSprites();

  fill("red");
  strokeWeight(10);
  stroke("black");
  textSize(25);
  textFont("Arial");
  text("Score: " + count, 250, 100);
}
function reset() {
  gameState = "PLAY";

  mario.x = 10;
  mario.y = 310;
  restart.visible = false;
  count = 0;

  covid2.x = 770;
  covid2.y = 170;
  covid2.visible = true;

  covid3.x = 430;
  covid3.y = 170;
  covid3.visible = true;

  covid4.x = 925;
  covid4.y = 315;
  covid4.visible = true;
}
