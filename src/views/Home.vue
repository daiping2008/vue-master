<template>
  <div class="home">
    {{app}}-{{username}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters(['app', 'username'])
    // ...mapState('user', {
    //   username: state => state.username
    // })
    // app () {
    //   return this.$store.state.app
    // },
    // username() {
    //   return this.$store.state.user.username // 模块
    // }
  }
}
</script>
