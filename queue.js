class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 1 => 2 => 3

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      this.length = 1;
    } else {
      let currentNode = this.first;
      while (true) {
        if (!currentNode.next) {
          currentNode.next = newNode;
          this.last = newNode;
          this.length++;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
  dequeue() {
    if (!this.first) {
      return "Empety queue";
    } else {
      if (this.first == this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
    }
    return this;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(30);
queue.dequeue();
console.log(queue.dequeue());
