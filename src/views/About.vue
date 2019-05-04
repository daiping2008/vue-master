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
    axios.interceptors.request.use(config => {
      console.log(config)
      return config
    }, err => {
      console.log(err)
      return Promise.reject(err)
    })

    axios.interceptors.response.use(config => {
      console.log(config)
      return config
    }, err => {
      console.log(err)
      return Promise.reject(err)
    })
    axios.get('/user?id=123').then(res => {
      console.log(res)
    })

    axios.post('/login', {
      username: 'Susan',
      pwd: 1024
    })

    // axios.all([this.getUser(), this.postLogin()])
    //   .then(axios.spread((acct, perms) => {
    //     console.log(acct, perms)
    //   }))

    // axios({
    //   url: '/user?id=124',
    //   method: 'GET'
    // })
    // axios({
    //   url: '/login',
    //   method: 'POST',
    //   data: {
    //     username: 'Susan',
    //     pwd: 123
    //   }
    // })

    // axios('/user', {
    //   method: 'GET',
    //   params: {
    //     id: 123
    //   }
    // })
    // axios('/login', {
    //   method: 'POST',
    //   data: {
    //     username: 'Susan',
    //     pwd: 123
    //   }
    // })
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
    },
    getUser () {
      return axios.get('/user?id=123')
    },
    postLogin () {
      return axios.post('/login', {
        username: 'Susan',
        pwd: 123
      })
    }
  },
  components: {
    VInput
  }
}
</script>
