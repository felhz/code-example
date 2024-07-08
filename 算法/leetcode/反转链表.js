/**
 * @description 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 添加元素到链表
  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // 从链表中删除元素
  delete(data) {
    if (this.head === null) {
      return; // 链表为空，无法删除
    }

    if (this.head.data === data) {
      this.head = this.head.next; // 删除的是头节点
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next; // 删除找到的节点
        return;
      }
      current = current.next;
    }
  }
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next; // 保存下一个节点
      current.next = prev; // 反转指针方向
      prev = current; // 移动prev和current指针
      current = next;
    }
    this.head = prev; // 新的头节点是原来的尾节点
  }
  // 打印链表
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
// 使用示例
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// list.print(); // 输出: 1 2 3 4

// list.delete(3);
// list.print(); // 输出: 1 2 4
const reverse = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre; // 反转指针方向
    pre = cur;
    cur = next;
  }

  return pre;
};
const del = (data) => {
  let cur = list.head;
  while (cur) {
    if (cur.next && cur.next.data === data) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
};

// console.log(reverse(list.head));
console.log(del(2));
console.log(list.print());
