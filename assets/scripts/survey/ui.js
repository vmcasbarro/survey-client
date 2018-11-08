'use strict'

const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

window.onscroll = function () {
  myFunction()
};
//////////////// FOR STICKY NAVIGATION PURPOSES ////////////////////
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

////////////////////////////////////////////////////////////////////

const showOneSurveySuccess = (response) => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Survey displayed')
  $('#display-survey-message').css('green')
}

const showOneSurveyFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

const showAllSurveysSuccess = (data) => {
  console.log('all the surveys in the database: \n', data)
  const allSurveys = data
  const userId = store.user._id

  const allMySurveys = allSurveys.surveys.filter(function (survey) {
    return survey.owner === userId
  })

  store.mySurveys = allMySurveys

  console.log('my surveys: ', allMySurveys)

  console.log('user _id is: ', userId)
  $('.reset').trigger('reset')
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.survey-component').html(showSurveysHtml)
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

const newSurveySuccess = (data) => {
  store.log = data.lo
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Survey created')
  $('#display-survey-message').css('green')
}

const newSurveyFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

const updateSurveySuccess = (data) => {
  // store.survey = data.survey
  console.log(data)
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Survey updated')
  $('#display-survey-message').css('green')
}

const updateSurveyFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

const deleteSurveySuccess = () => {
  $('.reset').trigger('reset')
  console.log('successfully deleted survey!')
  // $('#display-survey-message').html('Survey removed')
  // $('#display-survey-message').css('green')
}

const deleteSurveyFailure = () => {
  $('.reset').trigger('reset')
  console.log('did not delete the survey!')
  // $('#display-survey-message').html('Something went wrong, please try again')
  // $('#display-survey-message').css('red')
}

// const successAlert = () => {
//   $('#content').removeClass('hidden')
//   setTimeout(() => {
//     $('#content').addClass('hidden')
//   }, 3000)
// }
//
// const successFail = () => {
//   $('#content-2').removeClass('hidden')
//   setTimeout(() => {
//     $('#content-2').addClass('hidden')
//   }, 3000)
// }

module.exports = {
  showOneSurveySuccess,
  showOneSurveyFailure,
  showAllSurveysSuccess,
  showAllSurveysFailure,
  newSurveySuccess,
  newSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyFailure
}
