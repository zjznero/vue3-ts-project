<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              show-password
              type="password"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="isLoading"
              :disabled="isDisabled"
              class="login_btn"
              @click="login"
              type="primary"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
//引入用户相关的小仓库
import useUserStore from '../../store/modules/user'
const useStore = useUserStore()
const $router = useRouter()
//收集账号与密码的数据
let loginForm = reactive({
  username: '',
  password: '',
})
//定义变量控制按钮加载效果
const isLoading = ref(false)
const isDisabled = ref(false)
const login = async () => {
  //点击登录按钮以后干什么呢
  isLoading.value = true
  isDisabled.value = true
  try {
    await useStore.userLogin(loginForm)
    isLoading.value = false
    isDisabled.value = false
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (error) {
    isLoading.value = false
    isDisabled.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    padding: 40px 100px;
    background: url('../../assets/images/login_form.png');

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: #fff;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
