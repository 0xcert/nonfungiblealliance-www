<template>
  <div class="landing">
    <intro/>
    <benefits/>
    <forwho/>
    <partners/>
    <onboard/>
    <subscription/>
  </div>
</template>

<script>
import Form from '~/components/Form'
import Subscription from '~/components/Subscription'
import Partners from '~/components/home/Partners'
import Forwho from '~/components/home/Forwho'
import Benefits from '~/components/home/Benefits'
import Onboard from '~/components/home/Onboard'

export default {
  scrollToTop: true,
  components: {
    Subscription,
    Partners,
    Benefits,
    Forwho,
    Onboard
  }
}
</script>
