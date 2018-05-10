<template>
  <div style="background: #fff;height:100%;">
    <x-header slot="header" :title="this.$route.name" @on-click-back="goBack" :left-options="{preventGoBack: true}"
              style="width:100%;background-color:#409eff;">
    </x-header>
    <div style="height: calc(100% - 46px);overflow-x: hidden;-webkit-overflow-scrolling : touch;">
      <v-details></v-details>
    </div>
  </div>
</template>

<script type="es6">
  import {XHeader} from 'vux'

  export default {
    components: {
      XHeader,
      VDetails: resolve => {
        require(['@/views/Vaccin_Details/Vaccin_Details.vue'], resolve)
      }
    },
    data() {
      return {}
    },
    methods: {
      //  通过postMessage调用iframe父组件的方法
      goBack() {
        let link = window.location.href.split("#");
        window.parent.postMessage('CloseLwYmdanan', link[0]);
      }
    },
    mounted() {
      this.loadingRemove(); //  使用main中的全局方法关闭loading
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">

</style>
