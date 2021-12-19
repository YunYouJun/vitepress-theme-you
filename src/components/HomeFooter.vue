<script setup lang="ts">
import { useData } from 'vitepress'
import { useRepo } from '../composables/repo'

const { frontmatter } = useData()
const repo = useRepo()
</script>

<template>
  <footer v-if="frontmatter.footer" class="footer m-auto mt-10 max-w-960px">
    <div v-if="typeof frontmatter.footer !== 'string'" class="container text">
      <a
        v-if="frontmatter.footer.license"
        :href="(repo && repo.link) || ''"
        target="_blank"
      ><span>{{ frontmatter.footer.license }}</span></a>
      <span
        class="mx-2 inline-block"
      >Copyright ©
        {{ frontmatter.footer.since + ' - ' + new Date().getFullYear() }}
      </span>
      <template v-if="frontmatter.footer.author">
        <template v-if="frontmatter.footer.author.url">
          <a :href="frontmatter.footer.author.url" target="_blank">
            {{
              frontmatter.footer.author.name
            }}
          </a>
        </template>
        <template v-else>
          <span>
            {{
              frontmatter.footer.author
            }}
          </span>
        </template>
      </template>
    </div>
    <div v-else class="container">
      <p class="text">
        <span>{{ frontmatter.footer }}</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 720px) {
  .footer {
    padding: 0 1.5rem;
  }
}

.container {
  padding: 2rem 1.5rem;
}

.home-hero + .footer .container,
.home-features + .footer .container,
.home-content + .footer .container {
  border-top: 1px solid var(--c-divider);
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
}
</style>
