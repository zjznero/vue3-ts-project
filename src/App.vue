<script setup lang="ts">
const str = '我爱你祖国'
</script>

<template>
  <div>
    我是APP根组件
    <div class="box">
      <h1>{{ str }}       
       
      
      
      
      
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 600px;
  
  height: 400px;
  background-color: #000;

  h1 {
    color: #fff;
  }
}
</style>
