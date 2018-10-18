<template>
<div class="timer grid-x align-center">
  <div class="cell small-3 medium-2">
  {{ days }} <span>days</span>
  </div>
  <div class="cell small-3 medium-2">
    {{ hours }} <span>hours</span>
  </div>
  <div class="cell small-3 medium-2">
    {{ minutes }} <span>min</span>   
  </div>
  <div class="cell small-3 medium-2">
    {{ seconds }} <span>sec</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    date: Date,
    onEnd: String
  },
  data () { 
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    }
  },

  methods: {
    updateRemaining: function(distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    },
    
    tick: function() {
      const currentTime = new Date()
      const distance = Math.max(this.date - currentTime, 0)
      this.updateRemaining(distance)
      
      if (distance === 0) {
        clearInterval(this.timer)
        this.$store.dispatch(this.onEnd)
      }
    }
  },

  mounted () {
    this.tick()
    this.timer = setInterval(() => this.tick(), 1000)
  },
  
  destroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.timer {
  margin: 2rem 0 0;
  
  .cell {
    border: 1px solid rgba(255,255,255,0.22);	
    background-color: #383C3F;	
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.09);
    margin-right: -1px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 32px;
    line-height: 1;
    transition: background-color $ease;

    &:hover {
      background-color: $primary;
    }

    span {
      display: block;
      font-size: 14px;
      line-height: 22px;
      text-transform: uppercase;
    }
  }
}
</style>
