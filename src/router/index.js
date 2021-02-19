import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    children: [
      // 
      {
        path: 'underScore',
        name: 'NavUnderScore',
        component: () => import('@/views/nav-item/nav-under-score')
      },
      {
        path: 'linkList',
        name: 'LinkList',
        component: () => import('@/views/nav-item/nav-link-list')
      },
      {
        path: 'linkListQuestion',
        name: 'LinkListQuestion',
        component: () => import('@/views/nav-item/nav-link-list-question')
      },
      // 
      {
        path: 'mvvm',
        name: 'Mvvm',
        component: () => import('@/views/nav-item/nav-mvvm')
      },
      {
        path: 'navCss',
        name: 'NavCss',
        component: () => import('@/views/nav-item/nav-css')
      }, 
      // common-question
      {
        path: 'navCommon',
        name: 'NavCommon',
        component: () => import('@/views/nav-item/nav-common-question')
      }, 
      {
        path: 'leeteCode',
        name: 'leeteCode',
        component: () => import('@/views/nav-item/nav-leete-code')
      },
      {
        path: 'nav1',
        name: 'Nav1',
        component: () => import('@/views/nav-item/nav-1')
      },
      {
        path: 'nav2',
        name: 'Nav2',
        component: () => import('@/views/nav-item/nav-2')
      },
      {
        path: 'nav3',
        name: 'Nav3',
        component: () => import('@/views/nav-item/nav-3')
      },
      {
        path: 'nav4',
        name: 'Nav4',
        component: () => import('@/views/nav-item/nav-4')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router