//引入VueRouter
import Router from 'vue-router'


//创建router实例对象，去管理一组一组的路由规则
const router = new Router({
    routes: [{
            path: '/login',
            component: () => import("@/components/Login")
        }, {
            path: '/home',
            component: () => import("@/components/Main")
        }

    ]

})


//暴露router
export default router