import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import svgTwitter from '~/assets/img/twitter.svg'
import svgFacebook from '~/assets/img/facebook.svg'
import svgLinkedin from '~/assets/img/linkedin.svg'

Vue.component('svg-twitter', svgTwitter)
Vue.component('svg-facebook', svgFacebook)
Vue.component('svg-linkedin', svgLinkedin)
Vue.use(SocialSharing)
