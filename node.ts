export default class CustomNode<T> {
    data: T;
    next: CustomNode<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }
