<!--
 * @Author: 飞帅
 * @Date: 2022-03-10 20:53:36
 * @LastEditTime: 2022-03-24 20:01:23
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * The copyright belongs to Fei Shuai
-->
<template>
  <div class="stcion">
    <div>
      <div>
        <input type="checkbox" :checked="titels.donn" @change="add(titels.id)" />
        <span v-show="!titels.istrue">{{ titels.name }}</span>
        <input type="text" :value="titels.name" v-show="titels.istrue" @blur="hangbur(titels, $event)" ref="inputtext" />
      </div>
      <!-- <div><input type="checkbox" v-model="titels.donn" />{{ titels.name }}</div> -->
      <div class="删除" @click="remo(titels.id)"><span>删除</span></div>
      <div v-show="!titels.istrue" class="删除 编辑" @click="hanglder(titels)"><span>编辑</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textt',
  props: {
    titels: {
      type: Object,
      //   default: { id: 1, name: '抽烟', donn: true },
    },

    // },
  },
  created() {
    //   this.
  },
  methods: {
    add(x) {
      // this.adds(x)
      this.$bus.$emit('adds', x)
    },
    remo(id) {
      //   console.log(id)
      if (confirm('需要删除吗？')) {
        // this.shnchu(id)
        this.$bus.$emit('shnchu', id)
      }
    },
    hanglder(titel) {
      // console.log(titel)
      // this.titels.istrue = true
      if (Object.prototype.hasOwnProperty.call(titel, 'istrue')) {
        titel.istrue = true
      } else {
        this.$set(titel, 'istrue', true)
      }
      //异步获取input里的焦点
      this.$nextTick(() => this.$refs.inputtext.focus())
      // setTimeout(() => this.$refs.inputtext.focus(), 200)
    },
    hangbur(todo, e) {
      todo.istrue = false
      // console.log('updateTodo', todo.id, e.target.value)
      !e.target.value.trim() ? alert('输入不要是空') : this.$bus.$emit('updateTodo', todo.id, e.target.value)
    },
  },
}
</script>

<style lang="less" scoped>
.stcion {
  font-weight: 800;
  border-bottom: 1px solid #999;
  border-collapse: collapse;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: #dddddd;
    .删除 {
      display: block;
    }
  }
  div {
    div {
      float: left;
      padding: 6px 0;
      margin: 2px 5px;
    }
    //清理多余浮动不显示css样式
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  //   display: flex;
  .删除 {
    animation: 3s;
    display: none;
    float: right;
    border-radius: 5px;

    background-color: #e74c3c;
    cursor: pointer;
    span {
      display: block;
      margin: 0px 20px;
      color: #fff;
    }
  }
  .编辑 {
    background-color: #999;
  }
}
</style>
