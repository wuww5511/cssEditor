import Klass from '@/struct/klass'
import {exec} from '@/util/action'

const state = {
    klasses: []
};

function add (klass) {
    state.klasses.push(klass);
}

function del (id) {
    var arr = state.klasses;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id == id){
            return arr.splice(i, 1);
        }
    }
}

const mutations = {
    addKlass: ({klasses}, {name, style}) => {
        (function () {
            var klass = new Klass(name, style);
            exec(() => {
                add(klass); 
            }, () => {
                del(klass.id);
            });
        })();
    },
    
    deleteKlass: (state, id) => {
        (function () {
            var klass = null;
            exec(() => {
                klass = del(id); 
            }, () => {
                if(klass) add(klass);
            });
        })();
    },
    
    updateKlass: () => {
        
    }
};

const actions = {};

export default {
    state,
    mutations,
    actions
}