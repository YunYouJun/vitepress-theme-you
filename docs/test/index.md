# 测试

## 目录测试

### 三级标题

#### 四级标题

## 表格

| 表格 | 内容 | 测试 |
| ---- | ---- | ---- |
| a    | b    | c    |
| a    | b    | c    |
| a    | b    | c    |
| a    | b    | c    |

## Code

```vue
<script setup>
import { onMounted, ref } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>
```
