import Mock from 'mockjs'
import { login } from './response/user'
// import config from '@/config/config'

// Mock.mock(`${config.baseUrl}/login`, login)
Mock.mock(/\/login/, login)
// Mock.mock(/\/login/, { code: 0, data: { msg: '登录成功' } })

// 模拟请求5000ms延迟
// Mock.setup({ timeout: '1000-5000' })

export default Mock
