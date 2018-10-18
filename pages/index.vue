<template>
  <div class="landing">
    <intro/>
    <benefits/>
    <news/>
    <partners/>
    <projects/>
    <featured/>
    <subscription/>
  </div>
</template>

<script>
import Form from '~/components/Form'
import Subscription from '~/components/Subscription'
import Partners from '~/components/home/Partners'
import News from '~/components/home/News'
import Benefits from '~/components/home/Benefits'
import vueScroll from 'vue-scrollto'
import Modal from '~/components/ui/Modal'
import { modal } from '~/mixins/modal'

export default {
  mixins: [modal],
  scrollToTop: true,
  components: {
    Subscription,
    Partners,
    News,
    Modal,
    Form,
    Benefits
  },

  mounted () {
    let anchor = this.$route.query.goto
    if (anchor) {
      vueScroll.scrollTo(`#${anchor}`)
    }
  }
}
</script>
