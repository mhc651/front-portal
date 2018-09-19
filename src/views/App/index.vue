<template>
  <div class="main--fluids portal">
    <!-- content -->
    <div class="container">

      <header class="app-head">
        应用中心
        <span class="text--small text--ccc">以下为已开通应用，如需其他应用请至应用中心开通</span>
      </header>
      <div class="kto">
        <span class="circle"></span>
        <span>已开通</span>
      </div>
      <!-- app list -->
      <ul class="flex list--unstyled app-list flex--wrap  ">
        <!-- cell  -->
        <!--<li class="col&#45;&#45;4 app-cell" v-for="val of app.appData" :key="val.index">-->
          <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
            <!--<div class="app-cell_img" v-if="val.logoFile">-->
              <!--<img :src="val.logoFile.url">-->
            <!--</div>-->
            <!--<h2>{{ val.name }}</h2>-->
            <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">{{ val.remark }}</p>-->
            <!--<a class="btn" @click='gotopage(val.url)' ><span class="btn_icon">→</span>立刻前往</a>-->
          <!--</div>-->
        <!--</li>-->
        <!--<span>{{apps}}</span>-->

        <li class="col--4 app-cell" v-if="apps!=1" v-for="item in apps.openApps">
          <!--<span>{{item}}</span>-->
          <div class="app-cell_con flex  flex--center flex--column">
            <div class="app-cell_img">
              <i class="icon hx  text--blue fontsst" :class="item.icon"></i>
            </div>
            <h2 class="h2h">{{item.name}}</h2>
            <p class="app-cell_remark text--small text--ccc">{{item.desc}}</p>
            <a class="btn rgo" @click='gotopage(item.url)' ><span class="btn_icon">→</span>立刻前往</a>
          </div>
        </li>

        <!--<li class="col&#45;&#45;4 app-cell">-->
          <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
            <!--<div class="tipo">-->
              <!--<div class="tipdueo">-->
                <!--<span class="due">即将到期的</span>-->
                <!--<span class="arrow-up"></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="app-cell_img">-->
              <!--<i class="icon hx hx-hx__p_haocaijiesuan text&#45;&#45;blue fontsst"></i>-->
            <!--</div>-->
            <!--<h2>机构管理中心</h2>-->
            <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">药品基本资料及资质的申报、变-->
              <!--更、查询、编码及对照等</p>-->
            <!--<a class="btn rgo" @click='gotopage()' ><span class="btn_icon">→</span>立刻前往</a>-->
          <!--</div>-->
        <!--</li>-->

        <!-- cell  end-->
      </ul>
      <div class="kto">
        <span class="circle"></span>
        <span>未开通</span>
      </div>

      <ul class="flex list--unstyled app-list flex--wrap  ">
        <!-- cell  -->
        <!--<li class="col&#45;&#45;4 app-cell" v-for="val of app.appData" :key="val.index">-->
        <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
        <!--<div class="app-cell_img" v-if="val.logoFile">-->
        <!--<img :src="val.logoFile.url">-->
        <!--</div>-->
        <!--<h2>{{ val.name }}</h2>-->
        <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">{{ val.remark }}</p>-->
        <!--<a class="btn" @click='gotopage(val.url)' ><span class="btn_icon">→</span>立刻前往</a>-->
        <!--</div>-->
        <!--</li>-->

        <li class="col--4 app-cell" v-if="apps!=1" v-for="item in apps.notOpenApps">
          <div class="app-cell_con flex  flex--center flex--column" v-if="item.audit_status=='待审核'">
            <div class="tipo">
              <div class="tipaudit">
                <span class="due">待审核</span>
                <span class="arrow-up"></span>
              </div>
            </div>
            <div class="app-cell_img">
              <i class="icon hx   text--grayt fontsst" :class="item.icon"></i>
            </div>
            <h2 class="h2h">{{item.name}}</h2>
            <p class="app-cell_remark text--small text--ccc">{{item.desc}}</p>
            <a class="btn auditbc" @click='gotopage(item.url)' ><span class="btn_icon">→</span>查看开通状态</a>
          </div>

          <div class="app-cell_con flex  flex--center flex--column" v-else-if="item.audit_status=='审核不通过'">
            <div class="tipo">
              <div class="tipunpass">
                <span class="due">审核不通过</span>
                <span class="arrow-up"></span>
              </div>
            </div>
            <div class="app-cell_img">
              <i class="icon hx  text--red fontsst" :class="item.icon"></i>
            </div>
            <h2 class="h2h">{{item.name}}</h2>
            <p class="app-cell_remark text--small text--ccc">{{item.desc}}</p>
            <a class="btn uppassbc" @click='gotopage(item.url)' ><span class="btn_icon">→</span>查看开通状态</a>
          </div>

          <div class="app-cell_con flex  flex--center flex--column" v-else>
            <div class="tipo">
              <div class="tipunopen">
                <span class="due">未开通</span>
                <span class="arrow-up"></span>
              </div>
            </div>
            <div class="app-cell_img">
              <i class="icon hx   text--gray fontsst" :class="item.icon"></i>
            </div>
            <h2 class="h2h">{{item.name}}</h2>
            <p class="app-cell_remark text--small text--ccc">{{item.desc}}</p>
            <a class="btn unopenbc" @click='gotopage(item.url)' ><span class="btn_icon">→</span>马上开通</a>
          </div>

        </li>

        <!--<li class="col&#45;&#45;4 app-cell">-->

          <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
            <!--<div class="tipo">-->
              <!--<div class="tipaudit">-->
                <!--<span class="due">待审核</span>-->
                <!--<span class="arrow-up"></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="app-cell_img">-->
              <!--<i class="icon hx  hx-hx__p_qiyezhongxin text&#45;&#45;grayt fontsst"></i>-->
            <!--</div>-->
            <!--<h2>耗材配送结算</h2>-->
            <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">产品编码对照、订单处理、客户-->
              <!--管理、对帐结算、统计分析</p>-->
            <!--<a class="btn auditbc" @click='gotopage()' ><span class="btn_icon">→</span>查看开通状态</a>-->
          <!--</div>-->
        <!--</li>-->

        <!--<li class="col&#45;&#45;4 app-cell">-->
          <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
            <!--<div class="tipo">-->
              <!--<div class="tipinreview">-->
                <!--<span class="due">审核中</span>-->
                <!--<span class="arrow-up"></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="app-cell_img">-->
              <!--<i class="icon hx hx-hx__p_haocaijiesuan text&#45;&#45;yellow fontsst"></i>-->
            <!--</div>-->
            <!--<h2>药品议价</h2>-->
            <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">药品议价项目查看、报名、报价、-->
              <!--加解密、公示、查询等</p>-->
            <!--<a class="btn inreviewbc" @click='gotopage()' ><span class="btn_icon">→</span>查看开通状态</a>-->
          <!--</div>-->
        <!--</li>-->

        <!--<li class="col&#45;&#45;4 app-cell">-->
          <!--<div class="app-cell_con flex  flex&#45;&#45;center flex&#45;&#45;column">-->
            <!--<div class="tipo">-->
              <!--<div class="tipunpass">-->
                <!--<span class="due">审核不通过</span>-->
                <!--<span class="arrow-up"></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="app-cell_img">-->
              <!--<i class="icon hx hx-hx__p_haocaijiesuan text&#45;&#45;red fontsst"></i>-->
            <!--</div>-->
            <!--<h2>药品议价</h2>-->
            <!--<p class="app-cell_remark text&#45;&#45;small text&#45;&#45;ccc">药品议价项目查看、报名、报价、-->
              <!--加解密、公示、查询等</p>-->
            <!--<a class="btn inreviewbc" @click='gotopage()' ><span class="btn_icon">→</span>查看开通状态</a>-->
          <!--</div>-->
        <!--</li>-->

        <!-- cell  end-->
      </ul>

      <!-- app list end-->
      <!-- side -->
      <main-side />
      <!-- side end-->
      </div>
    <!-- content end-->
  </div>
</template>
<script>
import callApi from '../../utils/callApi'
import MainSide from '../../components/MainSide'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      apps: 1
    }
  },
  computed: {
    ...mapState(['app'])
  },
  created() {
    this.getPotalInfo()
    this.goBack()
  },
  methods: {
    ...mapActions(['setAppToken', 'getFrameData', 'gtPortalInfo']),
    // 获取权限
    gotopage(url) {
      window.location.href = url
      // this.setAppToken().then(res => {
      //     window.location.href = url
      // })
    },
    goBack() {
      let uid = sessionStorage.getItem('uuid')
      if(uid!=null){
        this.$store.state.org_status = this.$store.state.app
      }
    },
    // 获取potal信息
    getPotalInfo(url) {
      this.gtPortalInfo().then(res => {
        this.apps = res
        console.log(JSON.stringify(res))
      })
    },
  },
  components: {
    MainSide
  }
}
</script>
<!--<style  src="../../styles.css" ></style>-->
<style lang="scss" src="@/assets/iconfont/iconfont.css" ></style>
<style lang="scss" src="./app.scss" ></style>
