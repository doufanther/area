import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui'
import shop from '../components/shop.vue'
import part from '../components/part'
import count from '../components/count'
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
      name: 'part',
      component: part
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/count',
      name: 'count',
      component:count
    }
  ]
})
