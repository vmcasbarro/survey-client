'use strict'

const store = require('../store.js')
const surveyEvents = require('../survey/events.js')

$(() => {
  $('.div-for-password-message').hide() // Alfredo says: this hides the success animation (by default)
  $('.div-for-create-survey-message').hide() // Alfredo Says: this hides the success animation (by default)
  $('.div-for-password-message-fail').hide()
  $('#create-survey-section').hide()
})

const signUpSuccess = () => {
  clearForms()
  $('#display-sign-up-message').html('Sign up successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = () => {
  clearForms()
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = (response) => {
  console.log(response.user)
  store.user = response.user
  clearForms()
  // $('#display-log-in-message').html('Sign in successful')
  // $('#display-log-in-message').css('color', 'green')
  $('#create-survey-section').show()
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
  surveyEvents.onShowAllSurveys()
  // $('#change-password-message').html('')
}

const signInFailure = () => {
  clearForms()
  $('#display-log-in-message').html('Sign in failed, please try again')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const passwordChangeSuccess = () => {
  $('.div-for-password-message').show()
  $('.div-for-password-message').fadeOut(4000)
  //$('#display-survey-message').html('Change Password successful')
  //$('#display-survey-message').css('color', 'green')
  // $('#change-password-form').trigger('reset')
  // $('#change-password-form').addClass('hidden') // Alfredo says: this line was previously commented out. I commented out the others.
  clearForms()
}

const passwordChangeFailure = () => {
  clearForms()
  $('#change-password-form').trigger('reset')
  $('.div-for-password-message-fail').show()
  // clearForms()
  // $('#display-survey-message').html('Change Password failed, try again')
  // $('#display-survey-message').css('color', 'red')
  $('.div-for-password-message-fail').show()
  $('.div-for-password-message-fail').fadeOut(4000)
}

const signOutSuccess = () => {
  clearForms()
  // $('#display-log-in-message').html('Sign Out successful')
  // $('#display-log-in-message').css('color', 'green')
  $('.sign-up-log-in').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.navbar').addClass('hidden')
  $('.home-menu').addClass('hidden')
  $('.change-password-section').addClass('hidden')
  $('#create-survey-section').addClass('hidden')
  $('.see-all-surveys-section').addClass('hidden')
  $('.see-my-surveys-section').addClass('hidden')
  $('#display-log-in-message').html('')
  // $('#change-password-message').html('')
  $('#navbar-at-sign-up').show(); // ALFREDO ADDED THIS. KEEP
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
