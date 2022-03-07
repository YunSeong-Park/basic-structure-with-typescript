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
export default Node;
