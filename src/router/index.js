import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)
/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
 **/
export const constantRoutes = [

  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'home',
      component: () => import('@/views/index/index')
    }]
  },
  {
    path: '/company',
    component: Layout,
    children: [{
      path: '',
      name: 'company',
      component: () => import('@/views/company/index')
    }]
  },
  {
    path: '/payment',
    component: Layout,
    children: [{
      path: '',
      name: 'payment',
      component: () => import('@/views/payment/index')
    }]
  },
  // {
  //   path: '/online-payment',
  //   component: Layout,
  //   redirect: '/online-payment',
  //   // name: 'online-payment',
  //   meta: { title: '线上支付', icon: 'example' },
  //   children: [
  //     {
  //       path: '',
  //       name: 'online-payment',
  //       component: () => import('@/views/onlinePayment/index')
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/resource',
  //   component: Layout,
  //   redirect: '/resource/list',
  //   name: 'Resource',
  //   meta: { title: '功能菜单列表', icon: 'example', path: '/portal-system-resource/navigation' },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'resourceList',
  //       component: () => import('@/views/resource/list'),
  //       meta: { title: '功能菜单列表', icon: 'table', path: '/portal-system-resource/list' }
  //     }
  //   ]
  // },
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
