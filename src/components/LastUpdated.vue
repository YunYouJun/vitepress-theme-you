<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import dayjs from 'dayjs'

const { theme, page } = useData()

const hasLastUpdated = computed(() => {
  const lu = theme.value.lastUpdated

  return lu !== undefined && lu !== false
})

const prefix = computed(() => {
  const p = theme.value.lastUpdated
  return p === true ? 'Last Updated' : p
})

const datetime = ref('')
onMounted(() => {
  // locale string might be different based on end user
  // and will lead to potential hydration mismatch if calculated at build time
  datetime.value = dayjs(page.value.lastUpdated).format('YYYY-MM-DD HH:mm:ss')
})
</script>

<template>
  <p v-if="hasLastUpdated" class="last-updated justify-center items-center">
    <span class="prefix" title="prefix">
      <div class="i-ri-edit-line"></div>
    </span>
    <span class="datetime ml-1">{{ datetime }}</span>
  </p>
</template>

<style scoped>
.last-updated {
  display: inline-flex;
  margin: 0;
  line-height: 1.4;
  font-size: 0.8rem;
  color: var(--c-text-light);
}

.datetime {
  display: inline-flex;
  font-weight: 400;
}
</style>
