<template>
  <ul>
    <li>
      <RouterLink
        class="link"
        :style="indent"
        :to="{ name: menuTree.name }"
        @click="hide = !hide"
        >{{ menuTree.name }}</RouterLink
      >
      <template v-if="!hide">
        <AnnevoMenu
          v-for="(child, index) in menuTree.children"
          :key="index"
          :menu-tree="child"
          :depth="depth + 1"
        />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { MenuTree } from "@/modules/annevoMenu/models/MenuTree";

const props = defineProps<{
  menuTree: MenuTree;
  depth: number;
}>();

const hide = ref<boolean>(false);

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
