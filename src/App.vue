<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="app-wrapper">
    <PvToast />
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  background-color: #111827;
}
</style>
