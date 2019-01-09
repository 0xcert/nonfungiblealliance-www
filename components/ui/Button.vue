<template>
  <a 
    class="button" 
    :class="type">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: [String, Array],
      default: 'primary'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
