<template>
  <div class="for-who">
    <div class="grid-container">
      <h2 class="text-center mb-6">Who is it for?</h2>

      <div class="grid-x grid-margin-x grid-margin-y">
        <div 
          v-for="item in data" 
          :key="item.id" 
          class="cell small-12 medium-6 large-4 box">
          <img 
            class="icon" 
            :src="`/images/${item.icon}`" 
            :alt="item.title">
          <h4>{{ item.title }}</h4>
          <p v-html="item.body"/>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'NFT Projects and developers',
          body: `Projects, companies, and developers in the blockchain 
            space that are <strong>using or will implement NFTs</strong> into their solutions.`,
          icon: 'nft.svg'
        },
        {
          title: 'Industry and enterprise',
          body: `“Non-blockchain” companies and institutions that consider 
            <strong>integration of NFT technology</strong> into their existing model.`,
          icon: 'industry.svg'
        },
        {
          title: 'Service Providers',
          body: `Complimentary service providers, <strong>supporting marketing 
            and asset management</strong> , consulting, <strong>legal advisory</strong>, etc.`,
          icon: 'service-providers.svg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.for-who {
  background: $base;
  padding: 3rem 0;
  color: $white;

  @include breakpoint(medium) {
    padding: 7rem 1rem;
    margin: -2rem 0 2rem;
  }

  .box {
    background-color: $white;
    border-radius: 5px;
    color: $base;
    padding: 30px;

    .icon {
      margin: -60px 0 20px;
    }

    p {
      color: #7d8285;
    }
  }
}
</style>
