<template>
  <section class="introduction">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="small-12 cell">
           <h1>
            Bringing together the NFT world.
          </h1>
        </div>
        <div class="small-12 medium-6 large-6 cell">
          <div class="margin-bottom-3 intro">
            <p>
              As diverse and unique as the non-fungible space is, so are the visions, potentials, and opinions about it.
              <strong>Our goal is to provide a common platform</strong> for all non-fungible thinkers, enthusiasts, and creators. Join in and share your part, too.
            </p>
            <p>Some of the non-fungible perks:</p>
            <ul>
              <li>Exposure of your project</li>
              <li>Early access to NFT solutions</li>
              <li>Large community and network</li>

            </ul>
          </div>
          <div class="margin-bottom-3">
            <a href="#" v-scroll-to="{el: '#platform'}" class="button primary large margin-right-1 margin-bottom-1">Become a member</a>
          </div>
        </div>

        <div class="cell show-for-medium large-6 medium-6 align-bottom position-relative">
          <img class="illustration" src="/images/top-illustration.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introduction {
  align-items: flex-end;
  display: flex;
  padding-bottom: 6rem;
  color: $white;

  .grid-container {
    width: 100%;
  }

  h1 {
    font-weight: 800;
    line-height: 1.3;

    @include breakpoint(medium) {
      margin-top: 3rem;
      font-size: 3rem;
    }
  }

  @include breakpoint(medium) {
    .intro {
      max-width: 550px;
      font-size: 20px
    }
  }

  @include breakpoint(large) {
    min-height: 600px;
  }
}

.illustration {
  position: absolute;

  @include breakpoint(large ) {
    bottom: -6rem;
  }
}


</style>
