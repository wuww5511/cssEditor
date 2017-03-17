function f () {}

class Action {
    constructor (data = {}) {
        Object.assign(this, data);
    }
    
    onExec (callback) {
        this.todo = callback || f;
    }
    
    onUndo (callback) {
        this.undo = callback || f;
    }
    
    exec () {
        this.todo();
    }
    
    undo () {
        this.undo();
    }
}

export default Action;