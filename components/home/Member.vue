<template lang="html">
  <div v-if="type == 'featured-member'">
    <div class="grid-x grid-padding-x">
      <div class="small-12 medium-4 large-3 cell padding-horizontal-1">
        <div class="member" :style="'background-image: url(' + member.image + ')' ">
          <div class="social-links">
            <a v-if="member.twitter" :href="member.twitter" :title="member.name" :class="'twitter'" target="_blank">
              <svgTwitter :class="'icon'" />
            </a>
            <a v-if="member.linkedin" :href="member.linkedin" :title="member.name" :class="'linedin'" target="_blank">
              <svgLinkedin :class="'icon'" />
            </a>
            <a v-if="member.github" :href="member.github" :title="member.name" :class="'github'" target="_blank">
              <svgGithub :class="'icon'" />
            </a>
          </div>
        </div>
        <h4 class="name">{{ member.name }}</h4>
        <span v-if="member.role">{{ member.role }}</span>
      </div>
      <div class="small-12 medium-8 large-9 cell">
        <span v-if="member.roles" class="role">
           {{ member.roles[0] }}    
        </span>
      </div>
    </div>
  </div>

  <div v-else class="member">
    <div :class="type" :style="'background-image: url(' + member.image + ')' ">
      <div class="social-links">
        <a v-if="member.twitter" :href="member.twitter" :title="member.name" :class="'twitter'" target="_blank">
          <svgTwitter :class="'icon'" />
        </a>
        <a v-if="member.linkedin" :href="member.linkedin" :title="member.name" :class="'linedin'" target="_blank">
          <svgLinkedin :class="'icon'" />
        </a>
        <a v-if="member.github" :href="member.github" :title="member.name" :class="'github'" target="_blank">
          <svgGithub :class="'icon'" />
        </a>
      </div>
    </div>
    <h4 class="name">{{ member.name }}</h4>
    <span v-if="member.roles" class="role">
      <ul>
        <li v-for="role in member.roles" :key="role.id">
          {{ role }}
        </li>
      </ul>
    </span>
    <span v-if="member.role" class="role">{{ member.role }}</span>
  </div>
</template>

<script>
  import svgTwitter from '~/assets/img/twitter.svg'
  import svgLinkedin from '~/assets/img/linkedin.svg'
  import svgGithub from '~/assets/img/github.svg'

  export default {
    components: {
      svgLinkedin,
      svgTwitter,
      svgGithub
    },
    props: {
      member: Object,
      type: [Array, String]
    }
  }

</script>

<style lang="scss" scoped>
  .name {
    margin-bottom: 5px;
    font-size: 20px;
  }

  .featured {
    background: #7D8285;
    border-radius: 8px;
    padding: 1rem 0;
    margin-bottom: 2rem;

    @include breakpoint(medium) {
      padding: 2rem 1rem;
    }

    .role {
      font-size: 18px;
    }

    .member {
      min-height: 300px;
      @include breakpoint(medium) {
        min-height: 220px;
      }
    }
  }

  .member {
    margin-bottom: 3rem;
    display: flex;
    flex-flow: column;

    @include breakpoint(medium) {
      padding: 0 10px;
    }

    .role {
      color: $gray;
    }

    .social-links {
      position: absolute;
      bottom: 2px;
      right: 2px;

      a {
        display: inline-block;
        background-color: $light-blue;
        padding: 2px 0px;
        width: 30px;
        margin-left: 2px;
        text-align: center;
        border-radius: 5px;

        .icon {
          max-height: 13px;
          fill: $base;
        }

        &.github .icon {
          max-height: 15px;
          transform: translateY(3px);
        }

        &:hover {
          background: $primary;

          .icon {
            fill: $white;
          }
        }
      }
    }
  }

  .member-blue {
    position: relative;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(9, 113, 255, 0.7);
    opacity: 0.7;
    background-blend-mode: luminosity;
    background-size: cover;
    background-position: center top;
    min-height: 150px;
    transition: $ease;

    &:hover {
      opacity: 0.9;
      background-color: transparent;
    }

    @include breakpoint(medium) {
      min-height: 280px;
    }
  }

  .member {
    position: relative;
    margin-bottom: 1rem;
    border-radius: 7px;
    overflow: hidden;
    background-size: cover;
    background-position: center top;
    min-height: 150px;

    @include breakpoint(medium) {
      min-height: 250px;
    }
  }

</style>
