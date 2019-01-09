import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-in-out',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
