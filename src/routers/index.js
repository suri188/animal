import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import list from './list'
import cat from './alliance'
import shopcar from './shopcar'
import mine from './mine'
import shoplist from './shoplist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    list,
    cat,
    shopcar,
    mine,
    shoplist,
    {
      path:"**",
      redirect:"/home"
    }
  ]
})