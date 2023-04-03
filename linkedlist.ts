import CustomNode from './node';

export default class LinkedList<T> {
    head: CustomNode<T> | null;
  
    constructor() {
      this.head = null;
    }
  
    addFirst(node: CustomNode<T>) {
      node.next = this.head;
      this.head = node;
    }
  
    addLast(node: CustomNode<T>) {
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let ref = this.head;
      while (ref.next) ref = ref.next;
      ref.next = node;
    }
  }
