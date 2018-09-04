<template>
  <div id="app" class="z-home">
    <div class="z-head">
      <img class="logo" src="./assets/which1.jpg" alt="">
      <router-link class="toHome" to="/" tag="img" src="/static/images/home.png">test</router-link>
      <img class="user" src="./assets/user.png" alt="">
    </div>
    <div class="z-main">
      <router-view></router-view>
    </div>
    <div class="z-foot">
      <div class="z-fout">
        <div class="z-item">
            <img src="./assets/kehu.png" alt="">
            <span>客户</span>
        </div>
        <div class="z-item">
            <img src="./assets/tongxunlu.png" alt="">
            <span>通讯录</span>
        </div>
        <div class="z-item">
            <img src="./assets/kaoqin.png" alt="">
            <span>考勤</span>
        </div>
        <div class="z-item">
            <img src="./assets/qingjia.png" alt="">
            <span>请假</span>
        </div>
        <div class="z-item">
            <img src="./assets/jixiao.png" alt="">
            <span>绩效</span>
        </div>
        <div class="z-item">
            <img src="./assets/fankui.png" alt="">
            <span>问题反馈</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.z-home{display: flex;flex-direction: column;width: 100%;min-height: 700px;height: 100%;position: absolute;bottom: 0;left: 0;right: 0;top: 0;}
.z-head{height: 53px;line-height: 53px;background: greenyellow;min-width: 1200px;}
.logo{width: 240px;height: 53px;}
.toHome{width: 31px;height: 31px;margin: 11px 16px;}
.user{width: 31px;height: 31px;float: right;margin: 11px 30px;}
.z-main{flex: 1;background: #e1e1e1;width: 100%;min-width: 1200px;display: flex;align-items: center}
.z-foot{height: 120px;line-height: 120px;background: #98aab4;}
.z-fout{height: 120px;width: 80%;min-width: 1200px;background: #98aab4;display: flex;align-items: center;justify-content: space-around;margin: 0 auto}
.z-item{display: flex;flex-direction: column;width: 60px;height: 80px;justify-content: center}
.z-item img{width: 60px; height: 60px;}
.z-item span{height: 20px;line-height: 20px;display: inline-block;text-align: center;}
</style>
