<script lang="ts" setup>
import Card from '@/components/common/Card.vue'
import SvgLoader from '@/components/common/SvgLoader.vue'
</script>

<template lang="pug">
div.dashboard.dashboard__container
  h1 Board
div.kanban.kanban__container
  section.kanban.kanban__section
    div(style="padding:0 .5rem .25rem .5rem")
      h2 To Do
    Card
    Card
    Card
    div(style="display: flex;padding:.75rem 0")
      SvgLoader(name="plus")

  section.kanban.kanban__section
    div(style="padding:0 .5rem .25rem .5rem")
      h2 Doing
    Card
    div(style="display: flex;padding:.75rem 0")
      SvgLoader(name="plus")

  section.kanban.kanban__section
    div(style="padding:0 .5rem .25rem .5rem")
      h2 Done
    Card
    div(style="display: flex;padding:.75rem 0")
      SvgLoader(name="plus")

</template>

<style lang="scss" scoped>
.dashboard {
  &__container {
    display: flex;
    padding: 0rem 2rem 2rem 0;
  }
}

.kanban {
  &__container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    width: 100%;
    gap: 1rem;
  }

  &__section {
    background-color: var(--bg-secondary);
    padding: 0.75rem;
    padding-bottom: 0;
    height: 100%;
    flex: 30%;
    border-radius: 0.25rem;
  }
}
</style>
