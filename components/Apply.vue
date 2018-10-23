<template>
  <section class="introduction">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="small-12 medium-6 large-5 cell">
          <transition 
            mode="out-in" 
            name="layout">
            <div v-if="state === 'form'">
              <h1>Become a member</h1>

              <form 
                @submit.prevent="submit()" 
                novalidate>
                <div class="grid-x grid-margin-x">
                  <label class="small-12 medium-auto cell">First name
                    <input 
                      v-model="data.firstName" 
                      v-validate="'required'" 
                      :class="{'input': true, 'is-invalid-input': errors.has('firstName') }"
                      name="firstName" 
                      data-vv-as="First name"
                      type="text" >
                    <span 
                      class="alert" 
                      v-show="errors.has('firstName')">{{ errors.first('firstName') }}</span>
                  </label>

                  <label class="small-12 medium-auto cell">Last name
                    <input 
                      v-model="data.lastName" 
                      v-validate="'required'" 
                      :class="{'input': true, 'is-invalid-input': errors.has('lastName') }"
                      name="lastName" 
                      data-vv-as="Last name"
                      type="text">
                    <span 
                      class="alert" 
                      v-show="errors.has('lastName')">{{ errors.first('lastName') }}</span>
                  </label>
                </div>

                <div class="grid-x grid-margin-x">
                  <label class="small-12 medium-auto cell">Company
                    <input 
                      v-model="data.company" 
                      v-validate="'required'" 
                      :class="{'input': true, 'is-invalid-input': errors.has('company') }"
                      name="company" 
                      data-vv-as="Company"
                      type="text">
                    <span 
                      class="alert" 
                      v-show="errors.has('company')">{{ errors.first('company') }}</span>
                  </label>

                  <label class="small-12 medium-auto cell">Position
                    <input 
                      v-model="data.position" 
                      v-validate="'required'" 
                      :class="{'input': true, 'is-invalid-input': errors.has('position') }"
                      name="position" 
                      data-vv-as="Position"
                      type="text">
                    <span 
                      class="alert" 
                      v-show="errors.has('position')">{{ errors.first('position') }}</span>
                  </label>
                </div> 

                <label for="email">Your email
                  <input 
                    v-model="data.email" 
                    v-validate="'required|email'" 
                    :class="{'input': true, 'is-invalid-input': errors.has('email') }"
                    name="email" 
                    autocomplete="email"
                    data-vv-as="E-mail"
                    type="text" >
                  <span 
                    class="alert" 
                    v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </label>

                <label for="reason">Reason to join
                  <input 
                    v-model="data.reason" 
                    v-validate="'required'" 
                    :class="{'input': true, 'is-invalid-input': errors.has('reason') }"
                    name="reason" 
                    autocomplete="reason"
                    data-vv-as="Reaso to join"
                    type="text" >
                  <span 
                    class="alert" 
                    v-show="errors.has('reason')">{{ errors.first('reason') }}</span>
                </label>
                <button 
                  type="submit" 
                  href="#" 
                  class="button primary large mt-2">Sign up</button>
              </form>
            </div>

            <div 
              v-if="state === 'success' " 
              class="mb-7" 
              key="confirm">
              <h3 class="">Thank you for applying!</h3>
              
              <p>Please check your inbox and <strong>click a confirmation link,</strong>
                <br >to complete your registration.
              </p>
            </div>

            <div 
              v-if="state === 'error'" 
              class="mb-7" 
              key="error">
              <h3>Dang!</h3>
              <p>Something went wrong. Try again later or contact us on: 
              <a href="mailto:info@nonfungiblealliance.org">info@nonfungiblealliance.org</a></p>
              <p>{{ errors.first('response') }}</p>
              <a 
                @click="state = 'form'" 
                class="button hollow white"> &larr; Go back</a>
            </div>
          </transition>
        </div>

        <div class="cell show-for-medium medium-6 large-6 large-offset-1 align-bottom position-relative">
          <img 
            class="illustration" 
            src="/images/top-illustration.svg" 
            alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { handleServerError } from '~/mixins/handleServerError'
import vueScroll from 'vue-scrollto'

export default {
  data() {
    return {
      state: 'form',
      data: {
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        position: '',
        reason: '',
        templateId: '6d3ec5b5-2a8f-4577-b983-3a8702d90829',
        segment: 'Alliance',
        listId: '3983919'
      }
    }
  },

  methods: {
    submit: async function() {
      vueScroll.scrollTo('body')
      try {
        if (await this.$validator.validate()) {
          await this.$axios.$post('/newsletters/request', this.data)
          this.state = 'success'
        }
      } catch (err) {
        this.state = 'error'
        this.handleServerError(err)
        console.log('Error:' + err)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.introduction {
  align-items: flex-end;
  display: flex;
  padding-bottom: 6rem;
  color: $white;

  .grid-container {
    width: 100%;
  }

  p > a {
    color: $primary;
  }

  h1 {
    font-weight: 800;
    line-height: 1.3;

    @include breakpoint(medium) {
      margin-top: 1rem;
      font-size: 3rem;
    }
  }

  @include breakpoint(medium) {
    .intro {
      max-width: 550px;
      font-size: 20px;
    }
  }

  @include breakpoint(large) {
    min-height: 580px;
  }
}

.illustration {
  position: absolute;

  @include breakpoint(large) {
    bottom: -11rem;
  }
}
</style>
