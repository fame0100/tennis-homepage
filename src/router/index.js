import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/history",
    name: "historia",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryView.vue"),
  },
  {
    path: "/contact",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
