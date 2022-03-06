export class LinkedList {
    constructor() {
        this._firstNode = null;
        this._length = 0;
    }
    _getNode(index) {
        let node = this._firstNode;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
    getItem(index) {
        if (index >= this._length) {
            return undefined;
        }
        const node = this._getNode(index);
        return node.item;
    }
    add(item) {
        const addedItem = new Node(item);
        if (this._firstNode === null) {
            this._firstNode = addedItem;
            this._length = 1;
            return;
        }
        const node = this._getNode(this._length - 1);
        node.next = addedItem;
        this._length++;
        return;
    }
    addAt(index, item) {
        if (index > this._length) {
            throw new Error("out of range");
        }
        const addedItem = new Node(item);
        if (index === 0) {
            addedItem.next = this._firstNode;
            this._firstNode = addedItem;
            this._length++;
            return;
        }
        const node = this._getNode(index - 1);
        addedItem.next = node.next;
        node.next = addedItem;
        this._length++;
    }
    clear() {
        this._length = 0;
        this._firstNode = null;
    }
    remove(index) {
        var _a, _b;
        if (index >= this._length) {
            throw new Error("out of range");
        }
        if (index === 0) {
            this._firstNode = ((_a = this._firstNode) === null || _a === void 0 ? void 0 : _a.next) || null;
        }
        const node = this._getNode(index - 1);
        node.next = ((_b = node.next) === null || _b === void 0 ? void 0 : _b.next) || null;
        this._length--;
    }
    get length() {
        return this._length;
    }
}
class Node {
    constructor(item) {
        this._item = item;
        this._next = null;
    }
    get next() {
        return this._next;
    }
    get item() {
        return this._item;
    }
    set next(item) {
        this._next = item;
    }
}
