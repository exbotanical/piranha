<script lang="ts" setup>
import SideNav from '@/components/SideNav/SideNav.vue'
import Content from '@/views/ContentContainer.vue'

const toggle = window.darkMode.toggle
</script>

<template lang="pug">
//- button(@click="toggle")
//-   | Mode
SideNav
router-view
</template>
