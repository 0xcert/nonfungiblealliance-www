<template lang="html">
  <div class="event" :class="{ past : event.attendance == 'Done'}">

    <img v-if="event.logo" class="event-image" :src="event.logo" :alt="event.title">
    <div class="info">
      {{ event.location }} <span class="dot">&#8729;</span> {{ event.date }}
    </div>
    <h4 class="title">
      {{ event.title }}
    </h4>
 
    <a v-if="event.link" class="read-more" :href="event.link">
      Read more &rarr;
    </a>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    data: Object
  },
  data () {
    return {
      event: this.data
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-flow: column;
  background: $white;
  box-shadow: $box-shadow-light;
  border-radius: 2px; 
  padding: 25px 25px 17px;
  font-family: $secondary-font;
  align-items: flex-start;
  height: 85px; 

  &.past {
    color: $gray-light;
    transition: color $ease;

    .event-image {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: 0.5;
      transition: all $ease;
    }

    .info {
      color: $gray-light;
      transition: color $ease;
    }

    &:hover {
      color: $base;

      .event-image {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
        opacity: 1;
      }

      .info {
        color: $gray;
      }
    }
  }

  .event-image {
    height: 50px;
    margin-bottom: 10px;
  }

  .info {
    font-size: 14px;
    margin-top: auto;
    margin-bottom: 10px;
    color: $gray;
    text-transform: uppercase;

    .dot {
      color: $gray-light;      
    }
  }

  .read-more {
    flex-shrink: 1;
  }

  .title {
    font-family: $secondary-font;
    font-size: 18px;
    font-weight: bold;
  }
}

</style>
