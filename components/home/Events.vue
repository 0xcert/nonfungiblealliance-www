<template>
<div>
  <a id="events" name="events" class="anchor"/>
  <div class="grid-container">
    <div class="events">
      <div class="grid-x">
        <div class="small-12 cell text-center">
          <h2>Events</h2>
          <div class="subtitle">0xcert in action</div>
        </div>
      </div>
      <div class="grid-x grid-margin-x grid-margin-y">
          <EventItem 
            v-for="event in events.slice().reverse()" 
            :key="event.id"
            :data="event"
            :class="'medium-4 large-3 cell'"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EventItem from '~/components/EventItem'
import events from '~/static/data/events.json'

export default {
  data () {
    return {
      events
    }
  },
  components: {
    EventItem
  }
}
</script>

<style scoped lang="scss">
  .events {
    padding: 2rem 0;

    h2 {
      margin-bottom: 0;
    }

    .subtitle {
      margin-bottom: 2rem;
    }

    @include breakpoint(medium) {
      padding: 2rem 0 8rem;
    }
  }
</style>