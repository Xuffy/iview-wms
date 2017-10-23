import Vue from 'vue'
import Router from 'vue-router'

import Layout from 'components/Layout/index.vue'

Vue.use(Router);


export const routerMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '首页',
    hidden: true, // 在侧边栏中不显示该菜单
    children: [{
      path: 'index',
      component: function (resolve) {
        require(['../views/index.vue'], resolve)
      }
    }]
  },
  {
    path: '/introduce',
    component: Layout,
    redirect: '/introduce/index',
    name: '项目介绍',
    children: [
      {
        path: 'index',
        name: '项目环境',
        component: function (resolve) {
          require(['../views/introduce/index.vue'], resolve)
        }
      },
      {
        path: 'structure',
        name: '项目结构',
        component: function (resolve) {
          require(['../views/introduce/structure.vue'], resolve)
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    name: '表单组件',
    children: [
      {
        path: 'index',
        name: 'Form表单',
        component: function (resolve) {
          require(['../views/form/index.vue'], resolve)
        }
      }
    ]
  }
]


export default new Router({
  routes: routerMap
})
