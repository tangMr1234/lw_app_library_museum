<template>
  <div class="xHeaderRight" style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px">
      <router-view></router-view>
      <!-- 底栏菜单 -->
      <tabbar slot="bottom"
              v-for="(data,index) in $router.options.routes" v-if="!data.hidden&&$route.meta.tabbar!=false">
        <tabbar-item v-if="!item.hidden" v-for="(item,index) in data.children"
                     :link="item.path"
                     :badge="item.badge"
                     :show-dot="item.showDot"
                     :selected="active() === item.path">
          <i class="iconfont" :class="item.icon" slot="icon"></i>
          <span slot="label">{{item.name}}</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script type="es6">
  import {ViewBox, Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      ViewBox, Tabbar, TabbarItem
    },
    data() {
      return {}
    },
    methods: {
      //设置底栏高亮项
      active() {
        return '/' + this.$route.path.split("/")[1];
      },
    },
    mounted() {

    }
  }
</script>
<style>

</style>
