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

<style lang="scss" scoped>
.container-index{
  display: table;
  width: 100%;
  .component{
    float: left;
    width: 500px;
  }
  .routes{
    position: relative;
    top: 25px;
    display: table;
    float: left;
    min-width: 700px;
  }
}
</style>
