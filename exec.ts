import  LinkedList  from "./linkedlist";
import CustomNode  from "./node";

// create a new linked list
const list = new LinkedList<number>();

// create some nodes to add to the list
const node1 = new CustomNode(1);
const node2 = new CustomNode(2);
const node3 = new CustomNode(3);

// add the nodes to the list
list.addFirst(node1);
list.addLast(node2);
list.addLast(node3);

// print the whole list
console.log(JSON.stringify(list.head, null, 2));
