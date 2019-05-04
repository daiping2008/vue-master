<template>
  <div class="about">
    <v-input :value="value" @input="handlerInput"></v-input>
    <div>{{value}}</div>
    <button @click="handleClick">改变state中的App</button>
    <div>{{app}}</div>
    <div>{{username}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VInput from '@/components/input'
import axios from 'axios'
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    axios.get('/user')
  },
  computed: {
    ...mapGetters(['app', 'username'])
  },
  methods: {
    ...mapActions(['setApp']),
    handlerInput (value) {
      this.value = value
    },
    handleClick () {
      this.setApp({ username: 'D' })
    }
  },
  components: {
    VInput
  }
}
</script>
