<template lang="html">
  <section class="timeline">
    <a class="anchor roadmap" id="timeline" />
    <div class="grid-container">

      <h2>Timeline</h2>
    
      <div class="grid-x align-center">
        <div class="timeline-item small-12 medium-4 large-3 cell timeblock-1">
          <div class="content" >
            <h5 >Private presale</h5>
              <strong>Date:</strong> {{ PRIVATE_PRESALE }}<br/>
              <strong>Min:</strong> 200 ETH
            <div class="bonus">
              <div class="value" >SOLD OUT</div>
            </div>
          </div>
        </div>
        <div class="timeline-item small-12 medium-4 large-3 cell timeblock-2">
          <div class="content">
            <h5>Public presale</h5>
              <strong>Date:</strong> {{ PUBLIC_PRESALE }}<br/>
              <strong>Min:</strong> 1 ETH
            <div class="bonus">
              <div class="value">SOLD OUT</div>
            </div>
          </div>
        </div>
        <div class="timeline-item small-12 medium-4 large-3 cell timeblock-3">
          <div class="content">
            <h5>Crowdsale</h5>
            <strong>Date:</strong> {{ CROWDSALE }}<br/>
            <div class="bonus">
              <div class="value">SOLD OUT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .timeline {
    margin-top: -180px;

    h2 {
      text-align: center;
      color: $white;
      margin-bottom: 4rem;
    }

    @include breakpoint(medium) {
      .timeblock-2 {
        margin-top: -30px;
      }

      .timeblock-3 {
        margin-top: -60px;
      }
    }
  }

.timeline-item {
  margin-bottom: 3rem;
  display: flex;
  flex-flow: column;
  padding: 20px;
  box-sizing: border-box;

  .content {
    padding: 35px 30px 50px;
    border-radius: 8px;
    background-color: #F3F8FF;
    position: relative;

    .bonus {
      position: absolute;
      height: 68px;
      width: 120px;
      padding: 10px 17px;
      color: $white;
      margin-top: 1.6rem; 
      
      .title {
        font-size: 1.1rem;
        line-height: 1.45rem;
      }
      
      .value {
        font-weight: 900;
        font-size: 1.25rem;
        line-height: 1.6rem;
      }
    }
  }

  &.timeblock-1 {
    .content {
      background: #EBF5F7;
    }

    .bonus {
      background: #7000FF;
      border-radius: 4px 1px 34px 16px;
    }
  }

  &.timeblock-2 {
    .content {
      background: #F8F2FF;
    }

    .bonus {
      background: #B0C8D3;
      border-radius: 4px 34px 17px 16px;
    }
  }

  &.timeblock-3 {
    .content {
      background: #F3F8FF;
    }
    
    .bonus {
      background: #0971FF;
      border-radius: 4px 34px 34px 16px;
    }
  }
}

</style>
