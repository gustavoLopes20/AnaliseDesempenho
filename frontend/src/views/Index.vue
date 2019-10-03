<template>
  <div class="container-index">
    <Index class="component"/>
    <router-view class="routes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index/index.vue'

export default {
  name: 'index',
  components: {
    Index
  }
}
</script>

<style lang="scss" >
.container-index{
  display: table;
  width: 100%;
  .component{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
  }
  .routes{
    position: relative;
    top: 25px;
    display: table;
    width: 90%;
    margin: 0 auto;
  }
}
label{
  font-weight: bold;
}
</style>
