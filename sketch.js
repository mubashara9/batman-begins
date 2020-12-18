const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=100;
var drops=[];
var umbrella;
var thunderimg, thunder;

function preload(){
    thunderimg=loadAnimation("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png")
}

function setup(){
   createCanvas(1200,800);
    engine=Engine.create();
    world=engine.world;

   
    umbrella= new Umbrella(300,500);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,600),random(0,400)))
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella.display();
    if(frameCount%60===0){
    thunder=createSprite(random(1,600),10,50,50);
    thunder.addAnimation("thunder",thunderimg)
    }
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    
    if(frameCount%65===0){
        thunder.destroy();
    }
    drawSprites()
}   

