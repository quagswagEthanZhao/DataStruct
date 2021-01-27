class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = this.top;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.top) {
      return "Empety Stack";
    } else {
      if (this.top == this.bottom) {
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
    }
    return this;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
stack.pop();
console.log(stack.pop());
