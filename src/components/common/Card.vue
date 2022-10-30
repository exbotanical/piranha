<script lang="ts" setup>
import SvgLoader from './SvgLoader.vue'
</script>

<template lang="pug">
div.card
  div(style="display:flex;gap:.5rem")
    div(style="background-color:magenta;width:30%;height:100%;border-radius:3rem")
    div(style="background-color:teal;width:30%;height:100%;border-radius:3rem")
    div(class="move")
  div(style="display:flex;")
    div(style="background-color: lightgray;width:50%;border-radius:3rem")
  div(style="display: flex;align-items:flex-end;gap:1rem")
    SvgLoader(name="list")
    SvgLoader(name="check-sq")
    p 0/2
</template>

<style lang="scss" scoped>
.move {
  background: radial-gradient(var(--text) 25%, transparent 25%) 0 0 / 6px 6px;
  cursor: move;
  height: 16px;
  margin-left: auto;
  width: 0.8rem;
}
.card {
  @include card-shadow--hover;
  margin-bottom: 0.75rem;
  background-color: var(--border-primary);
  min-height: 100px;
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 15% 25% auto;
  grid-template-columns: auto;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
</style>
