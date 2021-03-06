import Vue from 'vue'

import Button from '~/components/ui/Button'
import Intro from '~/components/home/Intro'
import SocialLinks from '~/components/SocialLinks'
import CookieLaw from 'vue-cookie-law'
import Loader from '~/components/ui/Loader'

Vue.component('Intro', Intro)
Vue.component('Button', Button)
Vue.component('SocialLinks', SocialLinks)
Vue.component('CookieLaw', CookieLaw)
Vue.component('Loader', Loader)
