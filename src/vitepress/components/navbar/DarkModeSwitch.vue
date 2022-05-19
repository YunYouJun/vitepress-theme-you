<script setup lang='ts'>
import { isDark, toggleDark } from '../../composables/dark'
</script>

<template>
  <button aria-label="Toggle Theme" class="icon-button" @click="() => { toggleDark() }">
    <div v-show="isDark" class="i-ri-moon-line" />
    <div v-show="!isDark" class="i-ri-sun-line" />
  </button>
</template>
