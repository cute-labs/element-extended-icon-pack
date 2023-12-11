<script setup lang="ts">
import * as icons from "@element-extended-icon-pack/vue";
import { FillEleSymbolUpload } from "@element-extended-icon-pack/vue";
</script>

<template>
  <el-icon size="48" color="#5a9cf8">
    <FillEleSymbolUpload />
  </el-icon>

  <div class="list">
    <component :is="Icon" v-for="(Icon, key) in icons" :key="key" class="icon" />
  </div>
</template>

<style scoped>
.icon {
  width: 1.5rem;
  color: #000;
}
</style>
