//Activity-1
//Task-1
class createNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//Task-2

class createLinkedLinst {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //Add Head
  addHead(value) {
    const newNode = new createNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  //Remove Head
  removeHead() {
    if (!this.head) {
      return null;
    }

    let deletedHead = tis.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  //Add Tail
  addTail() {
    const newNode = new createNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  //Remove Tail
  removeTail() {
    let deletedTail = this.tail;
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    this.tail = current;
    current.next = null;

    return this;
  }

  addValue(value, index) {
    if (index < 0) {
      index = 0;
    }

    if (index === 0) {
      this.addHead(value);
    } else {
      let current = this.head;
      let count = 1;
      let newNode = new createNode(value);

      while (current && count != index) {
        current = current.next;
        count += 1;
      }
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  removeValue(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    while (this.head.value == value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    if (!this.head) {
      this.tail = null;
      return deletedNode;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.value == value) {
        deletedNode = current.next;
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.value == value) {
      this.tail = current;
    }

    return deletedNode;
  }

  display() {
    if (!this.head) {
      return null;
    }
    const s = "";
    let current = this.head;
    while (current) {
      s = s + `${current.value} `;
      current = current.next;
    }
    console.log(s);
  }

  reverse() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let prev = null;
    let nextNode = null;

    while (current) {
      //store the next ele
      nextNode = current.next;

      //   reverse the pointer
      current.next = prev;

      //move pointers
      prev = current;
      current = nextNode;
    }
    this.head = this.tail;
    this.head = prev;
  }
}
//Activity-5
//Task-9

//Activity-5
//Task-9

//Activity-5
//Task-9

//Activity-5
//Task-9
