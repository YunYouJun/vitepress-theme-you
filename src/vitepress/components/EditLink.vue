<script setup lang="ts">
import { useEditLink } from '../composables/editLink'

const { url, text } = useEditLink()
</script>

<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link inline-flex justify-center items-center text-xs"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="i-ri-thumb-up-line" />
      <span class="ml-1">{{ text }}</span>
    </a>
  </div>
</template>

<style scoped>
.link {
  display: inline-flex;
  color: var(--c-text-light);
}

.link:hover {
  text-decoration: none;
  color: var(--c-brand);
}
</style>
