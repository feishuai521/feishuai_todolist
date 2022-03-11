<template>
  <div class="foorter">
    <div>
      <div align="left">
        <input type="checkbox" name="" id="" class="footer_qb" v-model="iall" />
        <span>已完成{{ dels }}/全部{{ qb }}</span>
      </div>
      <div class="删除" @click="sc"><span>删除</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foorter',
  props: ['tablist', 'cikck', 'chesc'],

  computed: {
    qb() {
      return this.tablist.length
    },
    dels() {
      return this.tablist.reduce((pre, cur) => pre + (cur.donn ? 1 : 0), 0)
    },
    iall: {
      get() {
        return this.dels === this, this.qb && this.tablist > 0
      },
      set(vaue) {
        console.log(vaue)
        // this.cikck(vaue)
        this.$emit('cikck', vaue)
      },
    },
  },
  methods: {
    // checkall(eve) {},
    sc() {
      // this.chesc()
      this.$emit('chesc')
      alert('删除成功')
    },
  },
}
</script>

<style lang="less" scoped>
.foorter {
  margin: 20px;
  padding: 0px 0 30px 0;
  div {
    padding: 10px 0;
    div {
      float: left;
      //   display: inline-block;
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
  }
  .foorter_qb {
    span {
      display: inline-block;
      // text-align: left;
      margin-left: 10px;
    }
  }
  .删除 {
    animation: 3s;
    // display: none;
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
