export const toggler = {
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    toggle: function(tab) {
      for (let item of this.tabs) {
        item.active = false
      }
      tab.active = true
    }
  }
}