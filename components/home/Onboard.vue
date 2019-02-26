<template>
  <div class="grid-container">
    <div class="grid-x bg align-center">
      <div class="cell small-12 inner text-center">
        <div class="width">
          <h2>Get on board</h2>
          <p>
            The Non-Fungible Alliance is inviting new members to join in.
            Submit your application and become a part of the network.
          </p>
          <nuxt-link 
            to="/members/apply" 
            class="button primary mt-2"
          >
            Become a member
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg {
  background: url('/images/onboard-bg.png') no-repeat center center;
  background-size: contain;

  @include breakpoint(large) {
    padding: 2rem 4rem;
  }
}

.inner {
  background: url('/images/onboard-shape.svg') no-repeat center center;
  background-size: cover;
  min-height: 410px;
  color: $white;
  padding: 3.5rem 1rem;

  @include breakpoint(large) {
    background-size: contain;
  }
}

.width {
  max-width: 530px;
  margin: 0 auto;

  p {
    font-family: $primary-font;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
