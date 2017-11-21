import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Management from '../components/manage'
import Analysis from '../components/analysis'
import dataView from '../components/dataview'
import getStatistic from '../components/getstatistic'
import trafficStatistic from '../components/trafficstatistic'
import shipperList from '../components/shipperList'
import shipperCertification from '../components/shippercertification'
import driverList from '../components/driverList'
import driverCertification from '../components/drivercertification'
import Login from '../components/login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '',
          redirect: '/home/analysis'
        },
        {
          path: 'analysis',
          name: 'Analysis',
          component: Analysis,
          children:[
            {
              path: '',
              redirect: '/home/dataview'
            },
            {
              path: '/home/dataview',
              name: 'dataView',
              component: dataView,
            },
            {
              path: '/home/getstatistic',
              name: 'getStatistic',
              component: getStatistic,
            },
            {
              path: '/home/trafficstatistic',
              name: 'trafficStatistic',
              component: trafficStatistic,
            }
          ]
        },
        {
          path: 'management',
          name: 'Management',
          component: Management,
          children:[
                {
                  path: '',
                  redirect: '/home/shipperList'
                },
                {
                  path: '/home/shipperList',
                  name: 'shipperList',
                  component: shipperList,
                },
                {
                  path: '/home/shippercertification',
                  name: 'shippercertification',
                  component: shipperCertification,
                },
                {
                  path: '/home/driverList',
                  name: 'driverList',
                  component: driverList,
                },
                {
                  path: '/home/drivercertification',
                  name: 'driverCertification',
                  component: driverCertification,
                }
              ]
        },
      ]
    },
    {
      path: '/login',
      component: Login,
    }

  ]
})
