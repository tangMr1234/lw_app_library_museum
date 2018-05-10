<template>
  <div class="details" style="height:100%;">
    <!-- 头部 -->
    <x-header :title="this.$route.name" @on-click-back="goBack" :left-options="{preventGoBack: true}"
              style="background-color:#409eff;">
    </x-header>
    <!-- 主体 -->
    <b-scroll class="wrapper" style="height:calc(100% - 46px);">
      <div class="content">
        <!-- 信息table -->
        <card>
          <x-table full-bordered slot="header">
            <tbody>
            <tr>
              <td width="40%">
                <img :src="src" style="display: block;width:100%;"/>
              </td>
              <td>{{commentName}}</td>
            </tr>
            </tbody>
          </x-table>
          <!-- 介绍 -->
          <div slot="content" class="card-padding">
            <p style="color:#999;font-size:12px;">长春长生</p>
            <p>
              长春长生生物科技有限责任公司（前身为长春长生生物科技股份有限公司）创立于1992年8月18日，是一家从事人用疫苗研发、生产、销售的国家高新技术企业。公司秉承“关爱生命，播种健康”的发展宗旨，一直努力致力于研发“国内一流，国际领先”的预防用生物制品，为广大人民群众的生命健康提供预防保障。</p>
          </div>
        </card>
        <!-- 生产疫苗种类 -->
        <divider>疫苗信息</divider>
        <group :gutter="0">
          <cell title="甲肝0.5ml-液安" is-link @click.native="show"></cell>
          <cell title="乙肝1ml-瓶" is-link @click.native="show"></cell>
          <cell title="流感0.5" is-link @click.native="show"></cell>
        </group>
      </div>
    </b-scroll>
    <div v-transfer-dom>
      <popup v-model="show1" style="height:100%;background:#fff;">
        <x-header :title="this.$route.name" @on-click-back="show" :left-options="{preventGoBack: true}"
                  style="background-color:#409eff;">
        </x-header>
        <div style="height:calc(100% - 46px);overflow: hidden;">
          <v-details style="height:100%;"></v-details>
        </div>
      </popup>
    </div>
  </div>
</template>

<script type="es6">
  import {
    TransferDom,
    Card,
    Divider,
    Popup,
    XHeader,
    Group,
    Cell,
    Loading,
    XTable
  } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Card, Divider, Popup, XHeader, Group, Cell, Loading, XTable,
      VDetails:
        resolve => {
          require(['@/views/Vaccin_Details/Vaccin_Details.vue'], resolve)
        }
    },
    data() {
      return {
        show1: false,
        src: "http://img1.imgtn.bdimg.com/it/u=1170036766,1916028111&fm=200&gp=0.jpg", //最终加载的详情的图片
        commentName: "乙肝-上海生物研究所-0.5ml-D-普醇10ug液安", //图片下的标题
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        let link = window.location.href.split("#");
        window.parent.postMessage('CloseLwYmdanan', link[0]);
      },
      //打开详情页
      show() {
        this.show1 = !this.show1;
      }
    },
    mounted() {
      this.loadingRemove();
    }
  }
</script>

<style scoped lang="less">
  .card-padding {
    padding: 15px;
  }
</style>
