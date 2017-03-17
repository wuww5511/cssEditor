class Node {
    constructor ({content = null, parent = null, children = []}) {
        this.content = content;
        this.parent = parent;
        this.children = children;
    }
    
    addChild (node) {
        node.parent = this;
        this.children.push(node);
        return node;
    }
    
    removeChild (node) {
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i] === node) {
                node.parent = null;
                this.children.splice(i, 1);
                break;
            }
        }
    }
    
    remove () {
        this.parent.removeChild(this);
    }
}

class Tree {
    constructor (content = null) {
        this.head = new Node({content});
    }
    
    search (callback = () => {}) {
        var stack = [this.head];
        while(stack.length > 0) {
            var node = stack.pop();
            callback(node);
            stack = [...stack, ...node.children]
        }
    }
    
}

Tree.createNode = function (content = {}) {
    return new Node({content});
};

export {
    Tree,
    Node
}
