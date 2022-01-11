import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import('@/containers/TheContainer')
const Login = () => import("@/views/Login");
const ForgotPassword = () => import('@/views/ForgotPassword')

//User
const User = () => import("@/views/User");

const More = () => import("@/views/More");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    
    {
      path: '/',
      redirect: '/user',
      name: 'Trang chủ',
      component: TheContainer,
      children: [
        {
          path: 'user',
          component: {
            render(c) {
              return c('router-view')
            },
          },
          children: [
            {
              path: '',
              component: User,
            },
          ],
        },
        {
          path: 'more',
          meta: {
            label: 'danh mục tham khảo',
          },
          component: {
            render(c) {
              return c('router-view')
            },
          },
          children: [
            {
              path: '',
              component: More,
            },
          ],
        },
      ]
    },
    {
      path: "/login",
      name: "Đăng nhập",
      component: Login,
    },
    {
      path: '/forgotPassword',
      name: 'Quên mật khẩu',
      component: ForgotPassword,
    },
  ];
}
