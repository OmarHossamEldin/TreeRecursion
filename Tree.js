class Tree {
    #items = [];
    #parents = []
    constructor(items = []) {
        this.#items = items;
    }
    set_items(items) {
        this.#items = items;
    }
    get_items() {
        return this.#items;
    }
    set_parents(condition) {
        this.#parents = this.#items.filter(item => condition(item));
    }

    get_parents() {
        if (this.#parents.length === 0) throw new Error('use set parents method please');
        return this.#parents;
    }

    #get_children(parent, items) {
        return items.filter(item => item.parent_id === parent.id);
    }

    build(parents) {
        parents.forEach(parent => {
            const children = this.#get_children(parent, this.get_items());
            if (children.length === 0) {
                parent.children = [];
            } else {
                parent.children = children;
                this.build(parent.children);
            }
        });
        return parents;
    }
}

export {Tree};