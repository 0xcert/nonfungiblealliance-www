<template>
  <div class="landing">
    <apply/>
    <benefits short/>
    <subscription/>
  </div>
</template>

<script>
import Subscription from '~/components/Subscription'
import Benefits from '~/components/home/Benefits'
import Apply from '~/components/Apply'

export default {
  scrollToTop: true,
  components: {
    Apply,
    Subscription,
    Benefits
  }
}
</script>
