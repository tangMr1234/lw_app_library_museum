<template>
  <div style="width:100%;height: 100%;overflow: hidden;">
    <x-header slot="header" :title="this.$route.name"
              style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#409eff;">
      <a slot="right" style="color:#fff;" @click="showPopupFilter">
        <i class="iconfont icon-sousuo" style="font-size:20px;"></i>
        <small style="vertical-align: top;">筛选</small>
      </a>
    </x-header>
    <!-- 数据展示列表 -->
    <b-scroll class="wrapper" style="height: 100%;">
      <div class="content">
        <new-pannel :list="list" @on-click-item="showPopupComment"></new-pannel>
        <new-loading v-show="loadingShow" style="position:absolute;width:100%;top:0;left:0;"></new-loading>
      </div>
    </b-scroll>
    <!-- 详情弹出层 -->
    <p-filter ref="popup" :popupWidth="popupWidth">
      <s-frame slot="Popup" @reset="show" v-if="PopupShow=='comment'" :id="id"></s-frame>
      <s-filter slot="Popup" @reset="submitLoad" v-if="PopupShow=='filter'"></s-filter>
    </p-filter>
  </div>
</template>

<script type="es6">
  import {Group, Cell, XHeader} from 'vux'
  import NewLoading from '@/components/loading.vue';
  import NewPannel from '@/components/newPannel.vue';

  export default {
    components: {
      Group,
      Cell,
      NewLoading,
      NewPannel,
      XHeader,
      PFilter: resolve => {
        require(['@/components/popupFilter.vue'], resolve)
      },
      SFrame: resolve => {
        require(['@/views/Frame.vue'], resolve)
      },
      SFilter: resolve => {
        require(['@/views/Popup/Filter.vue'], resolve)
      }
    },
    data() {
      return {
        PopupShow: "",//判断加载哪个组件
        popupWidth: '100%', //弹出层的宽度设置
        loadingShow: true,
        list: [{
          id: '1',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2077675532,266705430&fm=58&bpow=599&bpoh=541',
          title: '北京北生研生物制品股份有限公司(原北京天坛)',
          link: '',
          desc_meta: [
            {label: '甲肝',},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
          ]
        }, {
          id: '1',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2077675532,266705430&fm=58&bpow=599&bpoh=541',
          title: '长春长生',
          link: '',
          desc_meta: [
            {label: '甲肝',},
            {label: '乙肝'},
            {label: '流感'}
          ]
        }, {
          id: '1',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2077675532,266705430&fm=58&bpow=599&bpoh=541',
          title: '上海生物',
          link: '',
          desc_meta: [
            {label: '甲肝',},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
          ]
        }, {
          id: '1',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2077675532,266705430&fm=58&bpow=599&bpoh=541',
          title: '上海生物',
          link: '',
          desc_meta: [
            {label: '甲肝',},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
          ]
        }, {
          id: '1',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2077675532,266705430&fm=58&bpow=599&bpoh=541',
          title: '上海生物',
          link: '',
          desc_meta: [
            {label: '甲肝',},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
            {label: '乙肝'},
            {label: '流感'},
            {label: '乙肝'},
          ]
        }],
        id: ""
      }
    },
    mounted() {
      if (!sessionStorage.getItem('warn')) {
        this.alert("提示", "试用应用的演示数据，仅供APP体验，试用期间该弹窗可暂时关闭！", "知道了", this.setSession); //使用main中的全局方法调用弹窗
      }

      this.loadingRemove();
      this.getIndexData();
    },
    methods: {
      //设置sessionstorage来打开warn弹窗
      setSession() {
        sessionStorage.setItem('warn', 'yes');
      },
      //打开详情
      showPopupComment(item) {
        this.PopupShow = "comment";
        this.popupWidth = "100%";
        this.id = item.id;
        this.show();
      },
      //打开筛选
      showPopupFilter() {
        this.PopupShow = "filter";
        this.popupWidth = "87%";
        this.show();
      },
      //打开详情
      show() {
        this.$refs.popup.show(); //  调用子组件的方法
      },
      //左侧菜单点击事件
      leftMenuClick(index, id) {
        this.Menu.selectItem = index;
        this.getIndexData();
      },
      //加载数据&&初始化
      getIndexData() {
        this.loadingShow = true; //数据加载时的loading
        setTimeout(() => {
          this.loadingShow = false;
        }, 500);
      },
      //弹出的子组件filter调用的父组件index的方法
      submitLoad() {
        this.show();
        this.getIndexData();
      }
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  img {
    width: 100%;
  }
</style>
<style>
  .leftMenuActive {
    background: #fff !important;
  }
</style>
