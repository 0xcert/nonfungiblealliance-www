import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'

Vue.use(VeeValidate)

Validator.extend('wallet', {
  getMessage(field, params, data) {
    return (data && data.message) || 'This is not valid ETH Address'
  },
  validate(value) {
    return /^0x[a-fA-F0-9]{40}$/.test(value)
  }
})

Validator.extend('verify_password', {
  getMessage(field, params, data) {
    return (data && data.message) || 'Your password must be at least eight characters long and must be a combination of upper case, lower case, numbers, and non-alphanumeric characters.'
  },
  validate(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value)
  }
})
