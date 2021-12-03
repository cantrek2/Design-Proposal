var age;
var major;
var locationState;
var locationCity;
var gender;

var team;
var player;
var people;

function populateGraphs () {
    const colorOne= '#3c8dbc';
    const colorTwo= '#f56954';
    const colorThree= '#f39c12';
    const colorFour= 'blue';
    const colorFive= 'yellow';
    const colorSix= 'pink';
    const colorSeven= 'purple';
    const colorEight= 'Brown';
    const colorNine= 'Black';
    const colorTen= 'teal';
    const colorEleven= 'White';
    const choice= 'green';

    const selection = 'zero';
    let pieOne = colorOne;
    let pieTwo = colorTwo;
    let pieThree = colorThree;
    let pieFour = colorFour;
    let pieFive = colorFive;
    let pieSix = colorSix;
    let pieSeven = colorSeven;


    if(age <= 17) {
        pieOne = choice;
    }
    if(age >= 18 && age <=24) {
        pieTwo = choice;
    }
    if(age >= 25 && age <=34) {
        pieThree = choice;
    }
    if(age >= 35 && age <=44) {
        pieFour = choice;
    }
    if(age >= 45 && age <=54) {
        pieFive = choice;
    }
    if(age >= 55 && age <=64) {
        pieSix = choice;
    }
    if(age >= 65) {
        pieSeven = choice;
    }
    var ctx = document.getElementById("Age_range").getContext('2d');
    var data = {
        datasets: [{
            data: [10, 20, 30, 40, 50, 60,35],
            backgroundColor: [
                pieOne,
                pieTwo,
                pieThree,
                pieFour,
                pieFive,
                pieSix,
                pieSeven
                
            ],
        }],
        labels: [
            'Under 17',
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65 and over'
        ]
    };
    var myDoughnutChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Population Age',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieBOne = colorOne;
    let pieBTwo = colorTwo;
    let pieBThree = colorThree;
    let pieBFour = colorFour;
    let pieBFive = colorFive;
    let pieBSix = colorSix;
    let pieBSeven = colorSeven;
    let pieBEight = colorEight;
    let pieBNine = colorNine;
    let pieBTen = colorTen;
    if(food1.checked) {
        pieBOne = choice;
        ageRange = z-50;
    }
    if(food2.checked) {
        pieBTwo = choice;
        ageRange = z-150;
    }
    if(food3.checked) {
        pieBThree = choice;
        ageRange = z+50;
    }
    if(food4.checked) {
        pieBFour = choice;
        ageRange = z-100;
    }
    if(food5.checked) {
        pieBFive = choice;
        ageRange = z+100;
    }
    if(food6.checked) {
        pieBSix = choice;
        ageRange = z+150;
    }
    var ctx_2 = document.getElementById("Popular_foods").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [12340, 21236, 38980, 12340, 58720, 7923],
            backgroundColor: [
                pieBOne,
                pieBTwo,
                pieBThree,
                pieBFour,
                pieBFive,
                pieBSix

                
            ],
        }],
        labels: [
            'Sandwich',     
            'Soup',
            'Spaghetti',
            'Pizza',
            'Burger',
            'Carrots',
            
            
        ]
    };
    var myDoughnutChart_2 = new Chart(ctx_2, {
        type: 'bar',
        data: data_2,
        options: {
            title: {
                display: true,
                text: 'Preferred Foods',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieCOne = colorOne;
    let pieCTwo = colorTwo;
    let pieCThree = colorThree;
    let pieCFour = colorFour;
    let pieCFive = colorFive;
    let pieCSix = colorSix;
    let pieCSeven = colorSeven;
    let pieCEight = colorEight;
    let pieCNine = colorNine;
    let pieCTen = colorTen;
    let pieCEleven = colorEleven;
    
    if(major == 'Business') {
        pieCOne = choice;
        ageRange = z+200;
    }else if(major == 'Health Profession' || major == 'Nursing' || major == 'Doctor' || major == 'Nurse') {
        pieCTwo = choice;
        ageRange = z-50;
    }else if(major == 'Social Science' || major == 'History') {
        pieCThree = choice;
        ageRange = z+100;
    }else if(major == 'Engineering') {
        pieCFour = choice;
        ageRange = z-50;
    }else if(major == 'Bio Science' || major == 'Bio' || major == 'Bioscience') {
        pieCFive = choice;
        ageRange = z-50;
    }else if(major == 'Pyschology') {
        pieCSix = choice;
        ageRange = z+150;
    }else if(major == 'Communication') {
        pieCSeven = choice;
        ageRange = z-50;
    }else if(major == 'Visuals Arts' || major == 'Performancing Arts' || major == 'Arts') {
        pieCEight = choice;
        ageRange = z-200;
    }else if(major == 'Computer Science' || major == "Information Science") {
        pieCNine = choice;
        ageRange = z+50;
    }else if(major == 'Education') {
        pieCTen = choice;
        ageRange = z-150;
    } else {
        pieCEleven = choice;
        ageRange = z;
    }





    var ctx_2 = document.getElementById("College_year").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [
                289384, 
                141632, 
                37640, 
                117553, 
                120375,
                127066,
                98949,
                29022,
                55843,
                102219,
                342301
                
            ],
            backgroundColor: [
                pieCOne,
                pieCTwo,
                pieCThree,
                pieCFour,
                pieCFive,
                pieCSix,
                pieCSeven,
                pieCEight,
                pieCNine,
                pieCTen,
                pieCEleven
                
            ],
        }],
        labels: [
            'Business',
            'Health Profession',
            'Social Science/History',
            'Engineering',
            'Bio Science',
            'Pyschology',
            'Communication',
            'Visual/Performing Arts',
            'Computer Science',
            'Education',
            'Other'
        ]
    };
    var myDoughnutChart_2 = new Chart(ctx_2, {
        type: 'bar',
        data: data_2,
        options: {
            title: {
                display: true,
                text: 'Graduates Per Major Per Year',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieDOne = colorOne;
    let pieDTwo = colorTwo;
    let pieDThree = colorThree;
    let pieDFour = colorFour;
    let pieDFive = colorFive;
    let pieDSix = colorSix;

    if(team == 'Manchester United') {
        pieDOne = choice;
    }else if(team == 'New York Yankees') {
        pieDTwo = choice;
    }else if(team == 'Los Angeles Lakers') {
        pieDThree = choice;
    }else if(team == 'Real Madrid') {
        pieDFour = choice;
    }else if(team == 'Green Bay Packers') {
        pieDFive = choice;
    } else {
        pieDSix = choice;
    }
    var ctx_4 = document.getElementById("Favorite_team").getContext('2d');
    var data_4 = {
        datasets: [{
            data: [20.4, 13.3, 12.2, 9.9, 9.7, 34.5],
            backgroundColor: [
                pieDOne,
                pieDTwo,
                pieDThree,
                pieDFour,
                pieDFive,
                pieDSix
                
            ],
        }],
        labels: [
            'Manchester United',
            'New York Yankees',
            'Los Angeles Lakers',
            'Real Madrid',
            'Green Bay Packers',
            'Other'
        ]
    };
    var myDoughnutChart_4 = new Chart(ctx_4, {
        type: 'pie',
        data: data_4,
        options: {
            title: {
                display: true,
                text: 'Most Popular Sports Teams By Percentage',
                fontSize: 25
            },
            axisY:{
                valueFormatString:"0'%'"
              },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieEOne = colorSix;
    let pieETwo = colorThree;
    let pieEThree = colorFour;
    let pieEFour = colorOne;
    let pieEFive = colorFive;
    let pieESix = colorTwo;

    if(player == 'Lebron James') {
        pieEOne = choice;
    }else if(player == 'Cristiano Ronaldo') {
        pieETwo = choice;
    }else if(player == 'Lionel Messi') {
        pieEThree = choice;
    }else if(player == 'John Cena') {
        pieEFour = choice;
    }else if(player == 'Neymar') {
        pieEFive = choice;
    } else {
        pieESix = choice;
    }
    var ctx_5 = document.getElementById("Favorite_athlete").getContext('2d');
    var data_5 = {
        datasets: [{
            data: [15.9, 8.2, 6.4, 12.2, 2.2, 55.1],
            backgroundColor: [
                pieEOne,
                pieETwo,
                pieEThree,
                pieEFour,
                pieEFive,
                pieESix
                
            ],
        }],
        labels: [
            'Lebron James',
            'Cristiano Ronaldo',
            'Lionel Messi',
            'John Cena',
            'Neymar',
            'Other'
        ]
    };
    var myDoughnutChart_5 = new Chart(ctx_5, {
        type: 'pie',
        data: data_5,
        options: {
            title: {
                display: true,
                text: 'Most Popular Athletes By Percentage',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieFOne = colorOne;
    let pieFTwo = colorTwo;
    let pieFThree = colorThree;
    let pieFFour = colorFour;
    let pieFFive = colorFive;
    let pieFSix = colorSix;

    if(gender == 'female' || gender == 'Female') {
        pieFOne = choice;
    } else if(gender == 'male' || gender == 'Male') {
        pieFTwo = choice;
    } else {
        pieFThree = choice;
    }

    var ctx_6 = document.getElementById("Common_genders").getContext('2d');
    var data_6 = {
        datasets: [{
            data: [49.2, 43.6, 5.6],
            backgroundColor: [
                pieFOne,
                pieFTwo,
                pieFThree,

                
            ],
        }],
        labels: [
            'Female',
            'Male',
            'Other'

        ]
    };
    var myDoughnutChart_6 = new Chart(ctx_6, {
        type: 'pie',
        data: data_6,
        options: {
            title: {
                display: true,
                text: 'Percentage Of The US That Identifies As A Gender',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieGOne = colorOne;
    let pieGTwo = colorTwo;
    let pieGThree = colorThree;
    let pieGFour = colorFour;
    let pieGFive = colorFive;
    let pieGSix = colorSix;
    let pieGSeven = colorSeven;
    let pieGEight = colorEight;
    let pieGNine = colorNine;
    let pieGTen = colorTen;

    if(people == 'Ugur Sahin') {
        pieGOne = choice;
    }else if(people == 'Kamala Harris') {
        pieGTwo = choice;
    }else if(people == 'Joe Biden') {
        pieGThree = choice;
    }else if(people == 'Anthony Fauci') {
        pieGFour = choice;
    }else if(people == 'Emmanuelle Charpentier') {
        pieGFive = choice;
    }else if(people == 'Jacinda Ardern') {
        pieGSix = choice;
    }else if(people == 'Meghan Markle') {
        pieGSeven = choice;
    }else if(people == 'Sanna Marin') {
        pieGEight = choice;
    }else if(people == 'Michelle Obama') {
        pieGNine = choice;
    }else {
        pieGTen = choice;
    }

    var ctx_7 = document.getElementById("inspirational_people").getContext('2d');
    var data_7 = {
        datasets: [{
            data: [42340, 71236, 68980, 102340, 58720, 31123, 78403, 98123, 29394, 42382],
            backgroundColor: [
                pieGOne,
                pieGTwo,
                pieGThree,
                pieGFour,
                pieGFive,
                pieGSix,
                pieGSeven,
                pieGEight,
                pieGNine,
                pieGTen
                
            ],
        }],
        labels: [
            'Ugur Sahin',
            'Kamala Harris',
            'Joe Biden',
            'Anthony Fauci',
            'Emmanuelle Charpentier',
            'Jacinda Ardern',
            'Meghan Markle',
            'Sanna Marin',
            'Michelle Obama',
            'Other'
        ]
    };
    var myDoughnutChart_7 = new Chart(ctx_7, {
        type: 'pie',
        data: data_7,
        options: {
            title: {
                display: true,
                text: 'Most Inspirational People',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieHOne = colorOne;
    let pieHTwo = colorTwo;
    let pieHThree = colorThree;
    let pieHFour = colorFour;
    let pieHFive = colorFive;
    let pieHSix = colorSix;

     if(language1.checked) {
        pieHOne = choice;
    }
    if(language2.checked) {
        pieHTwo = choice;
    }
    if(language3.checked) {
        pieHThree = choice;
    }
    if(language4.checked) {
        pieHFour = choice;
    }

    var ctx_8 = document.getElementById("language_count").getContext('2d');
    var data_8 = {
        datasets: [{
            data: [123409820, 20120136, 31289080, 12041343],
            backgroundColor: [
                pieHOne,
                pieHTwo,
                pieHThree,
                pieHFour,
                pieHFive,
                pieHSix
                
            ],
        }],
        labels: [
            '1',
            '2',
            '3-4',
            '5+',
        ]
    };
    var myDoughnutChart_8 = new Chart(ctx_8, {
        type: 'pie',
        data: data_8,
        options: {
            title: {
                display: true,
                text: 'Number of Languages Spoken/Read',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
    let pieIOne = colorOne;
    let pieITwo = colorTwo;
    let pieIThree = colorThree;
    let pieIFour = colorFour;
    let pieIFive = colorFive;
    let pieISix = colorSix;

    var locationState;
    var locationCity;
    if(locationCity == 'Mt Vernon' || 'Mt, Vernon') {
        pieIOne = choice;
    } else if(locationCity == 'Bellingham') {
        pieITwo = choice;
    } else if(locationState == 'Washington' && locationCity != 'Mt Vernon' && locationCity != 'Bellingham') {
        pieIThree = choice;
    } else if(locationState == 'Oregon') {
        pieIFour = choice;
    } else {
        pieIFive = choice;
    }
    var ctx_9 = document.getElementById("Website_location").getContext('2d');
    var data_9 = {
        datasets: [{
            data: [10.2, 45.5, 20.1, 10.5, 13.7],
            backgroundColor: [
                pieIOne,
                pieITwo,
                pieIThree,
                pieIFour,
                pieIFive,
                pieISix
                
            ],
        }],
        labels: [
            'Mt Vernon',
            'Bellingham',
            'Washington',
            'Oregon',
            'Other'
        ]
    };
    var myDoughnutChart_9 = new Chart(ctx_9, {
        type: 'pie',
        data: data_9,
        options: {
            title: {
                display: true,
                text: 'Website Traffic By Percentage',
                fontSize: 25
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
}
function postClick(i) {
    console.log(i)
}

function useSurvey() {
    document.getElementById("submit_info_button").value = "Update Results"

    // extract info from survey
    var name = document.getElementById("nameBox").value
    gender = document.getElementById("genderBox").value
    age = document.getElementById("ageBox").value

    locationState = document.getElementById("locationStateBox").value
    locationCity = document.getElementById("locationCityBox").value

    major = document.getElementById("majorBox").value

    team = document.getElementById("teamBox").value
    player = document.getElementById("playerBox").value
    people = document.getElementById("peopleBox").value

    var pet1 = document.getElementById("pet1")
    var pet2 = document.getElementById("pet2")
    var pet3 = document.getElementById("pet3")
    var selectedPet = ""
    if(pet1.checked) selectedPet = pet1.value
    if(pet2.checked) selectedPet = pet2.value
    if(pet3.checked) selectedPet = pet3.value

    var food1 = document.getElementById("food1")
    var food2 = document.getElementById("food2")
    var food3 = document.getElementById("food3")
    var food4 = document.getElementById("food4")
    var food5 = document.getElementById("food5")
    var food6 = document.getElementById("food6")
    var selectedFood = ""
    if(food1.checked) selectedFood = food1.value
    if(food2.checked) selectedFood = food2.value
    if(food3.checked) selectedFood = food3.value
    if(food4.checked) selectedFood = food4.value
    if(food5.checked) selectedFood = food5.value
    if(food6.checked) selectedFood = food6.value

    var language1 = document.getElementById("language1")
    var language2 = document.getElementById("language2")
    var language3 = document.getElementById("language3")
    var language4 = document.getElementById("language3")
    var selectedLanguage = ""
    if(language1.checked) selectedLanguage = language1.value
    if(language2.checked) selectedLanguage = language2.value
    if(language3.checked) selectedLanguage = language3.value
    if(language4.checked) selectedLanguage = language4.value 

    // print usable info
    if(name != "")
        console.log(name)
    if(age != "")
        console.log(age)
    if(gender != "")
        console.log(gender)
    if(locationState != "")
        console.log(locationState)
    if(locationCity != "")
        console.log(locationCity)
    if(major != "")
        console.log(major)
    if(selectedPet != "")
        console.log(selectedPet)
    if(selectedFood != "")
        console.log(selectedFood)

    // use info for Facebook API?
    // TODO: use Facebook api?

    // show results on graphs 

    populateGraphs()

}
