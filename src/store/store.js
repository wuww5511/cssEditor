import Vuex from 'vuex'
import ele from './modules/ele'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ele
    }
})

