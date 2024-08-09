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

    let deletedHead = this.head;

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

//Activity-2
//Task-3
class stackNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class stack {
  constructor() {
    this.head = null;
    //Tail is not necessary
    this.tail = null;
  }

  isEmpty() {
    return !this.head;
  }

  push(value) {
    const newNode = new stackNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const deletedNode = this.head;
    this.head = this.head.next;

    return deletedNode.value;
  }
}

//Task-4

const str = "JaiShriRam";

function reverse(str) {
  const n = str.length;
  const s1 = new stack();

  for (let i = 0; i < n; i++) {
    s1.push(str.charAt(i));
  }

  let reverseStr = "";

  while (!s1.isEmpty()) {
    reverseStr += s1.pop();
  }
  return reverseStr;
}

console.log(reverse(str));

//Activity-3
//Task-5

class queueNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new queueNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const deletedNode = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    this.head = this.head.next;

    return deletedNode.value;
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }
}

//Task-6
class printJob {
  constructor(id, documentName) {
    this.id = id;
    this.documentName = documentName;
  }
}

class printQueue {
  constructor() {
    this.queue = new queue();
    this.jobId = 1;
  }

  addJob(doc) {
    const job = new printJob(this.jobId++, doc);
    this.queue.enqueue(job);
    console.log(`${job.id}:${job.documentName} added succesfully`);
  }

  processJob() {
    if (!this.queue.head) {
      console.log("No Items to process");
    } else {
      const job = this.queue.dequeue();
      console.log(`${job.id}:${job.documentName} Processed succesfully`);
    }
  }
}

const print = new printQueue();
print.addJob("Harhsa.pdf");
print.addJob("Harhsa.png");
print.processJob();
print.processJob();
print.processJob();

//Activity-4
//Task-7
class treeNode {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }

  addnode(value) {
    const newNode = new treeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const q = [];
    q.push(this.root);

    while (q.length !== 0) {
      const node = q.shift();

      if (!node.left) {
        node.left = newNode;
        break;
      } else {
        q.push(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        break;
      } else {
        q.push(node.right);
      }
    }
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  preorder(node = this.root) {
    if (node) {
      console.log(node.value);

      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node = this.root) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}

const tree = new binaryTree();
tree.addnode(1);
tree.addnode(2);
tree.addnode(3);
tree.addnode(4);
tree.addnode(5);
tree.addnode(6);
tree.addnode(7);
tree.addnode(8);

console.log("inorder");

tree.inorder();

console.log("preorder");

tree.preorder();

console.log("postorder");

tree.postorder();

//Activity-5
//Task-9
