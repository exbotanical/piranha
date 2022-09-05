<script lang="ts" setup>
import SvgLoader from '@/components/common/SvgLoader.vue'
</script>

<template lang="pug">
.sidenav__footer.user
  button.user__button
    .user__badge
      .user__image
        SvgLoader(name="account")
    .user__text
      span.user__name
        | John Smith
      span.user__title
        | Web developer
</template>

<style lang="scss" scoped>
@import '@/components/SideNav/styles/var', '@/components/SideNav/styles/button',
  '@/components/SideNav/styles/label';

.sidenav__footer {
  margin-top: 1rem;
}

.user__button {
  @include sidenav-button;
  color: var(--text);
  border-radius: 50vh;
  width: 100%;
  max-width: 100%;
}

.user__badge {
  flex: 0 0 auto;
  width: $icon-width;
  height: $icon-width;
  padding: 2px;
}

.user__image {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #cfd8dc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user__text {
  @include label;

  margin-left: 0.5rem;
  display: flex;
  flex-flow: column nowrap;
}

.user__name {
  font-size: $font-size--sm;
}

.user__name,
.user__title {
  overflow: hidden;
  text-overflow: ellipsis;
}

.user__title {
  color: var(--text);
  font-size: $font-size--xs;
}
</style>
