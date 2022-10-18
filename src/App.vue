<template>
  <section class="main">
    <AnnevoHeader />
    <div class="nav-content">
      <AnnevoNavigation v-if="menuTree" :menu-tree="menuTree" />
      <AnnevoContent />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";
import AnnevoHeader from "@/components/AnnevoHeader.vue";
import AnnevoNavigation from "@/components/AnnevoNavigation.vue";
import AnnevoContent from "@/components/AnnevoContent.vue";

const { menuTree, initMenuTreeData } = useAnnevoMenu();

onMounted(async () => {
  await initMenuTreeData();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.nav-content {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
