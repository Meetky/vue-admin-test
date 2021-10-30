/*
 * @Description  : 
 * @Author       : Concon
 * @Date         : 2021-10-28 21:50:46
 * @LastEditors  : Concon
 * @LastEditTime : 2021-10-30 12:11:26
 * @FilePath     : \\Projects\\TestPlatform\\VueDemo\\vue-admin-test\\vue-admin-test\\src\\router\\index.js
 * Copyright (C) 2021 Concon. All rights reserved.
 */
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