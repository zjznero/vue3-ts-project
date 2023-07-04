import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'

//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import gloablComponent from '@/components/index';
import './styles/index.scss'
import App from '@/App.vue'
const app = createApp(App)
app.use(gloablComponent);
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')

console.log(import.meta.env);