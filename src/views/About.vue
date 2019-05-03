<template>
  <div class="about">
    <v-input :value="value" @input="handlerInput"></v-input>
    <div>{{value}}</div>
  </div>
</template>

<script>
import VInput from '@/components/input'
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handlerInput (value) {
      this.value = value
    }
  },
  components: {
    VInput
  }
}
</script>
