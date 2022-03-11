<template>
  <div class="haed">
    <input type="text" name="" id="" placeholder="请输入文字后回车" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
let totall = new Array()
export default {
  name: 'header_vue',
  props: ['totalld'],
  data() {
    return {
      name: '111',
      //   list: [],
    }
  },
  methods: {
    add(text) {
      if (!text.target.value.trim()) return alert('输入不能为空')
      totall = { id: nanoid(), name: text.target.value, donn: false }
      //   this.list.unshift(totall)
      //   totall = JSON.stringify(totall)
      this.totalld(totall)
      text.target.value = ''
    },
  },
}
</script>

<style lang="less" scoped>
.haed {
  padding: 10px 0;
  margin: 0;
  input[type='text'] {
    width: 90%;
    height: 30px;
    // margin: 0 10px;
    text-align: center;
    border: 1px solid #9b59b6;
    outline-style: none;
  }
}
</style>
