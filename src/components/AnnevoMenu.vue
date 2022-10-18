<template>
  <ul>
    <li>
      <RouterLink class="link" :style="indent" :to="{ name: menuTree.name }">{{
        menuTree.name
      }}</RouterLink>
      <AnnevoMenu
        v-for="(child, index) in menuTree.children"
        :key="index"
        :menu-tree="child"
        :depth="depth + 1"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { MenuTree } from "@/modules/annevoMenu/models/MenuTree";

const props = defineProps<{
  menuTree: MenuTree;
  depth: number;
}>();

const indent = computed(() => ({ "margin-left": `${props.depth * 15}px` }));
</script>

<style>
.link:active {
  text-decoration: none;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}

.link {
  text-decoration: none;
  white-space: nowrap;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
