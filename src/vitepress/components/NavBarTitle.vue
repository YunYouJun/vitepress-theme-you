<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { site, theme, localePath } = useData()

</script>

<template>
  <a
    class="nav-bar-title flex justify-center items-center"
    :href="localePath"
    :aria-label="`${site.title}, back to home`"
  >
    <div
      v-if="theme.iconClass"
      class="logo"
      :class="theme.iconClass"
      title="Logo"
    />
    <img
      v-else-if="theme.logo"
      class="logo"
      :src="withBase(theme.logo)"
      alt="Logo"
    >
    <span class="lt-sm:hidden">
      {{ site.title }}
    </span>
    <span v-if="theme.shortTitle" class="sm:hidden">
      {{ theme.shortTitle }}
    </span>
  </a>
</template>

<style scoped>
.nav-bar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text);
}

.nav-bar-title:hover {
  text-decoration: none;
}

.logo {
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.75rem;
  vertical-align: bottom;
}
</style>
