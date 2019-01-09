<template>
  <div 
    v-html="content" 
    class="markdown"/>
</template>

<script>
import GeneralDisclaimer from './generalDisclaimer.md'

export default {
  scrollToTop: true,
  layout: 'inner',
  data() {
    return {
      content: GeneralDisclaimer
    }
  }
}
</script>
