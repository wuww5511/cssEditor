/**
 *  @param {Ele}
 **/
function getLabel ({tagName, classList = []}) {
    if(classList.length > 0)
        return `<${tagName} class="${classList.join(" ")}">`;
    else
        return `<${tagName}>`
}

function node2state (node) {
    var res = {
        label: getLabel(node.content),
        id: node.content.id,
        children: []
    };
    
    node.children.forEach((node) => {
        res.children.push(node2state(node));
    });
    
    return res;
    
}

export {node2state}