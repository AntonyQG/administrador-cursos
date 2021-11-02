import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Administradores from "../views/Administrators.vue";
import Perfil from "../views/Profile.vue";
import Add from "../views/AddAdmin.vue";
import Saved from "../views/SavedChanges.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/administradores",
    name: "Administradores",
    component: Administradores,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },

  {
    path: "/saved",
    name: "Saved",
    component: Saved,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
