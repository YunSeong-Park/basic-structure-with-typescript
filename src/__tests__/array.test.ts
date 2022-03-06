import { LinkedList } from "./../linked-list/linked-list";

describe("LinkedList", () => {
  describe("primitive", () => {
    let array: LinkedList<number>;
    beforeEach(() => {
      array = new LinkedList<number>();
    });

    test("is created empty", () => {
      expect(array.length).toBe(0);
    });

    test("push item & save", () => {
      array.push(1);
      expect(array.length).toBe(1);
    });

    test("pop", () => {
      const item = 1;
      array.push(item);
      const popedItem = array.pop();
      expect(item).toBe(popedItem);
      expect(array.length).toBe(0);
    });

    test("have length of items", () => {
      const length = 20;
      for (let i = 0; i < length; i++) {
        array.push(1);
      }

      expect(array.length).toBe(length);
    });
  });
});
