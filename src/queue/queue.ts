import Node from "../node/node";

class CustomQueue<T> {
  private _frontNode: Node<T> | null;
  private _backNode: Node<T> | null;
  private _length: number;

  constructor() {
    this._frontNode = null;
    this._backNode = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  add(item: T) {
    const node = new Node<T>(item);

    if (this._frontNode === null) {
      this._frontNode = node;
      this._backNode = node;
    } else {
      node.next = this._backNode;
      this._backNode = node;
    }

    this._length++;
  }

  poll() {
    if (!this._frontNode) {
      return undefined;
    }
    const result = this._frontNode.item;

    this._frontNode = this._frontNode.next;
    this._length--;

    return result;
  }
  peek() {
    return this._frontNode?.item;
  }
}

export default CustomQueue;
