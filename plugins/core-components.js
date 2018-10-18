import Vue from 'vue'

import Button from '~/components/ui/Button'
import Tabs from '~/components/ui/Tabs'
import Intro from '~/components/home/Intro'
import Input from '~/components/ui/Input'
import svgLogo from '~/assets/img/0xcert-logo.svg'
import SocialLinks from '~/components/SocialLinks'
import CookieLaw from 'vue-cookie-law'
import Loader from '~/components/ui/Loader'

Vue.component('Intro', Intro)
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('Tabs', Tabs)
Vue.component('svgLogo', svgLogo)
Vue.component('SocialLinks', SocialLinks)
Vue.component('CookieLaw', CookieLaw)
Vue.component('Loader', Loader)
