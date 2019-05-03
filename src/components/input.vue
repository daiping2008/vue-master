<template>
  <div>
    <input type="text" :value="value" @input="handlerInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handlerInput (e) {
      const value = e.target.value
      this.$emit('input', value)
    }
  }
}
</script>
