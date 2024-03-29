import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "reader" */ "../views/ErrorView.vue"),
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFoundView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersView.vue"),
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
    path: "/tips/:reload?",
    name: "tips",
    component: () =>
      import(/* webpackChunkName: "tips" */ "../views/TipsView.vue"),
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: () =>
      import(/* webpackChunkName: "quiz" */ "../views/QuizView.vue"),
  },
  {
    path: "/challenge/:id",
    name: "challenge",
    component: () =>
      import(/* webpackChunkName: "challenge" */ "../views/ChallengeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
