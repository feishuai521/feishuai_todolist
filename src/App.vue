<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- 头部输入框 -->
    <haed-vue @totalld="totalld"></haed-vue>
    <div class="商品" style="text-align: left">
      <stcion-Vue v-for="item in tablist" :key="item.id" :titels="item" :shnchu="shnchu" :adds="adds" />
    </div>
    <foorter-Vue :tablist="tablist" @cikck="cikck" @chesc="chesc"></foorter-Vue>
  </div>
</template>

<script>
import foorterVue from './components/foorter.vue'
import haedVue from './components/haed.vue'
import stcionVue from './components/stcion.vue'
// import { data } from './Mock/index'
// stcionVue
// console.log(data)
// import HelloWorld from './components/HelloWorld.vue'
const tablist = JSON.parse(window.localStorage.getItem('tablist')) || []
export default {
  name: 'App',
  components: {
    // HelloWorld,
    haedVue,
    stcionVue,
    foorterVue,
  },
  data() {
    return {
      tablist,
    }
  },
  methods: {
    totalld(totall) {
      // const obj = []
      this.tablist.unshift(totall)
      // console.log('收到数据' + JSON.stringify(totall))
      // this
    },
    shnchu(id) {
      this.tablist = this.tablist.filter(res => res.id !== id)
      console.log(this.tablist)
    },
    adds(x) {
      // console.log(x)
      this.tablist.forEach(res => {
        if (res.id === x) res.donn = !res.donn
      })
      //   this.titels = this.text
    },
    updateTodo(x, a) {
      // console.log(x)
      this.tablist.forEach(res => {
        if (res.id === x) res.name = a
      })
      //   this.titels = this.text
    },
    cikck(res) {
      this.tablist.forEach(ress => {
        ress.donn = res
      })
    },
    chesc() {
      this.tablist = this.tablist.filter(res => {
        return !res.donn
      })
    },
    // updateTodo() {},
  },
  watch: {
    tablist: {
      deep: true,
      handler(value) {
        window.localStorage.setItem('tablist', JSON.stringify(value))
      },
    },
  },
  mounted() {
    this.$bus.$on('adds', this.adds)
    this.$bus.$on('updateTodo', this.updateTodo)
    this.$bus.$on('shnchu', this.shnchu)
  },
  beforeDestroy() {
    this.$bus.$off('adds')
    this.$bus.$off('updateTodo')
    this.$bus.$off('shnchu')
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  // display: flex;
  // justify-items: center;
  // align-content: center;
  color: #2c3e50;
  margin-top: 50px;
  width: 500px;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  // padding: 0 40px;
}
.商品 {
  margin: 0 20px;
  border: 1px solid #999;
}
</style>
