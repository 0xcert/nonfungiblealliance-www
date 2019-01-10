<template>
  <div class="resources grid-container">
    <div class="grid-x grid-padding-x offset-top">
      <h1 class="small-12 cell">Resources</h1>
      <div class="small-12 medium-4 large-3 cell">
        <ul class="menu">
          <li 
            v-for="(category, index) in categories" 
            :class="{active : category == activeCategory}"
            :key="index"
            @click="toggle(categories[index])">
            {{ category }}
          </li>
        </ul>
      </div>
      <div class="small-12 medium-8 large-9 cell">
        <div class="body">
          <transition-group 
            name="slide-fade" 
            mode="out-in" 
            tag="div">
            <div 
              v-for="(item, index) in resources" 
              :key="`resource-${index}`"
              v-show="item.tag.includes(activeCategory) || activeCategory == 'all'"
              :class="'qa'">
              <div class="question">{{ item.description }}</div>
              <div class="link">
                <a 
                  :href="item.link" 
                  target="_blank">
                  {{ item.link }}
                </a>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <Subscription/>
  </div>
</template>

<script>
import resources from '~/static/data/resources.json'
import Subscription from '~/components/Subscription'

export default {
  scrollToTop: true,
  components: {
    Subscription
  },
  data() {
    return {
      resources,
      activeCategory: ''
    }
  },
  computed: {
    categories: function() {
      let tags = [...resources.map(i => i.tag)].reduce((a, b) => a.concat(b), []).sort()
      tags.unshift('all')
      return [...new Set(tags)]
    }
  },
  methods: {
    toggle: function(category) {
      this.activeCategory = category
    }
  },
  mounted() {
    this.activeCategory = 'all'
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
  margin-bottom: 1.5rem;

  .question {
    font-weight: bold;
    padding: 0 0 0.5rem;
    font-size: 18px;
  }

  .link a {
    color: $gray;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: $base;
    }
  }
}

.menu {
  display: flex;
  flex-flow: column;
  box-shadow: $box-shadow-light;
  padding: 10px 0;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid rgba(125, 130, 133, 0.05);

  li {
    position: relative;
    padding: 5px 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: $gray;
    cursor: pointer;

    &:hover,
    &.active {
      color: $base;
      background: $primary;
    }

    &.active:after {
      content: '';
      background: url('/images/cheveron.svg') no-repeat center right;
      width: 10px;
      height: 12px;
      position: absolute;
      right: 20px;
      top: calc(50% - 6px);
    }
  }
}
</style>
