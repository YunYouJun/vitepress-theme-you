<script setup lang="ts">
import { toRefs } from 'vue'
import { useNavLink } from '../composables/navLink'
import type { DefaultTheme } from '../config'

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)
const { props: linkProps } = useNavLink(propsRefs.item)
</script>

<template>
  <div>
    <a
      class="
      press-button
      text-white
      rounded
    "
      v-bind="linkProps"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<style lang="scss">
.press-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  line-height: 44px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-bg);
  background-color: var(--c-brand);

  border-bottom: 4px solid var(--c-brand-dark);

  transition: background-color 0.1s ease;

  &:hover {
    text-decoration: none;
    color: var(--c-bg);
    background-color: var(--c-brand-light);
  }

  &:active {
    margin-top: 3px;
    border-bottom-width: 1px;
    transform: translateY(0.25rem);
  }
}
</style>
