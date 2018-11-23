'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')
const surveyUI = require('./survey/ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

// Auth events
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Survey events
  // $('#create-survey-form').on('submit', surveyEvents.onNewSurvey)

  $('#update-survey-form').on('submit', surveyEvents.onUpdateSurvey)
  $('#delete-survey-button').on('submit', surveyEvents.onDestroySurvey)
  $('#show-survey-button').on('submit', surveyEvents.onShowOneSurvey)
  $('#show-all-surveys').on('click', surveyEvents.onShowAllSurveys)
  $('#show-create-form').on('click', surveyUI.showCreateSurveyForm)


  // My survey events
  $('#show-my-surveys').on('click', surveyEvents.onShowMySurveys)
  $('#see-my-surveys-section').on('click', '#delete-button', surveyEvents.onConfirmDeleteSurvey)

  // Survey Events within Handlebars
  $('#surveys-matrix').on('click', '.answer-one', surveyEvents.onUpdateSurvey)
  $('#surveys-matrix').on('click', '.answer-two', surveyEvents.onUpdateSurvey)
  $('#surveys-matrix').on('submit', '#create-survey-form', surveyEvents.onNewSurvey)
})
