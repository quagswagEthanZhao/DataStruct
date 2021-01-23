class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "Not find";
  }
  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    if (!this.head.next) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      while (true) {
        if (!currentNode.next) {
          currentNode.next = newNode;
          this.tail = newNode;
          this.length++;
          currentNode = currentNode.next;
          break;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    let currentNode = this.head;
    for (var i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    const holdingPointer = currentNode.next;
    currentNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  delet(index) {
    if (index >= this.length) return "Index not find";
    let oneIndexAhead = this.head;
    for (var i = 1; i <= index - 1; i++) {
      oneIndexAhead = oneIndexAhead.next;
    }
    const nodeOnDelet = oneIndexAhead.next;
    const holdingPointer = nodeOnDelet.next;
    oneIndexAhead.next = holdingPointer;
    return this;
  }
}
