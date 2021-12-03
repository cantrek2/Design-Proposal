function populateGraphs () {
    const colorOne= '#3c8dbc';
    const colorTwo= '#f56954';
    const colorThree= '#f39c12';
    const colorFour= 'blue';
    const colorFive= 'yellow';
    const colorSix= 'pink';
    const colorSeven= 'purple';
    const choice= 'green';

    const selection = 'zero';
    let pieOne = colorOne;
    let pieTwo = colorTwo;
    let pieThree = colorThree;
    let pieFour = colorFour;
    let pieFive = colorFive;
    let pieSix = colorSix;
    let pieSeven = colorSeven;

    if(pet1.checked) {
        pieOne = choice;
    }
    if(pet3.checked) {
        pieTwo = choice;
    }
    if(selection == '25-34') {
        pieThree = choice;
    }
    if(selection == '35-44') {
        pieFour = choice;
    }
    if(pet2.checked) {
        pieFive = choice;
    }
    if(selection == '55-64') {
        pieSix = choice;
    }
    if(selection == '65+') {
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

    if(pet2.checked) {
        pieBFive = choice;
    }

    var ctx_2 = document.getElementById("Currently_At").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [12340, 21236, 38980, 12340, 58720, 123],
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
            'Icecream',
            'Pizza',
            'Burger',
            'Carrots',
            'Lasgna',
            'Pickle'
        ]
    };
    var myDoughnutChart_2 = new Chart(ctx_2, {
        type: 'pie',
        data: data_2,
        options: {
            title: {
                display: true,
                text: 'Most Popular Majors',
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
    if(pet2.checked) {
        pieCOne = choice;
    }
    if(pet3.checked) {
        pieCTwo = choice;
    }
    if(pet1.checked) {
        pieCFour = choice;
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
                102219

            ],
            backgroundColor: [
                pieCOne,
                pieCTwo,
                pieCThree,
                pieCFour,
                pieCFive
                
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
        type: 'pie',
        data: data_2,
        options: {
            title: {
                display: true,
                text: 'Most Popular Majors',
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

    if(pet2.checked) {
        pieBFive = choice;
    }

    var ctx_4 = document.getElementById("Favorite_team").getContext('2d');
    var data_4 = {
        datasets: [{
            data: [12340, 21236, 38980, 12340, 58720, 123],
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
            'Icecream',
            'Pizza',
            'Burger',
            'Carrots',
            'Lasgna',
            'Pickle'
        ]
    };
    var myDoughnutChart_4 = new Chart(ctx_4, {
        type: 'pie',
        data: data_2,
        options: {
            title: {
                display: true,
                text: 'Most Popular Sports Teams',
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
    var age = document.getElementById("genderBox").value
    var gender = document.getElementById("ageBox").value

    var locationState = document.getElementById("locationStateBox").value
    var locationCity = document.getElementById("locationCityBox").value

    var major = document.getElementById("majorBox").value

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
    var selectedFood = ""
    if(food1.checked) selectedFood = food1.value
    if(food2.checked) selectedFood = food2.value
    if(food3.checked) selectedFood = food3.value

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
