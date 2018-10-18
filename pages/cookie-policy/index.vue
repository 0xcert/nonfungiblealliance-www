<template>
  <div v-html="content" class="markdown"></div>
</template>

<script>
import PrivacyContent from './PrivacyContent.md'

export default {
  scrollToTop: true,
  layout: 'inner',
  data () {
    return {
      content: PrivacyContent
    }
  }
}
</script>
