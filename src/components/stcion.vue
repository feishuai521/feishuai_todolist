<template>
  <div class="stcion">
    <div>
      <div><input type="checkbox" :checked="titels.donn" @change="add(titels.id)" />{{ titels.name }}</div>
      <!-- <div><input type="checkbox" v-model="titels.donn" />{{ titels.name }}</div> -->

      <div class="删除" @click="remo(titels.id)"><span>删除</span></div>
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
    shnchu: {
      type: Function,
    },
    adds: {
      type: Function,
    },
    // dn: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  //   data() {
  //     return {
  //       text: this.titels,
  //     }
  //   },
  created() {
    //   this.
  },
  methods: {
    add(x) {
      this.adds(x)
    },
    remo(id) {
      //   console.log(id)
      if (confirm('需要删除吗？')) {
        this.shnchu(id)
      }
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
}
</style>
