<template lang="html">
<div>
  <a id="team" name="team" class="anchor"/>
  <section class="team">
    <div class="grid-container">
      <h2>Team - Like no other</h2>
        <div class="grid-x grid-margin-x grid-margin-y align-center team-members">
          <Member 
            v-for="(member, index) in members" 
            :key="member.id" 
            :type="'member-blue'"
            :class="['member-' + (index + 1)]"
            class="small-6 medium-4 large-3 cell" 
            :member="member"/>

        <div class="small-12 text-center">
          <div class="grid-x grid-margin-x align-center">
            <div class="small-6 medium-4 large-3 cell margin-top-3 gray-box">
              <img src="/images/apply-for-a-job.svg"/>
            </div>
          </div>
          <h3 class="margin-top-2">We are hiring awesome people!</h3>
          <nuxt-link to="/jobs" class="button primary large">Check open positions</nuxt-link>
        </div>
      </div>
    </div>
  </section>

  <div class="grid-container">
    <a id="advisors" name="advisors" class="anchor"/>
    <section class="advisors">
      <h2>Advisors</h2>
      <div class="grid-x grid-margin-x grid-margin-y team-members">
        <Member 
          class="cell"
          :class="[ advisor.featured ? 'featured' : 'small-6 medium-4 large-3' ]" 
          v-for="advisor in advisors" 
          :key="advisor.id" 
          :type="[ advisor.featured ? 'featured-member' : 'member' ]"
          :member="advisor"/>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import Member from './Member'
import members from '~/static/data/team'
import advisors from '~/static/data/advisors'

export default {
  data () {
    return {
      members,
      advisors
    }
  },
  components: {
    Member
  }
}
</script>

<style lang="scss" scoped>
.team,
.advisors {
  margin-bottom: 2rem;

  @include breakpoint(medium) {
    padding: 2rem;
  }

  h2 {
    margin: 1rem 0 3rem;
    text-align: center;
  }
}

.advisors {
  background-color: $base;
  border-radius: 8px;
  color: $white;
  padding: 2rem 1rem;

  @include breakpoint(medium) {
    padding: 2rem 5rem;
  }
}

.team {
  background: url('/images/team_bg.svg') no-repeat bottom right;
  padding-bottom: 12rem;
  margin-bottom: -8rem;
}

.gray-box {
  background: $grey-bg;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 7px;
  overflow: hidden;
  min-height: 150px;
  padding: 1rem;

  @include breakpoint(medium) {
    min-height: 250px;
  }
}

</style>
