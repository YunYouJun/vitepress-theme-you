<template>
  <button aria-label="Toggle Theme" class="icon-button" @click="()=>{toggleDark()}">
    <div v-show="isDark" class="i-ri-moon-line" />
    <div v-show="!isDark" class="i-ri-sun-line" />
  </button>
</template>

<script setup lang='ts'>
import { isDark, toggleDark } from 'vitepress-theme-you/composables/dark'
</script>
