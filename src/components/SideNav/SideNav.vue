<script lang="ts" setup>
import SideNavItem from '@/components/SideNav/SideNavItem.vue'
import { navFeaturesConfig, navUserConfig } from './templates'
import SvgLoader from '@/components/common/SvgLoader.vue'
import SideNavFooter from './SideNavFooter.vue'

const sidenavRef = ref<HTMLElement | null>(null)

function toggle() {
  sidenavRef.value?.classList.toggle('is-collapsed')
}
</script>

<template lang="pug">
div(ref="sidenavRef").sidenav
  header.sidenav__header.header
    span.header__icon
      SvgLoader(
        name="cube-outline"
        height="22"
        width="22"
      )

    span.header__text
      | App
    button.sidenav__button(
      aria-label="Expand"
      @click="toggle"
    )
      span.sidenav__button-icon
        SvgLoader(
          name="chevron-left"
          height="22"
          width="22"
        )

  section.search
    label.search__icon(for="search")
      SvgLoader(name="search")

      span.sr-only
        | Search
    input#search.search__input(
      type="text"
      placeholder="Search"
    )

  nav.sidenav__nav.nav
    ul.nav__list
      SideNavItem(
        v-for="({ id, label, iconId, routeName }) in navFeaturesConfig"
        :key="id"
        :label="label"
        :icon-id="iconId"
        :route-name="routeName"
      )

    .nav__divider

    ul.nav__list
      SideNavItem(
        v-for="({ id, label, iconId, routeName }) in navUserConfig"
        :key="id"
        :label="label"
        :icon-id="iconId"
        :route-name="routeName"
      )

  SideNavFooter
</template>

<style lang="scss">
@import '@/components/SideNav/styles/var', '@/components/SideNav/styles/button',
  '@/components/SideNav/styles/icon', '@/components/SideNav/styles/label';

$sidenav-width: 16rem;
$sidenav-gutter: 0.75rem;

.sidenav {
  background-color: var(--bg-secondary);
  color: var(--text);
  font-size: $font-size--md;
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  padding: $sidenav-gutter;
  flex: 0 1 auto;
  width: $sidenav-width;
  max-width: 100%;
  transition: width $duration $timing;

  &.is-collapsed {
    width: $icon-width + ($sidenav-gutter * 2);
  }
}

.sidenav__header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
}

.header__icon {
  @include icon;
}

.header__text {
  @include label;
  font-weight: 700;
  flex: 1;
}

.sidenav__button {
  @include sidenav-button;
  color: var(--text);
  flex: 0 0 auto;
  position: absolute;
  left: 90%;
}

.sidenav__button-icon {
  @include icon;
}

.sidenav__button-text {
  @include label;
  font-weight: 700;
  flex: 1;
}

.header .sidenav__button-icon {
  color: var(--text);
  width: auto;
}

.header .sidenav__button-icon > * {
  transition-property: transform, color;
  transition-duration: $duration;

  &:hover {
    color: var(--bg-secondary);
  }

  .is-collapsed & {
    transform: rotate(180deg);
  }
}

.search {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-top: 1rem;
}

.search__icon {
  @include icon;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.search__input {
  color: var(--text);
  background-color: var(--bg);
  flex: 1 1 auto;
  min-width: 1px;
  height: $icon-width;
  border: none;
  border-radius: $rounded-sm;
  padding: 0 $icon-width 0 1rem;
  outline-offset: -2px;
  transition-property: background, color, padding;
  transition-duration: $duration;

  &:placeholder {
    color: var(--text);
    transition-property: color;
    transition-duration: $duration;
  }

  &:focus {
    outline: 2px solid rgba(#fff, 0.3);
  }

  .is-collapsed & {
    color: transparent;
    padding-left: 0;

    &:not(:hover) {
      background: none;
    }

    &:placeholder {
      color: transparent;
    }
  }
}

.sidenav__nav {
  $offset: $sidenav-gutter - 0.125rem;
  flex: 1 1 auto;
  margin: 1rem ($offset * -1) 0;
  padding: 0 $offset;
}

.nav {
  scrollbar-color: var(--text) transparent;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  transition: scrollbar-color 200ms;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    transition: background 200ms;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--bg);
  }

  &::-webkit-scrollbar-corner {
    background: none;
  }

  &:hover {
    color: var(--text);
    scrollbar-color: var(--text) var(--bg);

    &::-webkit-scrollbar-track {
      background-color: var(--bg) transparent;
    }
  }
}

.nav__list {
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: $icon-width;
}

.nav__divider {
  margin: 1rem 0;
  padding: 0 calc(($icon-width - $icon-size) / 2);
  min-width: $icon-width;

  &::before {
    background-color: var(--border-primary);
    display: block;
    content: '';
    height: 0.99px;
  }
}
</style>
