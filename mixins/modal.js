export const modal = {
  methods: {
    delay: function(delay) {  
      return () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => { resolve() }, delay)
        })
      }
    }
  },

  mounted() {
    this.$store.commit('initializeStore')

    let postopneModal = new Promise((resolve, reject) => {  
      resolve()
    })

    postopneModal
    .then(this.delay(5000))
    .then(() => {
        if (this.$store.state.newsletterModal == null) {
          this.$store.dispatch('showNewsletterModal')
        }
      }
    )
  }
}