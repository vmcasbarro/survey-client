'use strict'

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

const updateSurveySuccess = (data) => {
  console.log('data', data)
  $(`[data-id=${data}] > .survey-stats`).removeClass('hidden')
  $(`[data-id=${data}] > .list-group`).addClass('hidden')
  // $('.survey-response').addClass('hidden')
  // $('.survey-stats').removeClass('hidden')
}

const updateSurveyFailure = () => {
  // $('#display-survey-message').html('Something went wrong, please try again')
  // $('#display-survey-message').css('red')
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



module.exports = {

  showAllSurveysSuccess,
  // showMySurveys,
  showAllSurveysFailure,
  newSurveySuccess,
  newSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure
  // deleteSurveySuccess,
  // deleteSurveyFailure,
  // showAllSurveysSuccessButStay
}
