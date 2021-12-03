//var canvas = document.getElementById("mycanvas");
//var c = canvas.getContext("2d");
var z = 300;

var ageRange = 50;
var education = 100;
var favoriteTeams = 50;
var favoriteAthletes = z;
var gender = z;
//var hometown = z;
var inspirationalPeople = z;
var languages = z;
var curLocation = z;


var political = z;
var favoriteQuotes = z;
var sports = z;
var relationship = z;

function setup() {
    createCanvas(1800, 600);
  }
  
  function draw() {
    colorMode(RGB);
    background(238, 240, 198);
  
    //
    strokeWeight(1);
    stroke('red');
    line(180, 0, 180, 600);
    line(360, 0, 360, 600);
    line(540, 0, 540, 600);
    line(720, 0, 720, 600);
    line(900, 0, 900, 600);
    line(1080, 0, 1080, 600);
    line(1260, 0, 1260, 600);
    line(1440, 0, 1440, 600);
    line(1620, 0, 1620, 600);

    stroke('black');
    strokeWeight(10);
    line(0, z, 180, ageRange);
    line(180, ageRange, 360, education);
    line(360, education, 540, favoriteTeams);
    line(540, favoriteTeams, 720, favoriteAthletes);
    line(720, favoriteAthletes, 900, gender);
    line(900, gender, 1080, inspirationalPeople);
    line(1080, inspirationalPeople, 1260, languages);
    line(1260, languages, 1440, curLocation);
    line(1440, curLocation, 1620, z);
    strokeWeight(1);
    textSize(32);
    text('Age', 190, 30);
    text('Food', 370, 30);
    text('Major', 550, 30);
    text('Team', 730, 30);
    text('Athlete', 910, 30);
    text('Gender', 1090, 30);
    text('Inspired By', 1270, 30);
    text('Languages', 1450, 30);
    fill(0, 102, 153);
    rectMode(CENTER);

    //rect(x, 150, 150, 150);
 
  }

  