<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="site.base" aria-label="go to home">Take me home.</a>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
const msgs = [
  '这里什么都没有……',
  'There\'s nothing here.',
  'How did we get here?',
  'That\'s a Four-Oh-Four.',
  '这是来自秘境的神秘代码，名曰 404。',
  'Looks like we\'ve got some broken links.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
