//var canvas = document.getElementById("mycanvas");
//var c = canvas.getContext("2d");
var z = 300;

var ageRange = z;
var prefFood = z;
var education = z;
var favoriteTeams = z;
var favoriteAthletes = z;
var prefGender = z;
//var hometown = z;
var inspirationalPeople = z;
var languages = z;
var curLocation = z;






var political;
var favoriteQuotes;
var sports;
var relationship;

function setup() {
    createCanvas(1800, 700);
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
    line(1620, 0, 1620, 600);
    line(1800, 0, 1800, 600);
    line(0, 600, 1800, 600);
    stroke('black');
    strokeWeight(10);
    line(0, z, 180, ageRange);
    line(180, ageRange, 360, prefFood);
    line(360, prefFood, 540, education);
    line(540, education, 720, favoriteTeams);
    line(720, favoriteTeams, 900, favoriteAthletes);
    line(900, favoriteAthletes, 1080, prefGender);
    line(1080, prefGender, 1260, inspirationalPeople);
    line(1260, inspirationalPeople, 1440, languages);
    line(1440, languages, 1620, curLocation);
    line(1620, curLocation, 1800, z);
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
    text('Location', 1630, 30);
    fill(0, 102, 153);
    rectMode(CENTER);

    //rect(x, 150, 150, 150);
    if(age <= 17) {
      ageRange = z;

    }
    if(age >= 18 && age <=24) {
      ageRange = z-150;
    }
    if(age >= 25 && age <=34) {
      ageRange = z-100;
    }
    if(age >= 35 && age <=44) {
      ageRange = z+50;
    }
    if(age >= 45 && age <=54) {
      ageRange = z+100;
    }
    if(age >= 55 && age <=64) {
      ageRange = z+150;
    }
    if(age >= 65) {
      ageRange = z+200;
    }
    
  if(food1.checked) {
    prefFood = z-50;
  }
  if(food2.checked) {
    prefFood = z-150;
  }
  if(food3.checked) {
      prefFood = z+50;
  }
  if(food4.checked) {
    prefFood = z-100;
  }
  if(food5.checked) {
    prefFood = z+100;
  }
  if(food6.checked) {
    prefFood = z+150;
  }

  if(major == 'Business') {
    education = z+200;
}else if(major == 'Health Profession' || major == 'Nursing' || major == 'Doctor' || major == 'Nurse') {
  education = z-50;
}else if(major == 'Social Science' || major == 'History') {
  education = z+100;
}else if(major == 'Engineering') {
  education = z-50;
}else if(major == 'Bio Science' || major == 'Bio' || major == 'Bioscience') {
  education = z-50;
}else if(major == 'Pyschology') {
  education = z+150;
}else if(major == 'Communication') {
  education = z-50;
}else if(major == 'Visuals Arts' || major == 'Performancing Arts' || major == 'Arts') {
  education = z-200;
}else if(major == 'Computer Science' || major == "Information Science") {
  education = z+50;
}else if(major == 'Education') {
  education = z-150;
} else {
  education = z;
}

if(team == 'Manchester United') {
  favoriteTeams = z+150;
  sports = 1;
}else if(team == 'New York Yankees') {
  sports = 0;
  favoriteTeams = z-100;
}else if(team == 'Los Angeles Lakers') {
  sports = 0;
  favoriteTeams = z+100;
  sports = 0;
}else if(team == 'Real Madrid') {
  favoriteTeams = z-50;
  sports = 1;
}else if(team == 'Green Bay Packers') {
  favoriteTeams = z +50;
  sports = 0;
} else {
  favoriteTeams = z;
  sports = 5;
}


if(player == 'Lebron James') {
  favoriteAthletes = z+100;
  sports = 2;
}else if(player == 'Cristiano Ronaldo') {
  favoriteAthletes = z-100;
}else if(player == 'Lionel Messi') {
  favoriteAthletes = z-50;
}else if(player == 'John Cena') {
  favoriteAthletes = z+150;
}else if(player == 'Neymar') {
  favoriteAthletes = z+50;
  sports = 1;
} else {
  favoriteAthletes = z;
}

if(gender == 'female' || gender == 'Female') {
  prefGender = z-50;
} else if(gender == 'male' || gender == 'Male') {
  prefGender = z+50;
} else {
  prefGender = z-100;
}


if(people == 'Ugur Sahin') {
  inspirationalPeople = z-50;
}else if(people == 'Kamala Harris') {
  inspirationalPeople = z-100;
}else if(people == 'Joe Biden') {
  inspirationalPeople = z-150;
}else if(people == 'Anthony Fauci') {
  inspirationalPeople = +50;
}else if(people == 'Emmanuelle Charpentier') {
  inspirationalPeople = z+250;
}else if(people == 'Jacinda Ardern') {
  inspirationalPeople = z+200;
}else if(people == 'Meghan Markle') {
  inspirationalPeople = z+150;
}else if(people == 'Sanna Marin') {
  inspirationalPeople = z+100;
}else if(people == 'Michelle Obama') {
  inspirationalPeople = z-200;
}else {
  inspirationalPeople = z;
}

if(language1.checked) {
  languages = z +50;
}
if(language2.checked) {
  languages = z -50;
}
if(language3.checked) {
  languages = z -100;
}
if(language4.checked) {
  languages = z -150;
}

if(locationCity == 'Mt Vernon' || locationCity =='Mt, Vernon') {
  curLocation = z - 150;
} else if(locationCity == 'Bellingham') {
  curLocation = z - 50;
} else if(locationState == 'Washington' && locationCity != 'Mt Vernon' && locationCity != 'Bellingham') {
  curLocation = z - 100;
} else if(locationState == 'Oregon') {
  curLocation = z + 50;
} else {
  curLocation = z;
}

ageRange;
prefFood;
education;
favoriteTeams;
favoriteAthletes;
prefGender;
inspirationalPeople;
languages;
curLocation;

var total = ageRange + prefFood + education + favoriteTeams + favoriteAthletes + prefGender + inspirationalPeople + languages + curLocation;
var adjustedTotal = total - 2700;

political;
favoriteQuotes;
sports;
relationship;

if(adjustedTotal >= -300 && adjustedTotal <= 300) {
  political = 0;
}
if(adjustedTotal < -300 && adjustedTotal >= -700) {
  political = -1;
}
if(adjustedTotal < -700) {
  political = -2;
}
if(adjustedTotal > 300) {
  political = -1;
}
text(participation, 0, 680);
if(participation > 5) {
  text(participation, 0, 680);
  text('Either due to low responses, or unexpected responses we were unable to accurately place you into a group.', 90, 650);
  text('If you wish to see any results try to fill in as many surveys as you can. ', 90, 680);
} else {
  if(adjustedTotal >= -300 && adjustedTotal <= 300) {
    text('Based on a 15% confidence you are predicted to be politically Libertarian', 90, 630);
  }
  if(adjustedTotal < -300 && adjustedTotal >= -700) {
    text('Based on a 15% confidence you are predicted to be politically Liberal', 90, 630);
  }
  if(adjustedTotal < -700) {
    text('Based on a 15% confidence you are predicted to be politically Centrist', 90, 630);
  }
  if(adjustedTotal > 300) {
    text('Based on a 15% confidence you are predicted to be politically Conservative', 90, 630);
  }

  if(sports == 0) {
    text('Your favorite sport is likely to be North American Football', 90, 650);
  }
  if(sports == 1) {
    text('Your favorite sport is likely to be Soccer', 90, 650);
  }
  if(sports == 2) {
    text('Your favorite sport is likely to be Basketball', 90, 650);
  }
  if(sports == 5) {
   text('You seem not to enjoy a mainstream sport', 90, 650);
  }
}
//text(adjustedTotal, 190, 650);

  }

  