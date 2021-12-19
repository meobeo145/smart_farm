import Vue from "vue";
import Router from "vue-router";

// Containers
const Login = () => import("@/views/Login");
const ForgotPassword = () => import('@/views/ForgotPassword')

//User
const User = () => import("@/views/User");

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
      component: User,
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
