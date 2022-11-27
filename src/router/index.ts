import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFoundView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpView.vue"),
  },
  {
    path: "/activities",
    name: "activities",
    component: () =>
      import(
        /* webpackChunkName: "activities" */ "../views/ActivitiesView.vue"
      ),
  },
  {
    path: "/groups",
    name: "groups",
    component: () =>
      import(/* webpackChunkName: "groups" */ "../views/GroupsView.vue"),
  },
  {
    path: "/prescription",
    name: "prescription",
    component: () =>
      import(
        /* webpackChunkName: "prescription" */ "../views/PrescriptionView.vue"
      ),
  },
  {
    path: "/results",
    name: "results",
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/ResultsView.vue"),
  },
  {
    path: "/service",
    name: "service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/ServiceView.vue"),
  },
  {
    path: "/tips",
    name: "tips",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/TipsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
