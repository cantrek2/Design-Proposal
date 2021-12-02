var z = 150;

var ageRange = 50;
var education = 100;
var favoriteTeams = 50;
var favoriteAthletes = z;
var gender = z;
var hometown = z;
var inspirationalPeople = z;
var languages = z;
var curLocation = z;


var political = z;
var favoriteQuotes = z;
var sports = z;
var relationship = z;

function setup() {
    createCanvas(1000, 600);
  }
  
  function draw() {
    colorMode(HSB);
    background(255, 204, 100);
  
    //
    strokeWeight(10);
    line(0, 150, 100, ageRange);
    line(100, ageRange, 200, education);
    line(200, education, 300, favoriteTeams);
    line(300, favoriteTeams, 400, favoriteAthletes);
    line(400, favoriteAthletes, 500, gender);
    line(500, gender, 600, hometown);
    line(600, hometown, 700, inspirationalPeople);
    line(700, inspirationalPeople, 800, languages);
    line(800, languages, 900, curLocation);
    
    textSize(32);
    text('word', 10, 30);
    fill(0, 102, 153);
    rectMode(CENTER);

    //rect(x, 150, 150, 150);
 
  }