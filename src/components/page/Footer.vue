<template>
  <div>
    <div class="box">
      <div class="one-box">
        <div class="lianxi">
          <span class="tittle">联系我们</span>
          <ul class="kehu">
            <li>客户服务</li>
            <li class="tel">400-028-6868</li>
            <li>Email:service@mayi.com</li>
          </ul>
          <ul>
            <li>商务合作</li>
            <li class="hezuo">QQ:308000494</li>
            <li>Email:marketing@mayi.com</li>
          </ul>
        </div>

        <div class="help">
          <span class="tittle">帮助中心</span>
          <ul class="help-goods">
            <li class="help-list" v-for="item in help" :key="item.key">{{item.text}}</li>
          </ul>
        </div>

        <div class="information">
          <span class="tittle">公司信息</span>
          <ul class="help-goods">
            <li class="help-list" v-for="item in infor" :key="item.key">{{item.text}}</li>
          </ul>
        </div>

        <div class="app">
          <span class="tittle">下载APP</span>
          <p class="app-reg">注册立送500元大礼包</p>
          <div class="app-er">
            <img
              src="https://i1.mayi.com/mayi55/M47/EO/SY/ZYJAYNQPDK7CE5R5Y3UZJFX4DQPM2R.jpg_110x110c.jpg"
              alt
            />
          </div>

          <div class="app-load">Android下载</div>
          <div class="app-load">iOs下载</div>
        </div>

        <div class="about">
          <span class="tittle">关注我们</span>
          <div class="weibo">
            <div>
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201510/images/commom/weixin_logo.png"
                alt
              />
            </div>
            <div>
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201510/images/commom/xinlang_logo.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>

      <div class="two-box">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" class="card">
          <el-tab-pane label="热门城市" name="first">
            <ul>
              <li class="card-list" v-for="item in city" :key="item.key">{{item.text}}</li>
            </ul>
          </el-tab-pane>

          <el-tab-pane label="网站导航" name="second">
            <ul>
              <li class="card-list" v-for="item in maps" :key="item.key">{{item.text}}</li>
            </ul>
          </el-tab-pane>

          <el-tab-pane label="友情连接" name="third">
            <ul>
              <li class="card-list" v-for="item in link" :key="item.key">{{item.text}}</li>
            </ul>
          </el-tab-pane>

          <el-tab-pane label="手机版" name="fourth">蚂蚁短租</el-tab-pane>
        </el-tabs>

        <div class="new-box">
          <div class="new">
            <div class="book">最新预订 :</div>
          </div>
          <div class="roll">
            <div class="lunbo">
              <div class="block">
                <li class="lunbo-text" v-for="item in rolls" :key="item.key">{{item.text}}</li>
              </div>
              <div class="block">
                <li class="lunbo-text" v-for="item in rolls" :key="item.key">{{item.text}}</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="thr-box">
        <p>
          客户服务：400-028-6868 | &nbsp;用户答疑 | &nbsp;公司信息 | &nbsp;网站地图 | &nbsp;短租房 | &nbsp;app下载 |关注我们
          <span>
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201510/images/commom/weixin_logo_s.png"
              alt
            />
          </span>
          &nbsp; &nbsp;
          <span>
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201510/images/commom/xinlang_logo_s.png"
              alt
            />
          </span>
        </p>
        <p>网站备案/许可证号：京ICP备12051504号-1营业执照编号：105259760 易云游网络技术（北京）有限公司</p>

        <div class="hao">
          <p>
            <img src="http://staticnew.mayi.com/resourcesWeb/images/babs.png" alt />
            京公网安备 11010802022835号
          </p>
        </div>

        <div class="police">
          <div>
            <img src="//staticnew.mayi.com/resourcesWeb/images/cnnic1.png" alt />
          </div>
          <div>
            <img src="http://staticnew.mayi.com/resourcesWeb/images/cert.png" alt />
          </div>
          <div>
            <img src="http://staticnew.mayi.com/resourcesWeb/images/gsj.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      help: [
        { text: "房源审核规范" },
        { text: "房客安心计划" },
        { text: "优质住宿计划" },
        { text: "网站地图" },
        { text: "房客帮助" }
      ],
      infor: [
        { text: "关于蚂蚁" },
        { text: "加入我们" },
        { text: "战略合作" },
        { text: "媒体报道" },
        { text: "服务协议" },
        { text: "隐式政策" },
        { text: "免责声明" }
      ],
      maps: [
        {
          text: "民宿"
        },
        {
          text: "短租公寓"
        },
        {
          text: "住宿"
        },
        {
          text: "酒店"
        },
        {
          text: "宾馆"
        },
        {
          text: "短租别墅"
        },
        {
          text: "旅游景点"
        },
        {
          text: "游记攻略"
        },
        {
          text: "周租房"
        },
        {
          text: "月租房"
        },
        {
          text: "租房攻略"
        }
      ],
      city: [
        { text: "青岛日租房" },
        { text: "北京日租房" },
        { text: "秦皇岛日租房" },
        { text: "厦门日租房" },
        { text: "大连日租房" },
        { text: "上海日租房" },
        { text: "成都日租房" },
        { text: "威海日租房" },
        { text: "重庆日租房" },
        { text: "西安日租房" },
        { text: "杭州日租房" },
        { text: "烟台日租房" },
        { text: "三亚日租房" },
        { text: "葫芦岛日租房" },
        { text: "营口日租房" },
        { text: "广州日租房" },
        { text: "深圳日租房" },
        { text: "日照日租房" },
        { text: "北海日租房" },
        { text: "南京日租房" },
        { text: "昆明日租房" },
        { text: "承德日租房" },
        { text: "沈阳日租房" },
        { text: "哈尔宾日租房" },
        { text: "武汉日租房" },
        { text: "苏州日租房" },
        { text: "济南日租房" },
        { text: "天津日租房" },
        { text: "西宁日租房" },
        { text: "丹东日租房" },
        { text: "长沙日租房" },
        { text: "桂林日租房" },
        { text: "珠海日租房" },
        { text: "贵阳日租房" },
        { text: "丽江日租房" },
        { text: "长春日租房" },
        { text: "大理日租房" },
        { text: "嘉兴日租房" },
        { text: "郑州日租房" },
        { text: "合肥日租房" },
        { text: "兰州日租房" },
        { text: "太原日租房" },
        { text: "南宁日租房" }
      ],
      link: [
        { text: "安居客" },
        { text: "去114分类信息网" },
        { text: "九游网" },
        { text: "杭州二手房网" },
        { text: "昆山房产网" },
        { text: "太平洋家居网" },
        { text: "一起装修网" },
        { text: "神舟国旅" },
        { text: "在职研究生" },
        { text: "装修网" },
        { text: "美乐乐装修网" },
        { text: "汽车论坛" },
        { text: "装修" },
        { text: "家居在线" },
        { text: "美食网" },
        { text: "国外网站" },
        { text: "短租排行榜2017" },
        { text: "慧聪网" },
        { text: "加盟网" },
        { text: "土地转让" },
        { text: "创业加盟网" },
        { text: "中国网库" },
        { text: "装修" },
        { text: "手机靓号" },
        { text: "装修公司" },
        { text: "携程旅游网" },
        { text: "绿野户外" },
        { text: "国美在线" },
        { text: "汽车报价" },
        { text: "百姓健康网" },
        { text: "海景房" },
        { text: "国际租车" },
        { text: "舒适100网" },
        { text: "信息发布平台" },
        { text: "公交查询" },
        { text: "北戴河临海住宿" },
        { text: "出境游" },
        { text: "买房网" },
        { text: "汽车票查询" },
        { text: "家庭旅馆" },
        { text: "北京好玩的地方" },
        { text: "瓷砖" },
        { text: "孔夫子旧书网" },
        { text: "途家网" },
        { text: "招聘" },
        { text: "房产讯" },
        { text: "58汽车网" },
        { text: "旅游网" },
        { text: "马蜂窝旅游攻略" },
        { text: "有家民宿" }
      ],
      rolls: [
        { text: "鼓浪屿·精致香墅大床-三丘田·日光岩-37分钟前被用户*****7652预定" },
        { text: "22R 粉红公主小窝 南湖湖景小屋38分钟前被用户*****1326预定" },
        { text: "自由空间-古北水镇曲美家私温馨一居41分钟前被用户*****1965预定" },
        { text: "三亚旅家凤凰水城南岸公寓豪华园景一房一卫41分钟前被用户*****1868预定" },
        {text:"豪华多功能家庭房1小时6分钟前被用户*****1633预定"},
        {text:"【你好·莫兰迪】近大东海/静谧丛林一居室1小时13分钟前被用户*****8690预定"},
        {text:"寓尚【南山公寓】15北大街/高铁站1小时23分钟前被用户*****1956预定"},
        {text:"解放碑洪崖洞阳光双床房1小时28分钟前被用户*****5551预定"},
        {text:"鼓浪屿·精致香墅大床-三丘田·日光岩-37分钟前被用户*****7652预定"},
        {text:"22R 粉红公主小窝 南湖湖景小屋38分钟前被用户*****1326预定"},
        {text:"自由空间-古北水镇曲美家私温馨一居41分钟前被用户*****1965预定"},
        {text:"三亚旅家凤凰水城南岸公寓豪华园景一房一卫41分钟前被用户*****1868预定"},
        {text:"豪华多功能家庭房1小时6分钟前被用户*****1633预定"},
     


      ],
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },

  mounted() {
    console.log(this.$refs.el);
  }
};
</script>

