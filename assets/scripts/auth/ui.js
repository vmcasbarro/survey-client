'use strict'

const store = require('../store.js')

const signUpSuccess = () => {

}

const signUpFailure = () => {

}

const signInSuccess = (response) => {
  store.user = response.user
}

const signInFailure = () => {

}

const passwordChangeSuccess = () => {

}

const passwordChangeFailure = () => {

}

const signOutSuccess = () => {

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
