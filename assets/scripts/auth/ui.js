'use strict'

const store = require('../store.js')
const surveyEvents = require('../survey/events.js')

const signUpSuccess = () => {
  clearForms()
  $('#notification')
    .html('Sign up successful')
    .css('color', 'green')
    .fadeOut(4000)
}

const signUpFailure = () => {
  clearForms()
  $('#notification')
    .html('Sign up error')
    .css('color', 'red')
    .fadeOut(4000)
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log(store.user)
  clearForms()
  $('.sign-up-and-in').addClass('hidden')
  $('.change-pwd-and-log-out').removeClass('hidden')
  $('#notification')
    .html('Sign in successful')
    .css('color', 'green')
    .fadeOut(4000)
  $('#survey-form-row').removeClass('hidden')
  $('#survey-form-placeholder').addClass('hidden')
  $('#survey-form-gateway').removeClass('hidden')
  surveyEvents.onShowAllSurveys()
}

const signInFailure = () => {
  clearForms()
  $('#notification')
    .html('Sign in error')
    .css('color', 'red')
    .fadeOut(4000)
}

const passwordChangeSuccess = () => {
  clearForms()
  $('#notification')
    .html('password changed')
    .css('color', 'green')
    .fadeOut(4000)
}

const passwordChangeFailure = () => {
  clearForms()
  $('#notification')
    .html('password change error')
    .css('color', 'red')
    .fadeOut(4000)
}

const signOutSuccess = () => {
  clearForms()
  $('.sign-up-and-in').removeClass('hidden')
  $('.change-pwd-and-log-out').addClass('hidden')
  $('#survey-form-row').addClass('hidden')
  $('#survey-form-placeholder').removeClass('hidden')
  $('#survey-form-gateway').addClass('hidden')
  $('#create-survey-form-card').addClass('hidden')
}

const signOutFailure = () => {
  clearForms()
  $('#display-survey-message').html('Something went wrong, try again')
  $('#display-survey-message').css('color', 'red')
}

const clearForms = function () {
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-survey-form').trigger('reset')
  $('#notification').html('')
  $('#notification').fadeIn(1)
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
