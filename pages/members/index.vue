<template>
  <div>
    <partners 
      :title="'Members'" 
      :limit="1000"
      class="mt-7"
    />
    <onboard />
    <subscription />
  </div>
</template>

<script>
import Subscription from '~/components/Subscription'
import Partners from '~/components/home/Partners'
import Onboard from '~/components/home/Onboard'

export default {
  scrollToTop: true,
  components: {
    Subscription,
    Partners,
    Onboard
  }
}
</script>
