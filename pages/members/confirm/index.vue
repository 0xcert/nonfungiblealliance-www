<template>
  <div class="landing">
    <confirm/>
    <benefits short/>
    <subscription/>
  </div>
</template>

<script>
import Subscription from '~/components/Subscription'
import Benefits from '~/components/home/Benefits'
import Confirm from '~/components/Confirm'

export default {
  scrollToTop: true,
  components: {
    Confirm,
    Subscription,
    Benefits
  }
}
</script>
