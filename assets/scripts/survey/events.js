'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onNewSurvey = (event) => {
  event.preventDefault()
  const surveyData = getFormFields(event.target)
  api.newSurvey(surveyData)
    .then(ui.newSurveySuccess)
    .then(onShowAllSurveys)
    .catch(ui.newSurveyFailure)
}

const onShowAllSurveys = (event) => {
  // event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSurveysSuccess)
    .catch(ui.showAllSurveysFailure)
}

const onShowAllSurveysButStay = (event) => {
  // event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSurveysSuccessButStay)
    .catch(ui.showAllSurveysFailure)
}

// const onShowSurvey = () => {
//   api.showSurvey(store.surveyId)
//     .then((response) => {
//       console.log(response.survey)
//       store.updatedSurvey = response.survey
//       console.log(store.updatedSurvey)
//     }

      // .then(ui.showOneSurveySuccess)
      // .catch(ui.showOneSurveyFailure)

const onShowSurvey = () => {
  api.showSurvey(store.surveyId)
    .then((response) => {
      console.log(response.survey)
      store.updatedSurvey = response.survey
      console.log(store.updatedSurvey)
    })
    .then(ui.showSurveyStatsSuccess)
    .catch(ui.showSurveyStatsFailure)
}

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const parents = $(event.target).parents('div')
  const surveyId = parents[0].dataset.id
  store.surveyId = surveyId

  const surveyData = {
    survey: {
      responses: [{answer: event.target.value}]
    }
  }
  api.updateSurvey(surveyData, surveyId)
    // get the survey that was just updated
    .then(onShowSurvey)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const surveyId = event.target.dataset.id
  api.deleteSurvey(surveyId)
    .then(ui.deleteSurveySuccess)
    .then(onShowAllSurveys)
    .catch(ui.deleteSurveyFailure)
}

const onConfirmDeleteSurvey = (event) => {
  event.preventDefault()
  const deleteButton = event.target
  $(deleteButton).html('By clicking again, you will delete this survey.')
  $(deleteButton).on('click', onDeleteSurvey)
}

const onShowMySurveys = (event) => {
  event.preventDefault()
  ui.showMySurveys()
}

module.exports = {
  onNewSurvey,
  onShowAllSurveys,
  onShowSurvey,
  onUpdateSurvey,
  onConfirmDeleteSurvey,
  onShowMySurveys
}
