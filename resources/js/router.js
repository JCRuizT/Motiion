import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import category from './views/category'
import about from './views/about'
import contact from "./views/contact"
import adminMachine from "./views/admin-machine.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'motiion-home',
      component: home,
      beforeEnter: (to, from, next) => {

        next();
      }
    },

    {
      path: '/catalogue',
      name: 'motiion-category',
      component: category
    },

    {

      path: "/about",
      name: "motiion-about",
      component: about
    },

    {

      path: "/contact",
      name: "motiion-contact",
      component: contact
    },


    {

      path: "/admin/machine",
      name: "admin-machine",
      component: adminMachine
    }
  ]
})
