export class LinkedList {
    constructor() {
        this._lastNode = null;
        this._length = 0;
    }
    push(item) {
        this._length++;
        this._lastNode = {
            item,
            next: this._lastNode,
        };
    }
    pop() {
        if (!this._lastNode) {
            return null;
        }
        const result = this._lastNode.item;
        this._lastNode = this._lastNode.next;
        this._length--;
        return result;
    }
    get length() {
        return this._length;
    }
}
