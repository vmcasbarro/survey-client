'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.newSurvey(surveyData)
    .then(ui.newSurveySuccess)
    .catch(ui.newSurveyFailure)
}

const onShowAllSurveys = (event) => {
  event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSurveysSuccess)
    .catch(ui.showAllSurveysFailure)
}

const onShowOneSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.showOneSurvey(surveyData)
    .then(ui.showOneSurveySuccess)
    .catch(ui.showOneSurveyFailure)
}

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.updateSurvey(surveyData)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
}

const onDestroySurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.destroySurvey(surveyData)
    .then(ui.destroySurveySuccess)
    .catch(ui.destroySurveyFailure)
}

module.exports = {
  onNewSurvey,
  onShowAllSurveys,
  onShowOneSurvey,
  onUpdateSurvey,
  onDestroySurvey
}
