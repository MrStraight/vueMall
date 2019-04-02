import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import CityHome from '@/pages/city/CityHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
		  path: '/city',
		  name: 'CityHome',
		  component: CityHome
		}
  ]
})
/* asdasdsadsdasadsad */