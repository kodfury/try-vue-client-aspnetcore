import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login/Login.vue')
// import Login from "../views/Login/Login.vue"
import store from '@/store'

Vue.use(VueRouter);

const userJson = localStorage.getItem('user')

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log('userJson', store)

  let user = JSON.parse(userJson)
  if (user.userName && !store.state.user) store.commit('setUser', user)
  if(to.name != 'login' && !user.userName) next({name: 'login'})
  else next()
})

export default router;
