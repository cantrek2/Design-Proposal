$(function () {
    const colorOne= '#3c8dbc';
    const colorTwo= '#f56954';
    const colorThree= '#f39c12';
    const colorFour= 'blue';
    const colorFive= 'yellow';
    const colorSix= 'pink';
    const choice= 'green';
    var ctx = document.getElementById("Age_range").getContext('2d');
    var data = {
        datasets: [{
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#f39c12',
                choice
                
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

    var ctx_2 = document.getElementById("Currently_At").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#f39c12',
            ],
        }],
        labels: [
            'Request',
            'Pink',
            'Problem'
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
    var ctx_2 = document.getElementById("Major").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#f39c12',
            ],
        }],
        labels: [
            'Request',
            'Dog',
            'Problem'
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
