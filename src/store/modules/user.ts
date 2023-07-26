//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/apis/user'
//引入数据类型
import type { loginForm, loginResponseData } from '@/apis/user/type'
import type { UserState } from './types/types'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//创建用户小仓库
let useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginForm) {
      let res: loginResponseData = await reqLogin(data)
      //登录请求：成功200->token
      //登录请求：失败201->error.msg
      if (res.code == 200) {
        //由于pinia存储数据其实是利用的js对象
        this.token = res.data.token as string
        //本地存储持久化存储一份
        SET_TOKEN(res.data.token as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
