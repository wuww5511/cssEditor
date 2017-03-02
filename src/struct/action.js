class Action {
    constructor (todo = () => {}, undo = () => {}) {
        this.todo = todo;
        this.undo = undo;
    }
    
    exec () {
        this.todo();
    }
    
    undo () {
        this.undo();
    }
}

export default Action;