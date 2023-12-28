<template>
  <FillEleArrowCaretDouble size="48" />

  <div class="list">
    <component
      :is="Icon"
      v-for="(Icon, key) in icons"
      :key="key"
      :size="28"
      color="oklch(72.65% 0.2 46.59)"
    />
  </div>

  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { FillEleArrowCaretDouble } from "@element-extended-icon-pack/vue";
import * as icons from "@element-extended-icon-pack/vue";
</script>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
}
</style>
