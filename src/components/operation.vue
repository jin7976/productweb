<template>
  <div class="cont">
    <div class="left">
      <router-link to="/operation/manageOrder">ps</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.cont{display: flex;width: 100%;height: 100%;}
.left{height: 100%;width: 300px;background: red;}
.right{height: 100%;flex: 1;background: white;padding: 20px;}
</style>
