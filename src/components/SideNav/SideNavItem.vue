<script lang="ts" setup>
import SvgLoader from '@/components/common/SvgLoader.vue'

export interface BadgeConfig {
  type: 'normal' | 'warn'
  count: number
}

const props = defineProps<{
  isActive: boolean
  label: string
  iconId: string
  badgeConfig?: BadgeConfig
}>()

const $emit = defineEmits<{
  (e: 'select'): void
}>()

function normalizeCount(count: number) {
  return count > 99 ? `${count}+` : count
}
</script>

<template lang="pug">
li.nav__item(
  :class="isActive ? 'is-active' : ''"
  @click="$emit('select')"
)
  button.nav__button
    span.nav__icon
      SvgLoader(
        :name="props.iconId"
      )

    span.nav__label
      | {{ props.label }}


  span.nav__badge(
    v-if="props.badgeConfig"
    :class="props.badgeConfig.type === 'warn' ? 'warn' : ''"
  )
    | {{ normalizeCount(props.badgeConfig.count) }}
</template>

<style lang="scss" scoped>
@import './styles/button', './styles/icon', './styles/label';

.nav__item {
  position: relative;

  & + & {
    margin-top: 0.25rem;
  }
}

.nav__button {
  @include sidenav-button;
  max-width: 100%;
  width: 100%;
}

.nav__icon {
  @include icon;
}

.nav__label {
  @include label;
  font-size: $font-size--sm;
  margin-right: 2.35rem;
}

.nav__badge {
  border-radius: 50vh;
  background: #bafd5c;
  color: #000;
  font-size: $font-size--lg;
  padding: 0.125rem 0.25rem;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  transform: translate(-0.25rem, -50%);
  transition-property: transform, font-size, padding, color;
  transition-duration: $duration;
  transition-timing-function: $timing;

  &.warn {
    background: #ffbc00;
  }

  .is-collapsed & {
    transform: translate(-0.25rem, 50%);
    color: transparent;
    font-size: 0;
    padding: 0.25rem;
  }
}
</style>
