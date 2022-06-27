import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: About,
  },

  {
    path: "/route",
    name: "Route",
    component: About,
  },
 
  {
    path: "/config",
    name: "Config",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/user/" : "/"),
  routes,
});

export default router;
