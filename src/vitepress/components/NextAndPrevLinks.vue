<script setup lang="ts">
import { withBase } from 'vitepress'
import { useNextAndPrevLinks } from '../composables/nextAndPrevLinks'

const { hasLinks, prev, next } = useNextAndPrevLinks()
</script>

<template>
  <div v-if="hasLinks" class="next-and-prev-link">
    <div class="container">
      <div class="prev">
        <a v-if="prev" class="link" :href="withBase(prev.link)">
          <div class="i-ri-arrow-left-line mr-1" />
          <span class="text">{{ prev.text }}</span>
        </a>
      </div>
      <div class="next">
        <a v-if="next" class="link" :href="withBase(next.link)">
          <span class="text">{{ next.text }}</span>
          <div class="i-ri-arrow-right-line ml-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.next-and-prev-link {
  padding-top: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--c-divider);
  padding-top: 1rem;
}

.prev,
.next {
  display: flex;
  flex-shrink: 0;
  width: 50%;
}

.prev {
  justify-content: flex-start;
  padding-right: 12px;
}

.next {
  justify-content: flex-end;
  padding-left: 12px;
}

.link {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
}

.text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
