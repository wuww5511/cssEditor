class Klass {
    constructor (name = "", style = {}) {
        this.name = name;
        this.style = style;
        this.id = `klass${+new Date()}`;
    }
}

export default Klass;