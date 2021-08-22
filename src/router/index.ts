import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Search from "../views/Search.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/dummy-view",
    name: "DummyView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dummyView" */ "../views/DummyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
