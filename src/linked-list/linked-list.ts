export class LinkedList<T> {
  private _firstNode: Node<T> | null;
  private _length: number;

  constructor() {
    this._firstNode = null;
    this._length = 0;
  }

  private _getNode(index: number) {
    let node = this._firstNode;
    for (let i = 0; i < index; i++) {
      node = node!.next;
    }

    return node!;
  }

  getItem(index: number) {
    if (index >= this._length) {
      return undefined;
    }

    const node = this._getNode(index);
    return node.item;
  }

  add(item: T) {
    const addedItem = new Node<T>(item);

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

  addAt(index: number, item: T) {
    if (index > this._length) {
      throw new Error("out of range");
    }

    const addedItem = new Node<T>(item);
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

  remove(index: number) {
    if (index >= this._length) {
      throw new Error("out of range");
    }

    if (index === 0) {
      this._firstNode = this._firstNode?.next || null;
    }

    const node = this._getNode(index - 1);
    node.next = node.next?.next || null;
    this._length--;
  }

  get length() {
    return this._length;
  }
}

class Node<T> {
  private _item: T;
  private _next: Node<T> | null;
  constructor(item: T) {
    this._item = item;
    this._next = null;
  }

  get next() {
    return this._next;
  }

  get item() {
    return this._item;
  }

  set next(item: Node<T> | null) {
    this._next = item;
  }
}
