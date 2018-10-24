<template>
  <div>
    <div 
      class="fixed" 
      :class="[isFixed() || open ? 'is-fixed' : '']">
      <header class="navigation grid-container">
        <div class="grid-x">
          <nuxt-link 
            to="/" 
            v-scroll-to="{el: 'body' }" 
            class="auto cell brand">
            <img 
              src="/images/logo.svg" 
              alt="The Non-fungible alliance">
          </nuxt-link>
          <mq-layout mq="sm"> 
            <div 
              :class="['hamburger', { open : open }]" 
              @click="toggle()">
              <span 
                v-for="n in 3" 
                class="line" 
                :key="n"/>
            </div>
          </mq-layout>  

          <transition 
            name="fadeHeight" 
            mode="out-in">
            <mq-layout 
              v-if="open" 
              mq="sm" 
              :class="'mobile-menu'">
              <nuxt-link 
                :to="'/'" 
                exact 
                v-html="'Home'" 
                v-scroll-to="{el: 'body' }" 
                class="link"/>
              <nuxt-link 
                :to="'/members'" 
                v-html="'Members'" 
                class="link"/>
              <nuxt-link 
                to="/members/apply" 
                class="button hollow white">Become a member</nuxt-link>  
            </mq-layout>
          </transition>

          <mq-layout 
            mq="md+" 
            :class="'menu small-12 cell medium-shrink'">
            <nuxt-link 
              :to="'/'" 
              exact 
              v-html="'Home'" 
              v-scroll-to="{el: 'body' }" 
              class="link"/>
            <nuxt-link 
              :to="'/members'" 
              v-html="'Members'" 
              class="link"/>
            <nuxt-link 
              to="/members/apply" 
              class="button hollow white ml-2">Become a member</nuxt-link>
          </mq-layout>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: false,
      open: false
    }
  },
  methods: {
    updateScroll: function() {
      this.scrollPosition = document.scrollingElement.scrollTop
    },
    isFixed: function() {
      if (this.scrollPosition > 100) return true
    },
    toggle: function() {
      this.open = !this.open
    }
  },
  watch: {
    $route() {
      this.open = false
    }
  },
  mounted() {
    document.addEventListener('scroll', this.updateScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  position: relative;
}

.link {
  color: $white;
  position: relative;
  text-transform: uppercase;

  &:hover {
    color: $primary;
  }

  &.nuxt-link-active {
    color: $primary;
  }

  @include breakpoint(large) {
    &.nuxt-link-active {
      &::before {
        position: absolute;
        top: -#{$gutter * 2};
        height: 2px;
        width: calc(100% - 2rem);
        content: '';
        background: $primary;
        transition: top $ease;
      }
    }
  }
}

.mobile-menu {
  display: flex;
  margin-top: 1rem;
  flex-flow: column;
  flex-basis: 100%;
  text-align: right;

  .link {
    padding: 5px 0;
  }

  .button {
    margin-top: 1rem;
    align-self: flex-end;
  }
}

.fixed {
  @include position-fixed-top(4);
  padding-bottom: 1rem;
  padding-top: 1rem;
  transition: all $ease;

  @include breakpoint(large) {
    padding-top: 2rem;
  }

  &.is-fixed {
    padding-top: 1rem;
    background-color: $base;

    .nuxt-link-active {
      &::before {
        top: -#{$gutter * 1};
      }
    }
  }

  .page-members &,
  .page-subscriptions-subscribe & {
    background-color: $base;
  }
}

.brand {
  font-weight: bold;
  color: $primary;
  align-self: center;
}

.hamburger {
  color: white;
  font-size: 2rem;
  width: inherit;
  z-index: 501;

  @include breakpoint(large) {
    display: none;
  }

  .line {
    width: 28px;
    height: 3px;
    background-color: #ecf0f1;
    display: block;
    margin: 6px auto;
    transition: all $ease;
  }

  &.open {
    .line:nth-child(2) {
      opacity: 0;
    }

    .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .line:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
