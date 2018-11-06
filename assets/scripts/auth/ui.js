'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = () => {
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
}

const signInFailure = () => {
  $('#sign-in-form').trigger('reset')
}

const passwordChangeSuccess = () => {
  $('#change-password-form').trigger('reset')
  $('#change-password-form').addClass('hidden')
}

const passwordChangeFailure = () => {
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = () => {
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

const signOutFailure = () => {

}

// const successAlert = () => {
//   $('#content').removeClass('hidden')
//   setTimeout(() => {
//     $('#content').addClass('hidden')
//   }, 3000)
// }
//
// const successFail = () => {
//   $('#content-2').removeClass('hidden')
//   setTimeout(() => {
//     $('#content-2').addClass('hidden')
//   }, 3000)
// }

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
