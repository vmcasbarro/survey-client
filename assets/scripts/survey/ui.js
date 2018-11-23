'use strict'

import Chart from 'chart.js'

const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

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
  $('#survey-form-gateway').removeClass('hidden')
  $('#notification')
    .fadeIn(1)
    .html('question added!')
    .css('color', 'green')
    .fadeOut(4000)
}

const newSurveyFailure = () => {
  $('#create-survey-form').trigger('reset')
  $('#survey-form-gateway').removeClass('hidden')
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

const showCreateSurveyForm = () => {
  $('#create-survey-form-card').removeClass('hidden')
  $('#survey-form-gateway').addClass('hidden')
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
  showSurveyStatsFailure,
  showCreateSurveyForm
}
