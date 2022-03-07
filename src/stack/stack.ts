import Node from "../node/node";

class Stack<T> {
  private _lastNode: Node<T> | null;
  private _length: number;

  constructor() {
    this._lastNode = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  push(item: T) {
    const node = new Node<T>(item);
    if (this._lastNode) {
      node.next = this._lastNode;
      this._lastNode = node;
    } else {
      this._lastNode = node;
    }
    this._length++;
  }

  pop() {
    if (this._lastNode === null) {
      throw new Error("stack is empty");
    }
    const result = this._lastNode.item;

    this._lastNode = this._lastNode.next;
    this._length--;

    return result;
  }

  peek() {
    return this._lastNode?.item;
  }
}

export default Stack;
