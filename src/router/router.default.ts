export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("@/pages/login/index.vue")
    }
]