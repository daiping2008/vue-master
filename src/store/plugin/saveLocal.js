export default store => {
  console.log('store 初始化')
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log(mutation)
  })
}
