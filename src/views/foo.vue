<template>
  <div>
    <div>foo</div>
    <button @click="handleClick">Click</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello world')
    }
  }
}
</script>
