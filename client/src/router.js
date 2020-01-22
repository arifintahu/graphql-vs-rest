import Vue from "vue";
import Router from "vue-router";
import store from './store/index';

import Login from "./views/login.vue";
import Main from "./views/main.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      meta : {
        auth : true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "*",
      redirect: {
        name: "main"
      }
    }
  ]
});


router.beforeEach((to, from, next) => {
  // check meta auth
  if (to.matched.some(record => record.meta.auth)) {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      //if no auth key, login page
      next('/login');
    } else {
      //cek validity
      store.commit('readUser');
      next();
    }
  } else {
    //if no meta auth, next page
    next();
  }
});

export default router;
