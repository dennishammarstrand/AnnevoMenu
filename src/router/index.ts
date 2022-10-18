import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import AnnevoView from "../views/AnnevoView.vue";
import { useAnnevoMenu } from "@/modules/annevoMenu/useAnnevoMenu";

const { navigationMenu } = useAnnevoMenu();
console.log(navigationMenu);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect() {
      return "Somenode1";
    },
  },
  {
    path: "/Somenode1",
    name: "Some node 1",
    component: AnnevoView,
    meta: {
      title: "Some node 1",
    },
    props: (route: RouteLocationNormalized) => ({
      title: route.meta.title as string,
    }),
    children: [
      {
        path: "/Somenode1.1",
        name: "Some node 1.1",
        component: AnnevoView,
        meta: {
          title: "Some node 1.1",
        },
        props: (route: RouteLocationNormalized) => ({
          title: route.meta.title as string,
        }),
        children: [
          {
            path: "/Somenode1.1.1",
            name: "Some node 1.1.1",
            component: AnnevoView,
            meta: {
              title: "Some node 1.1.1",
            },
            props: (route: RouteLocationNormalized) => ({
              title: route.meta.title as string,
            }),
          },
        ],
      },
      {
        path: "/Somenode1.2",
        name: "Some node 1.2",
        component: AnnevoView,
        meta: {
          title: "Some node 1.2",
        },
        props: (route: RouteLocationNormalized) => ({
          title: route.meta.title as string,
        }),
      },
      {
        path: "/Somenode1.3",
        name: "Some node 1.3",
        component: AnnevoView,
        meta: {
          title: "Some node 1.3",
        },
        props: (route: RouteLocationNormalized) => ({
          title: route.meta.title as string,
        }),
        children: [
          {
            path: "/Somenode1.3.1",
            name: "Some node 1.3.1",
            component: AnnevoView,
            meta: {
              title: "Some node 1.3.1",
            },
            props: (route: RouteLocationNormalized) => ({
              title: route.meta.title as string,
            }),
          },
        ],
      },
      {
        path: "/Somenode1.4",
        name: "Some node 1.4",
        component: AnnevoView,
        meta: {
          title: "Some node 1.4",
        },
        props: (route: RouteLocationNormalized) => ({
          title: route.meta.title as string,
        }),
      },
    ],
  },
  {
    path: "/Somenode2",
    name: "Some node 2",
    component: AnnevoView,
    meta: {
      title: "Some node 2",
    },
    props: (route: RouteLocationNormalized) => ({
      title: route.meta.title as string,
    }),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
