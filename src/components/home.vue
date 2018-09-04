<template>
  <div class="bg">
    <div class="content">
      <div class="item">
        <router-link to="/operation">totest</router-link>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{width: 100%;height: 100%;background: white;display: flex;align-items: center;justify-content: center}
.content{width: 80%;height: 480px;display: flex;justify-content: space-around;align-items: center}
.item{width: 210px;height: 460px;background: #efefef;}
.item:hover{box-shadow: 3px 3px 3px rgba(0,0,0,0.5),-3px 3px 3px rgba(0,0,0,0.5)}
</style>
