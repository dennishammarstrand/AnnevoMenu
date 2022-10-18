<template>
  <div>
    <span @click="mainTitleClicks++">{{ title }}</span>
    <div class="click-content">
      <p>Header title clicks {{ headerTitleClicks }}</p>
      <p>Main title clicks {{ mainTitleClicks }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";

defineProps<{
  title: string;
}>();

const { headerTitleClicks, mainTitleClicks } = useAnnevoMenu();
</script>

<style scoped>
.click-content {
  margin-top: 20px;
}
</style>
