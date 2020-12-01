//Create variables here
var dog, hd, db, foodStock, dg
var food, backyardbg;
var bg, gardendog, backgroundbg
var br, lr, wr, garden, br, lr, wr, start,poop;
function preload()
{
  //load images here
  //dg = loadImage("images/dogImg.png")
  //hd = loadImage("images/dogImg1.png")
  garden= loadImage("images/Gardendog.png");
  br = loadImage("images/Bed Room.png")
  lr = loadImage("images/Living Room.png")
  wr = loadImage("images/Wash Room.png");
  start = loadImage("images/start.PNG")
  poop =loadImage("images/poop.PNG");

}

function setup() {
  createCanvas(450, 700);
 bg = createSprite(250,250,500,500)
  //dog = createSprite(250,300,50,50)
  //dog.addImage(dg)
  //dog.scale = .5
 food = new Food()
  db = firebase.database() 
  bg.addImage(start)
clean = createSprite(50,350,20,20)
clean.visible= false;
//clean1 = createSprite(90,350,20,20)

}


function draw() {  
background(46,139,87)
food.feed.mousePressed(()=>{
  //food.foodStock = food.foodStock-1;
  food.writeStock(food.foodStock);
  bg.addImage(lr)
});

food.readStock()
food.refill.mousePressed(()=>{
  food.refillStock();
});
food.play.mousePressed(()=>{
  
  //dog.addImage(gardendog)
  bg.addImage(garden)
 // background(backyardbg)
 // console.log("hi")

});

food.buy.mousePressed(()=>{
  food.money -= 10
  food.foodStock = food.foodStock + 1
  //console.log("hi")
  food.writeMoney(food.money)
});
food.readMoney()
food.bed.mousePressed(()=>{
  bg.addImage(br)
})

food.bath.mousePressed(()=>{
  bg.addImage(wr)
  clean.addImage(poop);
  clean.visible = true;
})
  drawSprites();
  //add styles here
  fill("black")
  //text("Press up arrow to feed your dog!",250,100);
  text(food.foodStock,250,150);
  text(food.money,300,150);

}



