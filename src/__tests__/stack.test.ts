import Stack from "../stack/stack";

describe("stack", () => {
  let stack: Stack<number>;
  beforeEach(() => {
    stack = new Stack<number>();
  });

  test("is created empty", () => {
    expect(stack.length).toBe(0);
  });

  test("allow to push item", () => {
    stack.push(10);

    expect(stack.length).toBe(1);
  });

  test("allow to peek the most recent item", () => {
    const value = 10;
    stack.push(value);

    expect(stack.peek()).toBe(value);
    expect(stack.peek()).toBe(value);
    expect(stack.length).toBe(1);
  });

  describe("pop", () => {
    test("throw error when stack is empty", () => {
      expect(() => stack.pop()).toThrow("stack is empty");
    });

    test("& remove most recent item ", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.length).toBe(0);
    });
  });
});
