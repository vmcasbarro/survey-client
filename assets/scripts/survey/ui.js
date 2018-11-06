'use strict'

const store = require('../store.js')


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
}

const showOneSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const showAllSurveysSuccess = (response) => {
  $('.reset').trigger('reset')
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
}

const newSurveySuccess = (data) => {
  store.log = data.lo
  $('.reset').trigger('reset')
}

const newSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const updateSurveySuccess = (data) => {
  store.log = data.log
  $('.reset').trigger('reset')
}

const updateSurveyFailure = () => {
  $('.reset').trigger('reset')
}

const destroySurveySuccess = () => {
  $('.reset').trigger('reset')
}

const destroySurveyFailure = () => {
  $('.reset').trigger('reset')
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
  destroySurveySuccess,
  destroySurveyFailure
}
