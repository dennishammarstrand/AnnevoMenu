<template>
  <div>
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
