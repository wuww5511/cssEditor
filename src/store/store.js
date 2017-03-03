import Vuex from 'vuex'
import ele from './modules/ele'
import klass from './modules/klass'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ele,
        klass
    }
})

