import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
