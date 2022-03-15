import { createStore } from 'vuex'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  }
})
