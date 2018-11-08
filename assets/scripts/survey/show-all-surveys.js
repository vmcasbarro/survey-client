const config = require('../config.js')
const store = require('../store.js')
const showSurveysTemplate = require('../templates/surveys.handlebars')

const onShowAllSurveys = () => {
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
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })

  $('.my-surveys-component').addClass('hidden')
  $('.survey-component').removeClass('hidden')
  $('.survey-component').html(showSurveysHtml)
}

const showAllSurveysFailure = () => {
  $('.reset').trigger('reset')
  $('#display-survey-message').html('Something went wrong, please try again')
  $('#display-survey-message').css('red')
}

module.exports = {
  onShowAllSurveys
}
