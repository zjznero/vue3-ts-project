import {defineConfig} from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
//引入path模块，用来获取文件路径
import path from 'path'
export default defineConfig({
    plugins: [vue(), createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],//放图标的地址
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    })],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})