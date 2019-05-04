<template>
  <div class="home">
    {{app}}-{{username}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Home from '@/api/home'
const home = new Home()
export default {
  name: 'home',
  mounted () {
    home.getUser().then(res => {
      console.log(res)
    })
    home.login().then(res => {
      console.log(res)
    })
  },
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
