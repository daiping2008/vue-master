<template>
  <div>
    <div v-for='v in list' :key='v.title'>
      <div>{{v.title}}</div>
      <v-menu v-if='v.children' :data='v.children'></v-menu>
    </div>
  </div>
</template>

<script>
import VMenu from '@/components/menu'
export default {
  name: 'menuPage',
  data () {
    return {
      list: [
        {
          title: '标题1'
        },
        {
          title: '标题2',
          children: [
            {
              title: '标题2-子标题1'
            },
            {
              title: '标题2-子标题2'
            }
          ]
        },
        {
          title: '标题3',
          children: [
            {
              title: '标题3-子标题1',
              children: [
                {
                  title: '标题3-子标题1-子标题1'
                },
                {
                  title: '标题3-子标题1-子标题2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    VMenu
  }
}
</script>

<style>

</style>
