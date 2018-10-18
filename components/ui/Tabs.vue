<template>
  <div class="tabs">
    <span 
      v-for="(tab, index) in tabs" 
      :key="tab.id"
      :class="['tab', 'tab-' + index, {active: tab.active}]"
      @click="toggle(tabs[index])">
        {{ tab.label }}
      </span>
  </div>
</template>

<script>
import { toggler } from '~/mixins/toggler'

  export default {
    mixins: [toggler],
    props: {
      data: Array
    },
    data () {
      return {
        tabs: this.data
      }
    }
  }
</script>

<style scoped lang="scss">
.tabs {
  margin: 40px 15px;

  .tab {
    display: inline-block;
    text-transform: uppercase;
    padding: 7px 20px;
    border: 1px solid transparent;
    margin: 0 5px;
    cursor: pointer;
    transition: all $ease;

    &:hover {
      color: $primary;
    }

    &.active {
      background: #FFFFFF;
      color: $base;
      border: 1px solid #7D8285;
      border-radius: 100px;

      &:hover {
        color: $base;
        cursor: default;
      }
    }
  }
}
</style>