import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import UserCrud from '../pages/UserCrud'
import ImovelCrud from '../pages/ImovelCrud'


Vue.use(VueRouter)

const routes = [
  { path: '/',      name: 'HomePage',    component: HomePage   },
  { path: '/users', name: 'UserCrud', component: UserCrud },
  { path: '/imoveis', name: 'ImovelCrud', component: ImovelCrud }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
