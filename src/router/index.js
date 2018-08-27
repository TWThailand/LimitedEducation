import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VoteDetail from '@/components/vote/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vote',
      component: VoteDetail
    }
  ]
})
