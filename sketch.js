









const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate="on sling"


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
}

function draw(){
    backgrounnd(255);
    if( World.framecount===60){
        drop=new Log(0,400,100)
        drop.x=randomNumber(0,1200)
    }

}