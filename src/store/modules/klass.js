import Klass from '@/struct/klass'
import {exec, Action} from '@/util/action'

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

function get (id) {
    var arr= state.klasses;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id == id){
            return arr[i];
        }
    }
}

const mutations = {
    addKlass: ({klasses}, {name, style}) => {
        
        var action = new Action({
            klass: new klass(name, style)
        })
        
        action.onExec(function () {
            add(this.klass);
        });
        
        action.onUndo(function () {
            del(this.klass.id);
        });
        
        exec(action);
        
    },
    
    deleteKlass: (state, id) => {
        
        var action = new Action({
            klass: get(id)
        });
        
        action.onExec(function () {
            del(this.klass.id);
        });
        
        action.onUndo(function () {
            add(this.klass);
        });
        
        exec(action);
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