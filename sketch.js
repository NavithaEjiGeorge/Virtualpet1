//Create variables here
var database;
var dog
var happyDog;
var foodS;
var foodStock;
var dogHappy;
function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  console.log(database)
  dog = createSprite(200,200,20,20)
  dog.addImage(happyDog)
  dog.scale=0.5
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background("white")
  drawSprites();
  //add styles here
if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}
if(keyDown(DOWN_ARROW)){
  DeleteStock(foodS)
  dog.addImage(dogHappy)
}
text(foodS,200,200)
}
function readStock(data){
  foodS=data.val()
}

//function writeStock(x){
  //database.ref('/').update({
 //   FoodS:x
  //})
 // if(x<=0){
 //   x=0
 // }
 // else{
 //   x=x-1
 // }
//}
function writeStock(x){
  if(x>=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}
function DeleteStock(x){
  if(x<20){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}
