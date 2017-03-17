import Action from '@/struct/action';

//已执行过的操作
var actions = [];
var max = 10;
//已撤销的操作
var undos = [];

function exec (action) {
    undos = [];
    actions.push(action);
    action.exec();
}

function undo () {
    if(actions.length == 0) return;
    if(actions.length == max) actions.shift();
    var action = actions.pop();
    action.undo();
    undos.push(action);
}

function redo () {
    if(undos.length == 0) return;
    
    var action = undos.pop();
    action.exec();
    actions.push(action);
}

export {
    redo,
    undo,
    exec,
    Action
};