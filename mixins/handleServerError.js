export const handleServerError = {
  methods: {
    handleServerError: function(err) {
      if (!err.response) {
        return
      }
      err.response.data.errors.forEach(err => {
        if (err.code === 40003) {
          this.errors.add('response', 'Request token is invalid.')
        }
        if (err.code === 11000) {
          this.errors.add(
            'response',
            "Sorry, we're having some troubles with our servers. Please try again later."
          )
        }
        if (err.code === 50033) {
          this.errors.add('response', 'The destination server is unreachable.')
        }
        if (err.code === 42209) {
          this.errors.add('email', 'This email has already been whitelisted.')
        } else {
          this.errors.add(
            'response',
            `Sorry for this inconvenience. Please try again later. If you keep getting this error, please contact us in our Telegram channel with an error code: ${
              err.code
            }`
          )
        }
      })
    }
  }
}
