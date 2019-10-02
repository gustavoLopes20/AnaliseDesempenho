<template>
  <div class="container-index">
    <Index/>
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
}
</style>
