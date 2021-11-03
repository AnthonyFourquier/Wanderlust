import Vue from "vue";
import VueRouter from "vue-router";
import FilActus from "../views/FilActus.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [

  {
    path:"/FilActus",
    name: 'FilActus',
    component: FilActus
  },

  {
    path: "/profil",
    name: "Profil",
    component: Profil
  },

  {
    path:"/login",
    name: 'Login',
    component: Login
  },

  {
    path:"/logout",
    name: 'Logout',
    component: Logout
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
