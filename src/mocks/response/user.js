import Mock from 'mockjs'
const Random = Mock.Random
export const user = options => {
  console.log(options)
  return {}
}

export const login = options => {
  console.log(options)
  const template = {
    code: 0,
    data: {
      'name|1-2': '登录成功',
      'string|2': '★★★',
      'age|1-100': 1,
      'number|1-100.2': 0,
      'boolean|1-2': true,
      'object|2': { '310000': '上海市', '320000': '江苏省', '3300000': '浙江省', '340000': '安徽省' },
      'array|1-3': [
        { 'name|+1': ['hello', 'world', '!'] }
      ],
      'func': function () {
        return this.name + '|func'
      },
      reg: /[a-z][A-Z][0-9]/,
      flag: '@boolean()',
      email: '@email()',
      natural: '@natural(1,100)',
      integer: '@integer(20,40)',
      range: '@range(1,10,2)',
      date: '@date(yyyy-MM-dd)',
      time: '@time()',
      image: Random.image('200×100', '#ff6600', '#fff', 'png', '!'),
      dataImage: '@dataImage()',
      color: '@color()',
      hex: '@hex()',
      text: '@paragraph(1,3)',
      city: '@city'
    }
  }
  return Mock.mock(template)
}
