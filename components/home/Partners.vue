<template lang="html">
  <div>
    <a 
      id="partners" 
      name="partners" 
      class="anchor"
    />
    <div class="partners grid-container">
      <h2>{{ title }}</h2>
      <div
        v-if="detailed"
        class="logos"
      >
        <div 
          v-for="partner in filteredPartners" 
          :key="partner.id" 
          class="project grid-x grid-margin-y gird-padding-x"
        >
          <div class="cell small-12 medium-3 text-center">
            <a
              :href="partner.website"
              target="_blank"
            >
              <img 
                v-if="partner.logo"
                :src="`/partners/${partner.logo}`"
                :alt="partner.name"
                style="max-width:200px"
              >
            </a>
          </div>
          <div class="content cell small-12 medium-7">
            <h4>{{ partner.name }}</h4>
            {{ partner.description }}
            <div
              v-if="partner.website"
              class="website"
            >
              <a
                :href="partner.website"
                target="_blank"
              >{{ filteredWebsite(partner.website) }}</a>
            </div>
          </div>
          <div class="cell small-12 medium-2">
            <div class="links">
              <a
                v-if="partner.twitter"
                :href="partner.twitter"
                target="_blank"
              ><img
                src="/icons/twitter.svg"
                :alt="`${partner.name} on Twitter`"
              ></a>
              <a
                v-if="partner.facebook"
                :href="partner.facebook"
                target="_blank"
              ><img
                src="/icons/facebook.svg"
                :alt="`${partner.name} on Facebook`"
              ></a>
              <a
                v-if="partner.medium"
                :href="partner.medium"
                target="_blank"
              ><img
                src="/icons/medium.svg"
                :alt="`${partner.name} on Medium`"
              ></a>
              <a
                v-if="partner.github"
                :href="partner.github"
                target="_blank"
              ><img
                src="/icons/github.svg"
                :alt="`${partner.name} on Github`"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="logos grid-x align-center grid-margin-x grid-margin-y"
      >
        <div 
          v-for="partner in filteredPartners.slice(0, limit)" 
          :key="partner.id" 
          class="logo small-6 text-center medium-4 large-3 cell align-self-middle"
        >
          <img 
            v-if="partner.logo"
            :src="`/partners/${partner.logo}`"
            :alt="partner.name"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partners from '~/static/data/partners.yaml'
export default {
  props: {
    title: {
      default: 'Recently joined',
      type: String
    },
    limit: {
      default: 16,
      type: Number
    },
    detailed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      partners
    }
  },
  computed: {
    filteredPartners() {
      return this.partners.slice().reverse()
    }
  },
  methods: {
    filteredWebsite(website) {
      return website.replace(/(^\w+:|^)\/\//, '');
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 2rem 1rem;

  img {
    max-height: 80px;
  }

  h2 {
    margin: 0 auto;
    text-align: center;
  }

  .logos {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .project {
    box-shadow: $box-shadow-light;
    border-radius: 5px;
    border: 1px solid rgba(125, 130, 133, 0.05);
    display: flex;
    margin-bottom: 2rem; 

    @include breakpoint(medium) {
      padding: 10px;
    }
  }

  .content {
    @include breakpoint(medium) {
      padding-left: 10px;
    }

    .website {
      font-weight: bold;
      margin-top: 10px;
    }
  }

  .logo {
    box-shadow: $box-shadow-light;
    padding: 1rem 2rem;
    border-radius: 5px;
    border: 1px solid rgba(125,130,133,.05);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
  }

  .links {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;    

    a {
      background-color: lighten($base, 20%);
      display: flex;
      flex-shrink: 0;
      border-radius: 60px;
      padding: 5px 2px;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      margin-bottom: 10px;
      transition: background-color $ease;

      &:hover {
        background-color: $primary;
      }
    }

    img {
      max-height: 18px;
    }
  }
}
</style>
