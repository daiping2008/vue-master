import axios from 'axios'

import { tips, handleError } from './error'

import config from '../config/config'

axios.interceptors.request.use(config => {
  // 添加Loading
  return config
}, err => {
  console.log(err)
  return err
})
axios.interceptors.response.use(config => {
  // 删除Loading
  return config
}, err => {
  console.log(err)
  return err
})
class HttpReuest {
  request (url, data, method = 'GET') {
    return new Promise((resolve, reject) => {
      axios({
        url: config.baseUrl + url,
        // url,
        data,
        method,
        headers: {}
        // timeout: 2000
      }).then(res => {
        const { status, data } = res
        if (status === 200) {
          if (data.code === 0) {
            resolve(data.data)
          } else {
            // 统一做错误处理
            const tip = tips[data.code] ? tips[data.code] : tips[1]
            handleError(tip)
          }
        } else {
          handleError(tips[1])
          reject(new Error())
        }
      })
        .catch(err => {
          handleError(tips[1])
          reject(err)
        })
    })
  }
}

export default HttpReuest
