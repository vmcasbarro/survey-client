'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')
const surveyUI = require('./survey/ui.js')
const demo = require('./demo/demo.js')

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
  $('#create-form-shower').on('click', surveyUI.showCreateSurveyForm)


  // Survey Events within Handlebars
  $('#surveys-matrix').on('click', '.answer-one', surveyEvents.onUpdateSurvey)
  $('#surveys-matrix').on('click', '.answer-two', surveyEvents.onUpdateSurvey)
  $('#surveys-matrix').on('submit', '#create-survey-form', surveyEvents.onNewSurvey)

  // demo survey & chart
  demo.makeDemo()
  $('#demo-surveys-matrix').on('click', '#button-a', () => {
    demo.demoData[0] += 1
    demo.makeDemo()
  })
  $('#demo-surveys-matrix').on('click', '#button-b', () => {
    demo.demoData[1] += 1
    demo.makeDemo()
  })
  $('#demo-surveys-matrix').on('click', '#button-c', () => {
    demo.demoData[2] += 1
    demo.makeDemo()
  })
  $('#demo-surveys-matrix').on('click', '#button-d', () => {
    demo.demoData[3] += 1
    demo.makeDemo()
  })
})
