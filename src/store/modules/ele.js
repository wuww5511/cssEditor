import Ele from '@/struct/ele'
import Tree from '@/struct/tree'

const tree = new Tree(new Ele())

const state = {
    tree,
    active: tree.head
}

const actions = {}

const mutations = {
    addNode: function (state) {
        state.active = state.active.addChild(new Ele())
    },
    deleteNode: function (state) {
        if(state.active == tree.head) return;
        state.active.remove();
        state.active = tree.head;
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
