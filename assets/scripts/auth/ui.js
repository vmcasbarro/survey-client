'use strict'

const store = require('../store.js')
const surveyEvents = require('../survey/events.js')

const signUpSuccess = () => {
  clearForms()
  $('#display-sign-up-message')
    .html('Sign up successful')
    .css('color', 'green')
}

const signUpFailure = () => {
  clearForms()
  $('#display-sign-up-message')
    .html('Something went wrong, please try again')
    .css('color', 'red')
}

const signInSuccess = (response) => {
  store.user = response.user
  clearForms()
  $('.sign-up-log-in').addClass('hidden')

  $('.navbar').removeClass('hidden')
  $('.home-menu').removeClass('hidden')
  $('.change-password-section').removeClass('hidden')
  $('#create-survey-section').removeClass('hidden')
  $('.see-all-surveys-section').removeClass('hidden')
  $('.see-my-surveys-section').removeClass('hidden')
  $('#display-sign-up-message').html('')

  surveyEvents.onShowAllSurveys()
}

const signInFailure = () => {
  clearForms()
  $('#display-log-in-message')
    .html('Sign in failed, please try again')
    .css('color', 'red')
}

const passwordChangeSuccess = () => {
  // need to add validation here
  // $('.div-for-password-message').show()
  // $('.div-for-password-message').fadeOut(4000)
  clearForms()
}

const passwordChangeFailure = () => {
  clearForms()
  // need to add validation here
}

const signOutSuccess = () => {
  clearForms()
  $('.sign-up-log-in').removeClass('hidden')

  // either hide these using a wrapper *or* come up with a better way to display log-in screen
  $('.navbar').addClass('hidden')
  $('.home-menu').addClass('hidden')
  $('.change-password-section').addClass('hidden')
  $('#create-survey-section').addClass('hidden')
  $('.see-all-surveys-section').addClass('hidden')
  $('.see-my-surveys-section').addClass('hidden')
}

const signOutFailure = () => {
  clearForms()
  $('#display-survey-message').html('Something went wrong, try again')
  $('#display-survey-message').css('color', 'red')
}

const clearForms = function () {
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#new-survey-form').trigger('reset')
  $('#display-sign-up-message').empty()
  $('#display-log-in-message').empty()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure,
  clearForms
}
