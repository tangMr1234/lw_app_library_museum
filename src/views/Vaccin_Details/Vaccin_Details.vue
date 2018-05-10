<template>
  <div style="background: #fff;height:100%;">
    <b-scroll class="wrapper" style="height: 100%;">
      <div class="content">
        <!-- 顶部图文标题 -->
        <div v-for="(item, index) in app_data" :key="index">
          <flexbox v-for="(data, index) in item.app" :key="index">
            <flexbox-item :span="2/5"><img :src="data.icon" alt="" style="width:100%;"></flexbox-item>

            <flexbox-item>
              <h2 style="font-size:22px;">乙肝-0.5</h2>
              <div>一类苗</div>
              <div>长春长生制药</div>

            </flexbox-item>
          </flexbox>
        </div>
        <!-- 轮播软件截图 -->
        <div style="margin-top:10px;">
          <swiper :options="swiperOptionBanner" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(data, index) in list"><img
              :src="data.src"
              width="100%" style="display:block;" @click="show(index)" class="previewer-demo-img"></swiper-slide>
          </swiper>
        </div>
        <div v-transfer-dom>
          <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>
        <!-- 应用介绍 -->
        <card>
          <div slot="content" class="card-padding">
            <p>疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍疫苗介绍 疫苗介绍</p>
          </div>
        </card>
        <!-- 评分评论栏目 -->
        <group :gutter="10">
          <cell title="查看疫苗说明书" style="color:#409eff;" @click.native="show(1)" is-link></cell>
        </group>
        <!-- 评价信息 -->
        <card style="background: #eee;margin:10px;border-radius:5px;">
          <div slot="header">
            <cell>
              <b slot="title" style="font-size:20px;">批签发 </b>
              <div slot="default">
                2018年03月1日
              </div>
            </cell>
          </div>
          <div slot="content" style="padding:0 15px 15px;">
            批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发批签发
          </div>
        </card>
        <!-- 滚动栏目 -->
        <tab>
          <tab-item @on-item-click="tabChange" selected>使用情况</tab-item>
          <tab-item @on-item-click="tabChange">注意事项</tab-item>
          <tab-item @on-item-click="tabChange">常见反映</tab-item>
          <tab-item @on-item-click="tabChange">厂家</tab-item>
        </tab>
        <swiper :options="swiperOptionTab" ref="mySwiperTab">
          <!-- slides -->
          <swiper-slide v-for="data in 4" :key="data">
            <card>
              <div slot="header">
                <cell>
                  <b slot="title" style="font-size:20px;">tab{{data}} </b>
                  <div slot="default">
                    2018年03月1日
                  </div>
                </cell>
              </div>
              <div slot="content" style="padding:0 15px 15px;">
                内容{{data}}
              </div>
            </card>
          </swiper-slide>
        </swiper>
        <!-- 信息 -->
        <card style="margin-bottom:30px;">
          <div slot="header" style="font-size:24px;margin:0 20px;">
            信息
          </div>
          <div slot="content" class="card-padding" style="background: #eee;margin:0 15px;border-radius:5px;">
            <p>开发商：上海冷王</p>
            <p>分组：冷链监测</p>
            <p>类别：APP</p>
            <p>版本：3.0.1（2018-04-17）</p>
          </div>
        </card>
      </div>
    </b-scroll>
  </div>
</template>

<script type="es6">
  import {
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Group,
    Cell,
    Card,
    Previewer,
    TransferDom
  } from 'vux'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {getMessage} from '@/api/api';

  export default {
    directives: {
      TransferDom
    },
    components: {
      Flexbox, FlexboxItem, Tab, TabItem, Group, Cell, swiper, swiperSlide, Card, Previewer
    },
    data() {
      return {
        list: [{
          msrc: 'http://pic.qiantucdn.com/58pic/27/16/37/59s58PICYW6_1024.jpg!qt324',
          src: 'http://pic.qiantucdn.com/58pic/27/16/37/59s58PICYW6_1024.jpg!qt324'
        },
          {
            msrc: 'http://pic.qiantucdn.com/58pic/28/18/74/41r58PICHT3_1024.jpg!qt324',
            src: 'http://pic.qiantucdn.com/58pic/28/18/74/41r58PICHT3_1024.jpg!qt324'
          }, {
            msrc: 'http://pic.qiantucdn.com/58pic/28/39/97/31y58PIC8iu_1024.jpg!qt324',
            src: 'http://pic.qiantucdn.com/58pic/28/39/97/31y58PIC8iu_1024.jpg!qt324'
          }, {
            msrc: 'http://pic.qiantucdn.com/58pic/26/57/30/98F58PICXt6_1024.jpg!qt324',
            src: 'http://pic.qiantucdn.com/58pic/26/57/30/98F58PICXt6_1024.jpg!qt324'
          }, {
            msrc: 'http://pic.qiantucdn.com/58pic/27/60/07/12458PICKTJ_1024.jpg!qt324',
            src: 'http://pic.qiantucdn.com/58pic/27/60/07/12458PICKTJ_1024.jpg!qt324'
          }],
        options: {
          getThumbBoundsFn(index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        },
        //轮播初始化,使用swiper4插件,具体Api可查看手册
        swiperOptionBanner: {
          autoplay: false,
          spaceBetween: 20,
          slidesPerView: 1.2,
          slidesOffsetBefore: 20,
          slidesOffsetAfter: 20,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
        },
        //tab轮播初始化
        swiperOptionTab: {
          autoplay: false,
          slidesPerView: 1,
          allowTouchMove: false, //禁止滑动、滚动
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
        },
        app_data: [
          {
            label: "冷链监测",
            link: "detail",
            app: [
              {
                id: 1,
                icon: "https://dev4.coldyun.com/static/images/icon/icon_ll_cljc.png",
                title: "管理评估表",
                content: "到期时间：2018年11月30日"
              }
            ]
          }
        ]
      }
    },
    //获取swiper对其进行操作
    computed: {
      swiper() {
        return this.$refs.mySwiperTab.swiper
      }
    },
    methods: {
      //tab切换
      tabChange(index) {
        this.swiper.slideTo(index, 300, false);
      },
      show(index) {
        this.$refs.previewer.show(index)
      },
      logIndexChange(arg) {
        console.log(arg)
      },
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
  .card-padding {
    padding: 15px;
  }
</style>
