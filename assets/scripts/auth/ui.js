'use strict'

const store = require('../store.js')
const surveyEvents = require('../survey/events.js')

const signUpSuccess = () => {
  $('#display-sign-up-message').html('Sign up successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')

  clearForms()
}

const signUpFailure = () => {
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')

  clearForms()
}

const signInSuccess = (response) => {
  console.log(response.user)
  store.user = response.user
  // $('#display-log-in-message').html('Sign in successful')
  // $('#display-log-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('.sign-up-log-in').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.navbar').removeClass('hidden')
  $('.home-menu').removeClass('hidden')
  $('.change-password-section').removeClass('hidden')
  $('.create-survey-div').removeClass('hidden')
  $('.see-all-surveys-section').removeClass('hidden')
  $('.see-my-surveys-section').removeClass('hidden')
  clearForms()
  surveyEvents.onShowAllSurveys()
  // $('#change-password-message').html('')
}

const signInFailure = () => {
  $('#display-log-in-message').html('Sign in failed, please try again')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  clearForms()
}

const passwordChangeSuccess = () => {
  $('#display-survey-message').html('Change Password successful')
  $('#display-survey-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  // $('#change-password-form').addClass('hidden')
  clearForms()
}

const passwordChangeFailure = () => {
  $('#display-survey-message').html('Change Password failed, try again')
  $('#display-survey-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  clearForms()
}

const signOutSuccess = () => {
  // $('#display-log-in-message').html('Sign Out successful')
  // $('#display-log-in-message').css('color', 'green')
  $('.sign-up-log-in').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.navbar').addClass('hidden')
  $('.home-menu').addClass('hidden')
  $('.change-password-section').addClass('hidden')
  $('.create-survey-div').addClass('hidden')
  $('.see-all-surveys-section').addClass('hidden')
  $('.see-my-surveys-section').addClass('hidden')
  $('#display-log-in-message').html('')
  // $('#change-password-message').html('')
  $('#navbar-at-sign-up').show(); // ALFREDO ADDED THIS. KEEP

  $('#display-survey-message').html('Something went wrong, try again')
  $('#display-survey-message').css('color', 'red')
  clearForms()
}

const clearForms = function () {
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#new-survey-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure
}
