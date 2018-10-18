<template lang="html">
<div>
  <a id="subscribe" name="subscribe" class="anchor"/>
    <div class="grid-container">
    <section class="subscription">
      <div class="grid-x align-center">
        <img src="/images/newsletter.svg" class="image" alt="Newsletter">
        <div class="form small-11 medium-9 large-5 cell">
          <Form/>
        </div>
      </div>
    </section>
  </div>
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
  border-radius: 8px;
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

  .image {
    position: absolute;
    left: 5%;
    top: -4.5rem;
    
    @include breakpoint(medium down) {
      display: none;
    }
  }
}
</style>
