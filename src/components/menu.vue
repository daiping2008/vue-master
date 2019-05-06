<template>
  <div>
    <div v-for='(v, idx) in data' :key='idx'>
      <div>{{v.title}}</div>
      <menu-item v-show='v.children' :data='v.children'></menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
