<template>
  <nav>
    <AnnevoMenu
      v-for="(item, index) in menuTree"
      :key="index"
      :menu-tree="item"
      :depth="0"
    />
  </nav>
</template>

<script setup lang="ts">
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";
import AnnevoMenu from "@/components/AnnevoMenu.vue";

const { menuTree } = useAnnevoMenu();
</script>

<style scoped>
nav {
  height: 100%;
  width: 20%;
  padding: 10px;
  background: rgb(227, 191, 123);
  display: flex;
  flex-direction: column;
}
</style>
