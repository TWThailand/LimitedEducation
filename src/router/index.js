import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VoteDetail from '@/components/vote/Detail'

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
      name: 'vote',
      component: VoteDetail,
      props: true
    }
  ]
})
