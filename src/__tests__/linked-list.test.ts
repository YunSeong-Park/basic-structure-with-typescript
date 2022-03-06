import { LinkedList } from "../linked-list/linked-list";

describe("LinkedList", () => {
  let list: LinkedList<number>;
  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test("is created empty", () => {
    expect(list.length).toBe(0);
    expect(list.getItem(0)).toBe(undefined);
  });

  test("allow to add item", () => {
    const firstItem = 1;
    const secondItem = 2;
    list.add(firstItem);
    list.add(secondItem);

    expect(list.length).toBe(2);
    expect(list.getItem(0)).toBe(firstItem);
    expect(list.getItem(1)).toBe(secondItem);
  });

  describe("add at", () => {
    let length = 10;
    beforeEach(() => {
      for (let i = 0; i < length; i++) {
        list.add(i);
      }
    });

    test("item index 0", () => {
      list.addAt(0, 10);

      expect(list.length).toBe(length + 1);
      expect(list.getItem(0)).toBe(10);
      for (let i = 1; i < length + 1; i++) {
        expect(list.getItem(i)).toBe(i - 1);
      }
    });

    test("item last index", () => {
      const value = 1542;
      list.addAt(length, value);

      expect(list.length).toBe(length + 1);
      for (let i = 0; i < length; i++) {
        expect(list.getItem(i)).toBe(i);
      }
      expect(list.getItem(length)).toBe(value);
    });

    test("item specific index", () => {
      const index = 5;
      const item = 150;
      list.addAt(index, item);

      expect(list.length).toBe(length + 1);
      for (let i = 0; i < index; i++) {
        expect(list.getItem(i)).toBe(i);
      }

      expect(list.getItem(index)).toBe(item);

      for (let i = index + 1; i < length + 1; i++) {
        expect(list.getItem(i)).toBe(i - 1);
      }
    });

    test("throw Error when out of bound", () => {
      expect(() => list.addAt(length + 1, 100)).toThrowError("out of range");
    });
  });

  test("clear", () => {
    for (let i = 0; i < 100; i++) {
      list.add(i);
    }
    list.clear();

    expect(list.length).toBe(0);
    expect(list.getItem(0)).toBe(undefined);
  });

  describe("remove", () => {
    let length = 10;
    beforeEach(() => {
      for (let i = 0; i < length; i++) {
        list.add(i);
      }
    });

    test("itme specific index", () => {
      const value = 4;
      list.remove(value);

      expect(list.length).toBe(length - 1);
      for (let i = 0; i < length - 1; i++) {
        expect(list.getItem(i)).toBe(i < value ? i : i + 1);
      }
    });
  });
});
