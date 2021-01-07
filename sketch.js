var PLAY = 1;
var END = 0;
var gameState = PLAY;
var tile1,tile1Img

var score=0;
var boundary,boundaryImg

var sprite,sprite_img;
var slab,slabImg, slabG;
var vol_slab,vol_slabImage,vol_slabG;

function preload(){
tile1Img = loadImage("bg.jpg")
sprite_img = loadImage("pic.png")
sprite_img = loadImage("pic.png")
boundaryImg = loadImage("11.png")
slabImg = loadImage("box.png")
vol_slabImage = loadImage("slab1.png")


slabG = new Group();
vol_slabG= new Group();


}

function setup() {
  createCanvas(displayWidth-10,displayHeight-166);

//   // CREATE fLOOR
//   for(var x=-1000; x <2000; x+=400){
//   for(var y=-2000; y< 1000; y+=400){
//  tile1 = createSprite(x,y)
//  tile1.addImage(tile1Img)
//  tile1.scale = 0.3
//   }
// }

//CREATE SLABS

box1 =  createSprite(800,0);
box1.addImage(slabImg)


box2 = createSprite(1200,0);
box2.addImage(slabImg)

box3 = createSprite(200,250);
box3.addImage(slabImg)

box4 = createSprite(200,650);
box4.addImage(slabImg)

box5= createSprite(1200,650);
box5.addImage(slabImg)

box6= createSprite(-200,-340);
box6.addImage(slabImg)

box7= createSprite(800,-300);
box7.addImage(slabImg)

box8= createSprite(800,-460);
box8.addImage(slabImg)

box9= createSprite(10,-1200)
box9.addImage(slabImg)

 box10= createSprite(1000,-1200)
 box10.addImage(slabImg)

 box11= createSprite(1000,-1200)
 box11.addImage(slabImg)


 sprite = createSprite(0,0);
 //sprite.setAnimation("bunny1_go_1");
 sprite.addImage(sprite_img)
  sprite.scale=4
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("#008B8B");
  sprite.collide(box1)
  sprite.collide(box2)

  sprite.collide(box3)

  sprite.collide(box4)

  sprite.collide(box5)

  sprite.collide(box6)

  sprite.collide(box7)

  sprite.collide(box8)

  sprite.collide(box9)

  sprite.collide(box10)

  //sprite.collide(box1)

  camera.x=sprite.x;
  camera.y=sprite.y;
  if (keyDown("right")) {
    sprite.x = sprite.x+25;
    sprite.mirrorX(1);
  }
  if (keyDown("left")) {
    sprite.x = sprite.x-25;
    sprite.mirrorX(-1);    
  }

  if (keyDown("up")) {
    sprite.y = sprite.y-25;
    sprite.mirrorX(1);
  }
  if (keyDown("down")) {
    sprite.y = sprite.y+25;
    sprite.mirrorX(-1);    
  }
  if (keyDown("A")) {
    camera.zoom = camera.zoom - 0.1;
  }
  if (keyDown("S")) {
    camera.zoom = camera.zoom + 0.1;
  } 
//MAP VIEW
  // if (camera.isActive()) {
  //   camera.x = World.mouseX;
  //   camera.y = World.mouseY;
  // }

// box1()
// sprite.collide(slabG)
  drawSprites();
}

// function box1(){
//   if(frameCount < 30){
//     slab = createSprite(random(-1000,1600),random(-1000,600))
//     vol_slab=createSprite(slab.x+100,slab.y+100)
//     vol_slab.addImage(vol_slabImage)
//     slab.addImage(slabImg)
//     slab.scale =0.4
//    // vol_slab.scale =0.1
//     slab.debug=true
//  slab.velocityY =  0.0000000001
//     slabG.add(slab)
//     slab.setCollider("rectangle",0,0,150,150)
//   }
// }


