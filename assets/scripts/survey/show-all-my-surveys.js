const config = require('../config.js')
const store = require('../store.js')
const showMySurveysTemplate = require('../templates/my-surveys.handlebars')

const onShowAllMySurveys = () => {
  showAllSurveys()
    .then(showAllSurveysSuccess)
    .catch(showAllSurveysFailure)
}

const showAllSurveys = () => {
  return $.ajax({
    url: config.apiUrl + `/surveys`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showAllSurveysSuccess = (data) => {
  console.log('all the surveys in the database: \n', data)
  const allSurveys = data
  const userId = store.user._id

  const allMySurveys = allSurveys.surveys.filter(function (survey) {
    return survey.owner === userId
  })

  store.mySurveys = allMySurveys

  console.log('my surveys: ', allMySurveys)

  console.log('user _id is: ', userId)
  $('.reset').trigger('reset')
  // const showMySurveys = () => {
  const showMySurveysHtml = showMySurveysTemplate({
    surveys: store.mySurveys
  })
  $('.my-surveys-component').removeClass('hidden')
  $('.survey-component').addClass('hidden')
  $('.my-surveys-component').html(showMySurveysHtml)
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

module.exports = {
  onShowAllMySurveys
}
