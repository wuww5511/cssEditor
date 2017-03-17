import Ele from '@/struct/ele'
import {Tree} from '@/struct/tree'
import {exec, Action} from '@/util/action'

const tree = new Tree(new Ele())

const state = {
    tree,
    active: tree.head
}

const actions = {}

const mutations = {
    addNode: function (state) {
        
        var action = new Action({
            oldActive: state.active,
            newNode: Tree.createNode(new Ele())
        });

        action.onExec(function () {
            state.active = this.oldActive.addChild(this.newNode);
        });
        
        action.onUndo(function () {
            state.active = this.oldActive;
            this.newNode.remove();
        });

        exec(action);
    },
    
    deleteNode: function (state) {
        if(state.active == tree.head) return;
        
        var action = new Action({
            oldActive: state.active,
            oldParent: state.active.parent
        });
        
        action.onExec(function () {
            state.active = this.oldParent;
            this.oldActive.remove();
        });
        
        action.onUndo(function () {
            this.oldParent.addChild(this.oldActive);
            state.active = this.oldActive;
        });
        
        exec(action);
        
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
