<template>
<svg class="timebar" :width="width" height="90" viewBox="0 0 600 90" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">

    <text x="0" y="12" class="title">
      Timeline
    </text>

    <text x="0" y="42" class="label ended" text-anchor="start">
     Private presale
    </text>

    <text x="0" y="58" class="date ended" text-anchor="start">
      {{ PRIVATE_PRESALE }}
    </text>

    <text x="260" y="42" class="label ended" text-anchor="middle">
      Public Presale - SOLD OUT
    </text>

    <text x="260" y="58" class="date ended" text-anchor="middle">
      {{ PUBLIC_PRESALE }}
    </text>

    <text x="580" y="42" class="label active" text-anchor="end">
      Crowdsale - SOLD OUT
    </text>

    <text x="580" y="58" class="date active" text-anchor="end">
      {{ CROWDSALE }}
    </text>

    <path fill="#7D8285" :d="`M0 75h${width - 20}v2H0z`"/>
    <!-- <path d="M580 66v20" stroke-width="2" stroke="#0971FF" stroke-linecap="square"/> -->
  </g>
</svg>

</template>

<script>
  export default {
    data () {
      return {
        width: 600
      }
    } 
  }
</script>

<style scoped lang="scss">

.timebar {
  background: $white;
}

.title {
  fill: $base; 
  font-size: 16px; 
  font-weight: bold;
}

.label {
  fill: #000; 
  opacity: .7;
  font-size: 13px; 
  font-weight: bold;
}

.date {
  fill: $base;
  font-size: 12px;
}

.ended {
  opacity: 0.35;
}

.active {
  fill: $primary;
  font-weight: bold;
  opacity: 1;
}

</style>