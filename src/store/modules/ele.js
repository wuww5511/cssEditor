import Ele from '@/struct/ele'
import Tree from '@/struct/tree'
import {exec} from '@/util/action'

const tree = new Tree(new Ele())

const state = {
    tree,
    active: tree.head
}

const actions = {}

const mutations = {
    addNode: function (state) {
        (function () {
            var node = Tree.createNode(new Ele());
            var active = state.active;
            exec(() => {
                state.active = active.addChild(node);   
            }, () => {
                state.active = active;
                node.remove();
            })
        })();
    },
    deleteNode: function (state) {
        if(state.active == tree.head) return;
        
        (function () {
            var active = state.active,
                parent = active.parent;
            
            exec(() => {
                state.active = active.parent;
                active.remove();
            }, () => {
                parent.addChild(active);
                state.active = active;
            });    
        })();
        
    },
    updateActive: function (state, id) {
        tree.search((node) => {
            if(node.content.id == id) {
                state.active = node;
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}
