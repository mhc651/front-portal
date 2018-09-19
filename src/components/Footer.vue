<style lang="scss" scoped>
// footer

.container--fluid + .footer {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.footer {
  background: #fff;
  .container {
    min-height: 70px;
  }
  .copyright {
    display: inline-block;
    margin-bottom: 13px;
    text-align: center;
  }
  .footer-nav {
    //width: 910px;
    width: 1200px;

  }
  .footer-nav {
    p {
      max-width: 100%;
      margin-top: 16px;
    }
    a {
      margin-right: 15px;
    }
    p:first-child {
      margin-right: 15px;
    }
  }
}

</style>
<template>
    <footer class="footer">
      <div class="container flex ">
        <!-- left -->
          <div class="footer-nav flex align-items--center"  v-if="entrys.length">
            <p class="col--auto" v-for="(item,index) in entrys">
              <span v-if="index<=(entrys.length-2)">
                <span class="col--auto" v-if="item.value!=null">{{item.name}}：</span>
                <a  class="col--auto" v-if="item.value!=null" :href="item.link">
                  {{item.value}}
                </a>
                <a  class="col--auto" v-if="item.value==null"  @click="callUs">
                  {{item.name}}
                </a>
              </span>
            </p>
            <!--<p class="col&#45;&#45;auto">-->
              <!--<span  class="col&#45;&#45;auto">技术支持：</span>-->
              <!--<a class="col&#45;&#45;auto" >-->
                <!--厦门海西医药交易中心有限公司-->
              <!--</a>-->
            <!--</p>-->

            <!--<p class="col&#45;&#45;auto">-->
              <!--<span class="col&#45;&#45;auto">指导单位：</span>-->
              <!--<a  class="col&#45;&#45;auto">-->
                <!--卫生部卫生发展研究中心-->
              <!--</a>-->
              <!--<a  class="col&#45;&#45;auto">-->
                <!--三明医改领导小组-->
              <!--</a>-->
            <!--</p>-->
            <!--<p class="col&#45;&#45;auto">-->
              <!--<span  class="col&#45;&#45;auto">技术支持：</span>-->
              <!--<a class="col&#45;&#45;auto" >-->
                <!--厦门海西医药交易中心有限公司-->
              <!--</a>-->
            <!--</p>-->

          </div>
          <div class="footer-nav" style="text-align: center">
            <div class="copyright flex align-items--center  justify-content--end ">
              {{ copyright}}
              <!--<span>Copyright(C) 2016 | 闽ICP备14009242号-1</span>-->
            </div>
          </div>

        <Modal
          v-model="review"
          title=""
          width="900"
          scrollable
          class-name="register-model"
          @on-ok="reviewConfirm"
        >
          <div style="text-align: center">
            <img :src="linkPic" style="width: 100%"/>
          </div>
        </Modal>

      </div>
    </footer>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      copyright : '',
      entrys: [],
      review: false,
      linkPic: ''
    }
  },
  computed: {
    ...mapState(['app','entry'])
  },
  created() {
    this.getUnLoginInfohf()
  },
  methods: {
    ...mapActions(['gethfUnLoginInfo']),
    // 获取权限
    getUnLoginInfohf() {
      return this.gethfUnLoginInfo().then(res => {
        this.copyright = res.footer[res.footer.length-1].value
        this.entrys = res.footer
        this.getLinkPic(res.footer)
      })
    },
    reviewConfirm() {
      this.review = false
    },
    callUs() {
      this.review = true
    },
    getLinkPic(v) {
      for(let k of v){
        if(k.value==null){
          this.linkPic = k.link
        }
      }
    }
  }
}
</script>
