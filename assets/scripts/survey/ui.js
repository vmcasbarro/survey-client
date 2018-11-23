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

  // get only answers that have values
  const labels = store.updatedSurvey.answers.filter(function (answer) {
    return answer !== ''
  })

  const aResponses = responses.filter(function (response) {
    return response.answer === labels[0]
  })
  const bResponses = responses.filter(function (response) {
    return response.answer === labels[1]
  })
  const cResponses = responses.filter(function (response) {
    return response.answer === labels[2]
  })
  const dResponses = responses.filter(function (response) {
    return response.answer === labels[3]
  })

  var ctx = $(`[data-id=${store.surveyId}]`).find("canvas")
  let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: 'responses',
            data: [aResponses.length, bResponses.length, cResponses.length, dResponses.length],
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
