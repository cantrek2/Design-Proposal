$(function () {
    const colorOne= '#3c8dbc';
    const colorTwo= '#f56954';
    const colorThree= '#f39c12';
    const colorFour= 'blue';
    const colorFive= 'yellow';
    const colorSix= 'pink';
    const choice= 'green';

    const selection = 'zero';
    let pieOne = colorOne;
    let pieTwo = colorTwo;
    let pieThree = colorThree;
    let pieFour = colorFour;
    let pieFive = colorFive;
    let pieSix = colorSix;

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
    var ctx = document.getElementById("Age_range").getContext('2d');
    var data = {
        datasets: [{
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: [
                pieOne,
                pieTwo,
                pieThree,
                pieFour,
                pieFive,
                pieSix
                
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
            responsive: false,
            maintainAspectRatio: false,
            legend: {
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
            responsive: false,
            maintainAspectRatio: false,
            legend: {
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
            data: [105, 250, 370, 140, 850],
            backgroundColor: [
                pieCOne,
                pieCTwo,
                pieCThree,
                pieCFour,
                pieCFive
                
            ],
        }],
        labels: [
            'Freshman',
            'Sophmore',
            'Junior',
            'Senior',
            'Senior+'
        ]
    };
    var myDoughnutChart_2 = new Chart(ctx_2, {
        type: 'pie',
        data: data_2,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
});
