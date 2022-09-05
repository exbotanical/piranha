<script lang="ts" setup>
interface Props {
  name: string
  prefix?: string
  color?: string
  height?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#fff',
  height: '18',
  width: '18',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" :height="height" :width="width">
    <use :href="symbolId" :fill="color" :height="height" :width="width" />
  </svg>
</template>
