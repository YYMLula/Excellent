import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/worlder'
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/worlder',
    name: 'worlder',
    component: () => import('../components/WorldEr.vue'),
    meta:{
      title:"主页"
    }
  },
  {
    path: '/log',
    name: 'log',
    component: () => import('../components/login-dl.vue'),
    meta:{
      title:"登录"
    }
  },
  {
    path: '/dbok',
    name: 'dbok',
    component: () => import('../components/DaAnbook.vue'),
    meta:{
      title:"答案之书"
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/E404E.vue'),
    meta:{
      title:"404"
    }
  },
  {
    path: '/ms',
    name: 'ms',
    component: () => import('../components/MaHe.vue'),
    meta:{
      title:"盲盒"
    }

  },
  {
    path: '/sc',
    name: 'sc',
    component: () => import('../components/SearchComponent.vue'),
    meta:{
      title:"搜索"
    }
  },
 
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/HomeEo.vue'),
    meta:{
      title:"导航"
    }
  },
  {
    path: '/demoone',
    name: 'demoone',
    component: () => import('../components/DemoOne.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})


export default router
