<script lang="ts" setup>
import SideNav from '@/components/SideNav/SideNav.vue'

const toggle = window.darkMode.toggle
</script>

<template lang="pug">
SideNav
div.content
  button(@click="toggle")
</template>

<style lang="scss">
.content {
  background-color: var(--bg);
  flex: 1;
}
</style>
