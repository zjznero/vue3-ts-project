<template>
  <div>
    我是APP根组件
    <div class="box">
      <h1>新增一个标题</h1>
      <h1>{{ string1 }}</h1>
      <h1>{{ string2 }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
const string1: string = '我爱你祖国'
const string2: string = '知道吗'
</script>
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
