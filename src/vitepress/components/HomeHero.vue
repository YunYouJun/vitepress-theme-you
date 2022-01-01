<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import PressButton from './PressButton.vue'

const { site, frontmatter } = useData()

const showHero = computed(() => {
  const { heroImage, heroText, tagline, actions }
    = frontmatter.value
  return heroImage || heroText || tagline || (actions && actions.length)
})

const heroText = computed(() => frontmatter.value.heroText ?? site.value.title)
const tagline = computed(
  () => frontmatter.value.tagline || site.value.description,
)
</script>

<template>
  <header v-if="showHero" class="home-hero">
    <slot>
      <figure v-if="frontmatter.heroImage" class="figure mx-5">
        <img
          class="image"
          :src="withBase(frontmatter.heroImage)"
          :alt="frontmatter.heroAlt"
        >
      </figure>
      <i v-else-if="frontmatter.heroIconClass" class="inline-flex w-50 h-50" :class="frontmatter.heroIconClass" />
    </slot>

    <h1 v-if="heroText" id="main-title" class="title">
      {{ heroText }}
    </h1>
    <p
      v-if="tagline"
      class="tagline gradient-text
            from-blue-600
            to-red-500
            bg-gradient-to-r"
      font="light"
    >
      {{ tagline }}
    </p>

    <div class="mt-8 flex justify-center">
      <PressButton
        v-for="(action, index) in frontmatter.actions"
        :key="index"
        class="mx-2"
        :item="action"
      />
    </div>
  </header>
</template>

<style scoped>
.home-hero {
  margin: 2.5rem 0 2.75rem;
  padding: 0 1.5rem;
  text-align: center;
}

@media (min-width: 420px) {
  .home-hero {
    margin: 3.5rem 0;
  }
}

@media (min-width: 720px) {
  .home-hero {
    margin: 4rem 0 3rem;
  }
}

.image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  max-height: 280px;
}

.title {
  margin-top: 1.5rem;
  font-size: 2rem;
}

@media (min-width: 420px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 720px) {
  .title {
    margin-top: 2rem;
  }
}

.tagline {
  margin: 1rem 0 0 0;
  font-size: 1.2rem;
  color: var(--c-text-light);
}

@media (min-width: 420px) {
  .tagline {
    line-height: 1.2;
    font-size: 1.6rem;
  }
}

@media (min-width: 420px) {
  .action :deep(.item) {
    padding: 0 24px;
    line-height: 52px;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
