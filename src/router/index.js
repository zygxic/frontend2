import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/HomePage'
import Detailpage from '@/components/DetailPage'
import Contactpage from '@/components/ContactPage'
import Collectionpage from '@/components/CollectionPage'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/detailpage/:id',
      name: 'DetailPage',
      component: Detailpage
    },
    {
      path: '/contactpage',
      name: 'ContactPage',
      component: Contactpage
    },
    {
      path: '/collectionpage',
      name: 'CollectionPage',
      component: Collectionpage
    }
  ]
})


