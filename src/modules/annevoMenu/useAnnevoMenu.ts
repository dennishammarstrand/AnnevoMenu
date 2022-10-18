import { ref } from "vue";
import { MenuTree } from "./models/MenuTree";
import { fetchMenuTreeData } from "@/services/apiService";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import AnnevoView from "@/views/AnnevoView.vue";

const menuTree = ref<MenuTree[] | undefined>();
const headerTitleClicks = ref<number>(0);
const mainTitleClicks = ref<number>(0);

const initMenuTreeData = async () => {
  menuTree.value = await fetchMenuTreeData();
  buildNavigationMenu(menuTree.value);
};

const navigationMenu: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect() {
      return "Somenode1";
    },
  },
];

const buildNavigationMenu = (tree: MenuTree[]) => {
  const createRouteItem = (treeNode: MenuTree): RouteRecordRaw => {
    return {
      path: `/${treeNode.name.replace(/\s/g, "")}`,
      name: treeNode.name,
      component: AnnevoView,
      meta: {
        title: treeNode.name,
      },
      props: (route: RouteLocationNormalized) => ({
        title: route.meta.title as string,
      }),
      children: treeNode.children
        ? treeNode.children.map((node) => createRouteItem(node))
        : [],
    };
  };

  tree.forEach((node) => {
    navigationMenu.push(createRouteItem(node));
  });
};

export const useAnnevoMenu = () => ({
  headerTitleClicks,
  mainTitleClicks,
  initMenuTreeData,
  menuTree,
  navigationMenu,
});
