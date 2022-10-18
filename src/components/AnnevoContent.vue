<template>
  <main>
    <span v-if="loading">Laddar annevo</span>
    <RouterView v-else />
  </main>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  loading: boolean;
}>();
</script>

<style scoped>
main {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
