interface Node<T> {
  item: T;
  next: Node<T> | null;
}

export class LinkedList<T> {
  private _lastNode: Node<T> | null;
  private _length: number;

  constructor() {
    this._lastNode = null;
    this._length = 0;
  }

  push(item: T) {
    this._length++;

    this._lastNode = {
      item,
      next: this._lastNode,
    };
  }

  pop(): T | null {
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
