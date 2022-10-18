<template>
  <section class="main">
    <AnnevoHeader :loading="loading" />
    <div class="nav-content">
      <div v-if="loading" class="nav-loading-container">Laddar annevo</div>
      <AnnevoNavigation v-else />
      <AnnevoContent :loading="loading" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";
import AnnevoHeader from "@/components/AnnevoHeader.vue";
import AnnevoNavigation from "@/components/AnnevoNavigation.vue";
import AnnevoContent from "@/components/AnnevoContent.vue";

const { initMenuTreeData } = useAnnevoMenu();

const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  await initMenuTreeData();
  loading.value = false;
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

.nav-loading-container {
  height: 100%;
  width: 20%;
  padding: 10px;
  background: rgb(227, 191, 123);
  display: flex;
  flex-direction: column;
}
</style>
