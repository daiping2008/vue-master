import HttpRequest from '@/lib/axios'

class Home extends HttpRequest {
  getUser () {
    return this.request('/user')
  }

  login () {
    return this.request('/login', { username: 'Susan', pwd: 12 }, 'POST')
  }
}

export default Home
