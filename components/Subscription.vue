<template lang="html">
  <div class="grid-container mt-7">
    <section class="subscription">
      <div class="grid-x align-center">
        <div class="form small-11 medium-9 large-5 cell">
          <Form />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Form from '~/components/Form'

export default {
  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>
.subscription {
  padding: 3rem 0;
  background: $base;
  color: $white;
  position: relative;
  margin-bottom: -8rem;

  .follow {
    position: relative;
    padding: 4rem 0;
  }

  .social-links {
    margin: 2rem 0 2.5rem;
  }
}
</style>
