import Queue from "../queue/queue";

describe("queue", () => {
  let queue: Queue<number>;
  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("is created empty", () => {
    expect(queue.length).toBe(0);
  });

  test("allow to add item", () => {
    queue.add(1);
    expect(queue.length).toBe(1);
  });

  describe("poll", () => {
    test("return undefined when queue is empty", () => {
      expect(queue.poll()).toBe(undefined);
    });

    test("return & remove first item", () => {
      let value = 10;

      queue.add(value);
      queue.add(value + 1);
      expect(queue.poll()).toBe(value);
      expect(queue.poll()).toBe(value + 1);
      expect(queue.length).toBe(0);
    });
  });

  describe("peek", () => {
    test("return undefined when queue is empty", () => {
      expect(queue.peek()).toBe(undefined);
    });

    test("return first item", () => {
      const value = 10;
      queue.add(value);
      queue.add(11);
      expect(queue.peek()).toBe(value);
      expect(queue.length).toBe(2);
    });
  });
});
