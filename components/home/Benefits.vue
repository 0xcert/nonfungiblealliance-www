<template>
  <div class="benefits grid-container pb-7">
    <div class="grid-x align-center">
      <div class="cell small-12 large-8">
        <h2 class="text-center">Beneefits</h2>

        <div class="grid-x align-middle mb-3">
          <div class="cell small-12 medium-5 text-center medium-text-left">
            <img src="/images/community.svg" alt="Community">
          </div>
          <div class="cell small-12 medium-7">
            <h3>Community</h3>
            <p>Access an existing network of projects, developers, industry partners as well as service providers.</p>
          </div>
        </div>

        <div class="grid-x align-middle mb-3">
          <div class="cell small-12 medium-5 medium-order-2 text-center medium-text-right">
             <img src="/images/adoption.svg" alt="Adoption">
          </div>
          <div class="cell small-12 medium-7 medium-order-1">
            <h3>Adoption</h3>
            <p>Support and know-how from field top experts on all levels of market implementation</p>
          </div>
        </div>

        <div class="grid-x align-middle mb-3">
          <div class="cell small-12 medium-5 text-center medium-text-left">
            <img src="/images/resources.svg" alt="Resources">
          </div>
          <div class="cell small-12 medium-7">
            <h3>Resources</h3>
            <p>Timely updates about the NFT space, industry development, and relevant topics.</p>
          </div>
        </div>

        <div class="grid-x align-middle mb-7">
          <div class="cell small-12 medium-5 medium-order-2 text-center medium-text-right">
            <img src="/images/exposure.svg" alt="Exposure">
          </div>
          <div class="cell small-12 medium-7 medium-order-1">
            <h3>Exposure</h3>
            <p>Content creation and product showcase across a large network of industry peers and their communities</p>
          </div>
        </div>
      </div>

      <div class="cell-small-12 large-6 text-center mt-7 mb-3">
        <p><strong class="bigger">New benefits will be added regularly for the members of the Alliance.</strong></p>
        <p>From early access and trials of various non-fungible solutions to free tickets for upcoming NFT events.</p>
        <a href="#" class="button primary mt-1">
          Sign up and stay in the loop
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .benefits {
    padding-top: 5rem;
    background: url('/images/benefits-bg.png') no-repeat bottom center;

    p {
      font-family: $primary-font;
      font-weight: light;
    }

    .bigger {
      font-size: 120%;
    }
  }

</style>
