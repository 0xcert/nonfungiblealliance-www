<template>
  <div>
    <partners 
      :title="'Members'" 
      class="mt-7"/>
    <onboard/>
    <subscription/>
  </div>
</template>

<script>
import Form from '~/components/Form'
import Subscription from '~/components/Subscription'
import Partners from '~/components/home/Partners'
import Onboard from '~/components/home/Onboard'

export default {
  scrollToTop: true,
  components: {
    Subscription,
    Partners,
    Form,
    Onboard
  }
}
</script>
