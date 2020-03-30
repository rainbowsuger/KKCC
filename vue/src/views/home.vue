<template>
  <div class="container">
    <div class="block-nav"><van-icon name="fire" color="#fff" />kkcc</div>
    <div  class="block-tabs">
      <div v-for="(item, index) in tabsList" :key="index" style="width: 32vw;" @click="gotoItem(item)">
        <van-icon :name="item.icon" color="#dca855" size="16"/>
        <div class="title">{{item.title}}</div>
        <div style="color: #9e9ca1;">{{item.label}}</div>
      </div>
    </div>
    <div class="block-nav block-footer"><van-icon name="fire" color="#fff" />kkcc</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tabsList: [
        {
          title: 'axios',
          icon: 'star',
          label: 'axios的封装调用',
          url: '/axios',
        },
        {
          title: 'axios',
          icon: 'point-gift',
          label: 'axios的封装调用',
          url: '/axios',
        },
      ],
    };
  },
  methods: {
    gotoItem(item) {
      this.$router.push({ path: item.url });
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .block-nav {
    height: 10vw;
    color: #fff;
    font-size: 18px;
    padding: 5px;
    background: #9f7f4c;
    opacity: 0.8;
  }
  .block-footer {
    line-height: 17vw;
    text-align: right;
  }
  .block-tabs {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
    margin: 10px;
    .title {
      font-size: 14px;
    }
  }
}
</style>
