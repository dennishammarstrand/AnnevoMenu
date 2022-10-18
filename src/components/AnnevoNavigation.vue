<template>
  <nav>
    <button @click="expanded = !expanded">{{ expanded ? "<" : ">" }}</button>
    <AnnevoMenu
      v-for="(item, index) in menuTree"
      :key="index"
      :menu-tree="item"
      :depth="0"
    />
  </nav>
</template>

<script setup lang="ts">
import { MenuTree } from "@/modules/annevoMenu/models/MenuTree";
import { defineProps, ref } from "vue";
import AnnevoMenu from "@/components/AnnevoMenu.vue";

defineProps<{
  menuTree: MenuTree[];
}>();

const expanded = ref<boolean>(true);
</script>

<style scoped>
nav {
  height: 100%;
  padding: 10px;
  background: rgb(227, 191, 123);
  display: flex;
  flex-direction: column;
}

button {
  margin-left: auto;
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
}

button:hover {
  background-color: orange;
}
</style>
