import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld'; // 同步加载组件

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue'), // 异步加载组件
    },
    {
      path: '/axios',
      name: 'Axios',
      component: () => import('@/views/axios.vue'), // 异步加载组件
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
