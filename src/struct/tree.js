class Node {
    constructor ({content = null, parent = null, children = []}) {
        this.content = content;
        this.parent = parent;
        this.children = children;
    }
    
    addChild (content = null) {
        var child = new Node({content, parent: this});
        this.children.push(child);
        return child;
    }
    
    removeChild (node) {
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i] === node) {
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
    
    addNode ({content = null, parent = null}) {
        if(parent) {
            return parent.addChild(content);
        }
        else {
            return this.head.addChild(content);
        }
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

export default Tree
