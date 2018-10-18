<template>
  <div class="faq grid-container">
    <div class="grid-x grid-padding-x offset-top">
      <h1 class="small-12 cell">{{ faq.title }}</h1>
      <div class="small-12 medium-4 cell">
        <ul class="menu">
          <li v-for="(category, index) in categories" 
              :class="{active : category == activeCategory}"
              :key="category.id"
              @click="toggle(categories[index])">
              {{ category }}
          </li>
        </ul>
      </div>
      <div class="small-12 medium-8 cell">
        <div class="body">
          <transition-group name="slide-fade" mode="out-in" tag="div">
            <div v-for="item in faq.data" 
                :key="item.id"
                v-show="item.category == activeCategory"
                :class="'qa'">
              <div class="question">{{ item.question }}</div>
              <div class="answer" v-html="item.answer"></div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <Subscription/>
  </div>
</template>

<script>
import faq from '~/static/data/faq.json'
import Subscription from '~/components/Subscription'

export default {
  scrollToTop: true,
  components: {
    Subscription
  },
  data () {
    return {
      faq,
      activeCategory: ''
    }
  },
  computed: {
    categories: function () {
      return [...new Set(faq.data.map((obj, i) => obj.category))].slice().reverse()
    }
  },
  methods: {
    toggle: function(category) {
      this.activeCategory = category
    }
  },
  mounted() {
    this.activeCategory = this.categories[0]
  }
}
</script>

<style lang="scss" scoped>

.body {
  a {
    color: $primary;
    text-decoration: underline;
  }
}

@include breakpoint(medium) {
  h1 {
    margin-bottom: 4rem;
  }

  .body {
    padding: 0 2rem;
    min-height: 600px;
  }
}

.qa {
  margin-bottom: 2rem;

  .question {
    font-weight: bold;
    padding: 0 0 0.5rem;
    font-size: 18px;
  }
}

.menu {
  display: flex;
  flex-flow: column;
  box-shadow: $box-shadow-light;
  padding: 10px 0;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid rgba(125,130,133,0.05);

  li {
    position: relative;
    padding: 15px 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: $gray;
    cursor: pointer;

    &:hover,
    &.active {
      color: $base;
      background: $light-blue-bg;
    }

    &.active:after {
      content: "";
      background: $light-blue-bg url('/images/cheveron.svg') no-repeat center right;
      width: 10px;
      height: 12px;
      position: absolute;
      right: 20px;
      top: calc(50% - 6px)
    }
  }
}
</style>