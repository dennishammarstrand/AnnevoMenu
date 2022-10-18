<template>
  <header>
    <p v-if="loading">Laddar annevo</p>
    <p v-else @click="headerTitleClicks++">{{ $route.meta.title }}</p>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";

defineProps<{
  loading: boolean;
}>();

const { headerTitleClicks } = useAnnevoMenu();
</script>

<style scoped>
header {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
