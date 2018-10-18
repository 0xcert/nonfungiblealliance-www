<template>
  <label> {{ label }}
    <input 
      :class="{'input': true, 'is-invalid-input': errors.has(name) }"
      :name="name" 
      :data-vv-as="[alias ? alias : label]"
      :value="value"
      @input="$emit('updateInput', $event.target.value)"
      :type="type" 
      v-validate="validation" 
      :placeholder="placeholder"/>
    <span class="alert" v-show="errors.has(name)">{{ errors.first(name) }}</span>
  </label>
</template>

<script>
  export default {
    props: {
      name: String,
      label: String,
      placeholder: String,
      value: String,
      alias: String,
      validation: {
        type: String,
        default: 'required'
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    model: {
      prop: 'value',
      event: 'updateInput'
    }
  }
</script>

<style scoped>

</style>