import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/worlder'
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/worlder',
    name: 'worlder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/WorldEr.vue'),
    meta:{
      title:"主页"
    }
  },
  {
    path: '/log',
    name: 'log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/login-dl.vue'),
    meta:{
      title:"登录"
    }
  },
  {
    path: '/dbok',
    name: 'dbok',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/MaHe.vue'),
    meta:{
      title:"盲盒"
    }

  },
  {
    path: '/sc',
    name: 'sc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/SearchComponent.vue'),
    meta:{
      title:"搜索"
    }
  },
 
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/HomeEo.vue'),
    meta:{
      title:"导航"
    }
  },
  {
    path: '/demoone',
    name: 'demoone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