<style  scoped>
* {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.box {
  width: 100%;
  height: 800px;
  background: #322c27;
  margin-top: 70px;
  padding-top: 1px;
  box-sizing: border-box;
}
.one-box {
  width: 1050px;
  height: 310px;
  color: #fff;
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
  /* background: #baef26; */
}

.lianxi {
  width: 185px;
  height: 232px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* background: #ace2fa; */
}

.tittle {
  font-size: 16px;
}
.kehu {
  width: 185px;
  display: block;
  font-size: 14px;
  margin: 22px 0px 30px 0px;
}
.tel {
  width: 185px;
  display: block;
  font-size: 22px;
  margin: 18px 0px 7px 0px;
}
.hezuo {
  width: 185px;
  display: block;
  font-size: 14px;
  margin: 18px 0px 7px 0px;
}
.help {
  width: 135px;
  height: 158px;
  /* background: #fe2abd; */
}

.help-goods {
  display: block;
  margin-top: 20px;
}

.help-list {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  display: block;
  cursor: pointer;
}

.help-list:hover {
  color: #999;
}

.information {
  width: 145px;
  height: 206px;
  /* background: #e45fac; */
}
.app {
  width: 200px;
  height: 260px;
  /* background:#dace89; */
}

.app-reg {
  color: #de3927;
  font-size: 12px;
  margin-top: 20px;
}
.app-er {
  width: 104px;
  height: 104px;
  background: #afe;
  margin: 20px 0px 20px;
}
.app-load {
  width: 104px;
  height: 26px;
  text-align: center;
  border: 1px solid #fff;
  margin-top: 15px;
}

.app-load:hover {
  cursor: pointer;
  color: #999;
}
wbr .about {
  width: 130px;
  height: 91px;
  /* background: #afbd12; */
}
.weibo {
  width: 100px;
  height: 44px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.two-box {
  width: 1050px;
  height: 175px;
  margin: 0px auto;
  /* background: #24a; */
  position: relative;
}

.card {
  font-size: 12px;
  color: #c1c1c1;
}

.card-list {
  line-height: 25px;
  display: inline;
  margin: 0px 11px 10px 0px;
}

.new-box {
  width: 100%;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  color: black;
  /* margin-top: 12px; */
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.new {
  width: 80px;
  height: 40px;
  color: #c1c1c1;
}

.roll {
  width: 1200px;
  height: 40px;
  overflow: hidden;
  /* background: greenyellow; */
}

.block {
  width: 3000px;
  height: 40px;
  /* display: inline-block; */
  float: left;
  animation: myli 30s linear infinite normal;
  position: relative;
}

.block li {
  width: 250px;
  display: inline-block;
  list-style: none;
  color: #c1c1c1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.lunbo {
  position: relative;
  width: 2000px;
  height: 40px;
}
.lunbo ul{
 display: inline-block;

}
@keyframes myli {
  0%,10%{
    left: 0px;
  }
  10%,
  15% {
    left: -200px;
  }
  15%,
  25% {
    left: -400px;
  }
  25%,
  35% {
    left: -600px;
  }
  35%,
  45% {
    left: -800px;
  }
  45%,
  55% {
    left: -1000px;
  }
  55%,
  65% {
    left: -1200px;
  }
  65%,
  75% {
    left: -1400px;
  }
   75%,
   85% {
    left: -1600px;
  }
   85%,
   95% {
    left: -1800px;
  }
   95%,
   100% {
    left: -2000px;
  }
  
  
}

.thr-box {
  width: 1050px;
  height: 140px;
  font-size: 12px;
  text-align: center;
  color: #777776;
  margin: 50px auto;
  /* background: #abc; */
}
.thr-box p {
  margin-top: 5px;
}
.hao {
  width: 300px;
  height: 63px;
  line-height: 63px;
  margin: 0px auto;
  cursor: pointer;
  /* background: #efa; */
}
.police {
  width: 275px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  /* background: #7fa; */
}
.police > div > img {
  width: 80px;
  height: 28px;
  cursor: pointer;
}
</style>