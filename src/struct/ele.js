class Ele {
    constructor (opts = {}) {
        var {tagName = 'div', style = {}, classList = []} = opts;
        this.tagName = tagName;
        this.style = style;
        this.classList = classList;
        this.id = `ele${+new Date()}`;
    }
}

export default Ele
