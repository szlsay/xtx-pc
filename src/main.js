/*
 * @Author: your name
 * @Date: 2022-03-15 21:13:23
 * @LastEditTime: 2022-03-16 15:57:03
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /xtx-pc/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自己UI组件库
import UI from '@/components/library'

// 1. 重置样式的库
import 'normalize.css'
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
