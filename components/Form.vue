<template lang="html">
  <div class="newsletter">
    <transition 
      mode="out-in" 
      name="layout"
    >
      <div 
        v-if="state === 1" 
        class="confirm" 
        key="confirm"
      >
        <h3 class="text-center">
          Thank you for applying!
        </h3>
        
        <p class="text-center">
          Please check your inbox and <strong>click a confirmation link,</strong>
          <br>to complete your registration.
        </p>
      </div>

      <div 
        v-if="state === 2" 
        class="confirm" 
        key="error"
      >
        <h3 class="text-center">
          Ooops!
        </h3>
        <p class="text-center">
          Something went wrong. Try again later.
        </p>
        <p><a @click="state = 0"> &larr; Go back</a></p>
      </div>
      
      <div 
        v-if="state === 0" 
        key="form"
      >
        <h3 
          v-if="!noTitle" 
          class="text-center"
        >
          Sign up for newsletter
        </h3>
        <form 
          @submit.prevent="submit" 
          novalidate
        >
          <div class="field-group">
            <input 
              v-model="data.email" 
              v-validate="'required|email'" 
              :class="{'input': true, 'is-invalid-input': errors.has('email') }"
              name="email" 
              autocomplete="email"
              placeholder="Your email"
              data-vv-as="E-mail"
              type="text"
            >
      
            <button 
              class="button primary" 
              type="submit" 
              :disabled="!privacy"
            >
              Subscribe
            </button>
          </div>
          <span 
            class="alert" 
            v-show="errors.has('email')"
          >{{ errors.first('email') }}</span>
          <div class="agreements">
            <div class="checkbox">
              <input 
                v-model="privacy" 
                id="privacy" 
                name="privacy" 
                type="checkbox"
              >
              <label for="privacy">
                I accept <a 
                  href="privacypolicy.pdf" 
                  target="_blank"
                >Privacy Policy</a> 
              </label>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    noTitle: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      privacy: false,
      state: 0,
      data: {
        email: '',
        fromDomain: 'nonfungiblealliance.org',
        templateId: '5645a407-d645-4f87-837c-16e2e6845f5b',
        segment: 'Alliance - newsletters',
        listId: '3983919'
      }
    }
  },

  methods: {
    submit: function(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$axios
            .post('/newsletters/request', this.data)
            .then(response => {
              this.state = 1
            })
            .catch(error => {
              this.state = 2
            })
        }
      })
    }
  }
}
</script>

<style lang="scss">
label {
  color: inherit;
}

.field-group {
  display: flex;
  flex-wrap: wrap;

  @include breakpoint(small only) {
    flex-flow: column wrap;
  }

  input {
    flex-grow: 1;
    background: $white;
    padding: 1rem 2rem;
    width: auto;
    height: auto;
    margin: 0;

    &:focus {
      outline: none;
    }
  }

  button {
    flex-shrink: 1;
    text-transform: uppercase;
    justify-content: center;
    margin-top: 1rem;
    margin-left: -4px;
    margin-bottom: 0;
    box-shadow: none;
    z-index: 2;
    position: relative;

    &:hover {
      transform: none;
    }

    @include breakpoint(medium) {
      margin-top: 0;
    }
  }

  .help {
    padding-top: 8px;
    color: $white;
    font-size: 0.9rem;
  }
}

.agreements {
  font-size: 15px;
  margin-top: 2rem;

  a {
    text-decoration: underline;
    color: inherit;
  }
}
</style>
