'use strict'

import Chart from 'chart.js'

const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')
const showMySurveysTemplate = require('../templates/my-surveys.handlebars')
const authUi = require('../auth/ui.js')

const showAllSurveysSuccess = (data) => {
  const allSurveys = data
  const userId = store.user._id

  const allMySurveys = allSurveys.surveys.filter(function (survey) {
    return survey.owner === userId
  })

  store.mySurveys = allMySurveys

  const showSurveysHtml = showSurveysTemplate({
    surveys: data.surveys
  })

  $('#surveys-matrix').html(showSurveysHtml)
}

// const showAllSurveysSuccessButStay = (data) => {
//   const allSurveys = data
//   const userId = store.user._id
//
//   const allMySurveys = allSurveys.surveys.filter(function (survey) {
//     return survey.owner === userId
//   })
//
//   store.mySurveys = allMySurveys
//
//   $('.reset').trigger('reset')
//   const showSurveysHtml = showSurveysTemplate({
//     surveys: data.surveys
//   })
//
//   $('.my-surveys-component').addClass('hidden')
//   $('.survey-component').removeClass('hidden')
//   $('.survey-component').html(showSurveysHtml)
//
//   // $('#display-survey-message').html('All surveys shown')
//   $('#display-survey-message').css('black')
// }


// const showMySurveys = () => {
//   const showMySurveysHtml = showMySurveysTemplate({
//     surveys: store.mySurveys
//   })
//   $('.my-surveys-component').removeClass('hidden')
//   $('.survey-component').addClass('hidden')
//   $('.my-surveys-component').html(showMySurveysHtml)
//   //$('#display-survey-message').html('User created surveys shown')
//   $('#display-survey-message').css('black')
//   $('html, body').animate({
//     scrollTop: ($('#see-my-surveys-section').offset().top)
//   }, 500)
// }

const showAllSurveysFailure = () => {
  $('#create-survey-form').trigger('reset')
  $('#notification')
    .fadeIn(1)
    .html('something went wrong. check your internet connection.')
    .css('color', 'red')
    .fadeOut(4000)
}

const newSurveySuccess = (data) => {
  $('#create-survey-form').trigger('reset')
  $('#notification')
    .fadeIn(1)
    .html('question added!')
    .css('color', 'green')
    .fadeOut(4000)
}

const newSurveyFailure = () => {
  $('#create-survey-form').trigger('reset')
  $('#notification')
    .fadeIn(1)
    .html("question wasn't added. Check your internet connection.")
    .css('color', 'red')
    .fadeOut(4000)
}

const updateSurveySuccess = () => {
  $(`[data-id=${store.surveyId}] > .survey-stats`).removeClass('hidden')
  $(`[data-id=${store.surveyId}] > .list-group`).addClass('hidden')
}

const updateSurveyFailure = () => {
  $('#create-survey-form').trigger('reset')
  $('#notification')
    .fadeIn(1)
    .html('Something went wrong. Check your internet connection.')
    .css('color', 'red')
    .fadeOut(4000)
}

// const deleteSurveySuccess = () => {
//   $('.reset').trigger('reset')
//   // $('#display-survey-message').html('Survey removed')
//   // $('#display-survey-message').css('green')
// }
//
// const deleteSurveyFailure = () => {
//   $('.reset').trigger('reset')
// }

const showSurveyStatsSuccess = () => {
  const responses = store.updatedSurvey.responses
  const yesResponses = responses.filter(function (response) {
    return response.answer === 'yes'
  })
  const noResponses = responses.filter(function (response) {
    return response.answer === 'no'
  })
  // $(`[data-id=${store.surveyId}] > .survey-stats`).html(
  //   `<p>yes: ${yesResponses.length}</p>
  //   <p>no: ${noResponses.length}</p>`
  // )

  console.log($(`[data-id=${store.surveyId}]`).find('.chart-container'))

  var ctx = $(`[data-id=${store.surveyId}]`).find("canvas")
  console.log(ctx)
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['yes', 'no'],
        datasets: [{
            label: 'responses',
            data: [yesResponses.length, noResponses.length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

const showSurveyStatsFailure = () => {
  $('#create-survey-form').trigger('reset')
  $('#notification')
    .fadeIn(1)
    .html('Something went wrong. Check your internet connection.')
    .css('color', 'red')
    .fadeOut(4000)
}

module.exports = {

  showAllSurveysSuccess,
  // showMySurveys,
  showAllSurveysFailure,
  newSurveySuccess,
  newSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  showSurveyStatsSuccess,
  showSurveyStatsFailure
  // deleteSurveySuccess,
  // deleteSurveyFailure,
  // showAllSurveysSuccessButStay
}
