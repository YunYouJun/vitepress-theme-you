<script setup lang="ts">
import EditLink from './EditLink.vue'
import LastUpdated from './LastUpdated.vue'
</script>

<template>
  <footer class="page-footer">
    <div class="edit">
      <EditLink />
    </div>
    <div class="updated">
      <LastUpdated />
    </div>
  </footer>
</template>

<style scoped>
.page-footer {
  padding-top: 1rem;
  overflow: auto;
}

.page-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
