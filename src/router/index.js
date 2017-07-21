import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui'
import ServerPartShop from '../components/ServerPartShop.vue'
import SERVERPART from '../components/SERVERPART'
import Endaccount from '../components/Endaccount'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router);

Vue.use(ElementUI)
export default new Router({
//	mode:'history',
//	scrollBehavior:()=>({
//		y:0
//	}),
//	linkActiveClass:'active',
  routes: [
		{
      path: '/',
      name: 'SERVERPART',
      component: SERVERPART
    },
    {
      path: '/ServerPartShop',
      name: 'ServerPartShop',
      component: ServerPartShop
    },
    {
      path: '/Endaccount',
      name: 'Endaccount',
      component: Endaccount
    }
  ]
})
