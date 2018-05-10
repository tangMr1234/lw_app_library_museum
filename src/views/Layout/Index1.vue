<template>
  <div style="width:100%;height: 100%;overflow: hidden;">
    <x-header slot="header" :title="this.$route.name" @on-click-back="goBack" :left-options="{preventGoBack: true}"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#409eff;">
    </x-header>
    <!-- 数据展示列表 -->

    <b-scroll class="wrapper" style="height:100%;">
      <div class="content">

        <flexbox align="flex-start" style="height: 100%;overflow: hidden;width:calc(100% - 16px);margin:10px auto 0;">
          <flexbox-item style="height: 200px;background:#53bee8;color:#fff;">
            动态
          </flexbox-item>
          <flexbox-item style="height: 200px;">
            <flexbox orient="vertical">
              <flexbox-item style="height:100px;background:#5ac5a9;color:#fff;">
                疫苗信息
              </flexbox-item>
              <flexbox-item style="height:100px;background:#fabe76;color:#fff;">
                厂家信息
              </flexbox-item>
            </flexbox>

          </flexbox-item>
        </flexbox>

        <flexbox align="flex-start" style="height: 100%;overflow: hidden;width:calc(100% - 16px);margin:10px auto 0;">

          <flexbox-item style="height: 200px;background:#9295f4;color:#fff;">
            动态
          </flexbox-item>
        </flexbox>
        <flexbox align="flex-start" style="height: 100%;overflow: hidden;width:calc(100% - 16px);margin:10px auto 0;">
          <flexbox-item style="height: 200px;">
            <flexbox orient="vertical">
              <flexbox-item style="height:100px;background:#f4a4e1;color:#fff;">
                疫苗信息
              </flexbox-item>
              <flexbox-item style="height:100px;background:#89d5d5;color:#fff;">
                厂家信息
              </flexbox-item>
            </flexbox>

          </flexbox-item>
          <flexbox-item style="height: 200px;background:blue;color:#fff;">
            动态
          </flexbox-item>
        </flexbox>
        <flexbox align="flex-start" style="height: 100%;overflow: hidden;width:calc(100% - 16px);margin:10px auto;">
          <flexbox-item style="height:100px;background:red;color:#fff;">
            厂家信息
          </flexbox-item>
          <flexbox-item style="height: 100px;background:blue;color:#fff;">
            动态
          </flexbox-item>
        </flexbox>
      </div>
    </b-scroll>
  </div>
</template>

<script type="es6">
  import {Group, Cell, Flexbox, FlexboxItem, Panel, XHeader} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      Panel,
      XHeader
    },
    data() {
      return {
        data: [
          {type: 'half', label: "疫苗信息"},
          {
            type: 'half', label: "疫苗信息",
            other: [
              {type: 'half', label: "疫苗信息"},
              {type: 'all', label: "厂家信息"},
            ]
          },
        ]
      }
    },
    mounted() {
      if (!sessionStorage.getItem('warn')) {
        this.alert("提示", "试用应用的演示数据，仅供APP体验，试用期间该弹窗可暂时关闭！", "知道了", this.setSession); //使用main中的全局方法调用弹窗
      }

      this.loadingRemove();
    },
    methods: {
      //设置sessionstorage来打开warn弹窗
      setSession() {
        sessionStorage.setItem('warn', 'yes');
      },
      //  通过postMessage调用iframe父组件的方法
      goBack() {
        let link = parent.window.location.href.split("#");
        window.parent.postMessage('closeLwFrame', link[0]);
      }
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  img {
    width: 100%;
  }
</style>
