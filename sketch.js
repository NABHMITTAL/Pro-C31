const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300


  



function setup() {
  createCanvas(480,800);



}

function draw() {
  background(0,0,0);  
  for(var k = 0; k <= 100; k = k + 80){
    divisions.push(new Division(k , divisionHeight/2,10, divisionHeight));
  }




}