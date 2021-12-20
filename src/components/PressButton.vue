<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useNavLink } from '../composables/navLink'
import type { YouTheme } from '../types/config'

const props = defineProps<{
  item: YouTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)
const { props: linkProps } = useNavLink(propsRefs.item)

const classes = computed(() => {
  const defaultClasses = []
  if (props.item.color) {
    defaultClasses.push(`bg-${props.item.color}-500`)
    defaultClasses.push(`hover:bg-${props.item.color}-400`)
    defaultClasses.push(`border-${props.item.color}-600`)
    defaultClasses.push(`hover:border-${props.item.color}-500`)
  }
  else {
    defaultClasses.push('brand')
  }
  return defaultClasses
})
</script>

<template>
  <span>
    <a
      class="
      press-button
      text-white
      rounded
    "
      font="bold"
      p="x-4 y-2"
      v-bind="linkProps"
      :class="classes"
    >
      <div v-if="item.icon" class="text-white mr-1" :class="item.icon" />
      {{ item.text }}
    </a>
  </span>
</template>

<style lang="scss">
.press-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;

  transition: background-color 0.1s ease;
  border-style: solid;
  border-width: 0 0 4px 0;

  &:hover {
    text-decoration: none;
  }

  &:active {
    margin-top: 3px;
    border-bottom-width: 1px;
    transform: translateY(0.25rem);
  }

  &.brand {
    color: var(--c-bg);
    background-color: var(--c-brand);
    border-bottom-color: var(--c-brand-dark);

    &:hover {
      background-color: var(--c-brand-light);
    }
  }
}
</style>
