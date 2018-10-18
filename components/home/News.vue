<template>
  <div class="news grid-container">
    <div class="grid-x align-center">
      <div class="medium-6 cell text-center">
        
        <div v-for="(tab, index) in tabs.slice(0, showTotal)" 
            :key="tab.id"
            :class="['post-navigation-dot', { active : index == currentTab }]"
            @click="toggle(tabs[index]), currentTab = index, restartTimer()">
        </div>

        <transition mode="out-in" name="slide-fade">
          <div v-for="(tab, index) in tabs.slice(0, showTotal)" 
                v-if="index == currentTab" 
                :key="tab.id"
                :class="'post'">
            
            <h3>{{ tab.title }}</h3>

            <p v-html="tab.oneliner "></p>
            
            <nuxt-link v-if="tab.id" class="read-more" :to="'/news/' + tab.id">
              Read more
              <span class="arrow">&rarr;</span>
            </nuxt-link>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  import tabs from '~/static/data/news.json'
  import { toggler } from '~/mixins/toggler'

  export default {
    mixins: [toggler],

    data () {
      return {
        tabs,
        currentTab: 0,
        delay: 3600,
        showTotal: 6,
        timer: null,
        totalTabs: null
      }
    },

    methods: {
      startTimer: function() {
        this.timer = setInterval(() => this.changeTab(), this.delay);
      },
      changeTab: function() {
        if (this.currentTab == (this.showTotal - 1)) {
          this.currentTab = 0;
          } else {
          this.toggle(this.tabs[this.currentTab])
          this.currentTab++
        }
      },

      restartTimer: function() {
        clearInterval(this.timer)
        this.startTimer()
      }
    },

    mounted () {
      this.totalTabs = this.tabs.length
      this.startTimer()
    },

    destroyed () {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped lang="scss">
  .news {
    margin-bottom: 2rem;
    min-height: 300px;

    @include breakpoint(medium) {
      min-height: 250px;
    }

    .post-navigation-dot {
      width: 10px;
      height: 10px;
      border: 2px solid $gray;
      border-radius: 100%;
      display: inline-block;
      margin: 3px;
      cursor: pointer;
      transition: background-color $ease;
    }

    .active {
      background-color: $gray;
    }

    .post {
      margin-top: 22px; 

      h3 {
        margin: 0 0 1rem;
      }
    }
    
    .read-more {
      font-weight: bold;
      text-decoration: none;

      .arrow {
        font-weight: bold;
        font-size: 1.3rem;
      }
    }
  }
</style>