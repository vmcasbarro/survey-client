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

}

const showOneSurveyFailure = () => {

}

const showAllSurveysSuccess = (response) => {

}

const showAllSurveysFailure = () => {

}

const newSurveySuccess = (data) => {
  store.log = data.log
}

const newSurveyFailure = () => {

}

const updateSurveySuccess = (data) => {
  store.log = data.log
}

const updateSurveyFailure = () => {

}

const destroySurveySuccess = () => {

}

const destroySurveyFailure = () => {

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
