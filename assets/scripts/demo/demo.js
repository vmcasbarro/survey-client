import Chart from 'chart.js'


let demoData = [1, 4, 5, 3]

const makeDemo = function () {


  var ctx = $('#demo-chart')
  let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['George Washington', 'Theodore Roosevelt', 'James Monroe', 'John Quincy Adams'],
        datasets: [{
            label: 'responses',
            data: demoData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                boxWidth: 10
            }
        }
  }
  })
}

  module.exports = {
    demoData,
    makeDemo
  }
