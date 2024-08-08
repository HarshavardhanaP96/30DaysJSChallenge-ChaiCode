class createNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class createLinkedLinst {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  sort(li1, li2) {
    if (!li1 && !li2) {
      return null;
    }

    if (!li1) {
      return li2;
    }

    if (!li2) {
      return li2;
    }

    let dummy = new createNode(0);
    let current = dummy;

    while (!cur1 && !cur2) {
      if (cur1.value < cur2.value) {
        current.next = cur1;
        cur1 = cur1.next;
      } else {
        current.next = cur2;
        cur2 = cur2.next;
      }
      current = current.next;
    }

    current.next = !li1 ? li2 : li1;
    return dummy.next;
  }
}
