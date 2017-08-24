import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/pghpc',
  routes: [
    // { path: '*', component: NotFoundComponent },
    {
      path: '/',
      redirect: '/index',
      name: 'Home',
      component: Index,
      children: [
      	{ path: '/index', meta: { keepAlive: true }, component: resolve => require(['@/components/Index/Index'], resolve) },

      	{ path: '/about', component: resolve => require(['@/components/About/Index'], resolve) },

      	{ path: '/activity', meta: { keepAlive: true }, component: resolve => require(['@/components/Activity/Index'], resolve) },
      	{ path: '/activity/activitydetail/:id', name: 'ActivityDetail', component: resolve => require(['@/components/Activity/ActivityDetail'], resolve) },

        { path: '/news', meta: { keepAlive: true }, component: resolve => require(['@/components/News/Index'], resolve) },
      	{ path: '/news/newsdetail/:id', name: 'NewsDetail',  component: resolve => require(['@/components/News/NewsDetail'], resolve) },

        { path: '/coach', meta: { keepAlive: true }, component: resolve => require(['@/components/Coach/Index'], resolve) },
      	{ path: '/coach/coachdetail/:id', name: 'CoachDetail', component: resolve => require(['@/components/Coach/CoachDetail'], resolve) },

        { path: '/join', component: resolve => require(['@/components/Join/Index'], resolve) },

      	{ path: '/index/more', component: resolve => require(['@/components/Common/English'], resolve) },

     ]
    }
  ]
})
