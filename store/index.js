import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      newsletterModal: null
    },

    mutations: {
      initializeStore(state) {
        if (localStorage.getItem('popUp') === 'closed') {
          state.newsletterModal = false
        }
      },

      toggleNewsletterModal(state, open) {
        state.newsletterModal = open
      }
    },

    actions: {
      showNewsletterModal({ commit }) {
        commit('toggleNewsletterModal', true)
      },

      closeNewsletterModal({ commit }) {
        commit('toggleNewsletterModal', false)
        localStorage.setItem('popUp', 'closed')
      }
    }
  })
}

export default createStore
