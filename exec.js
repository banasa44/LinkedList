"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkedlist_1 = require("./linkedlist");
var node_1 = require("./node");
// create a new linked list
var list = new linkedlist_1.default();
// create some nodes to add to the list
var node1 = new node_1.default(1);
var node2 = new node_1.default(2);
var node3 = new node_1.default(3);
// add the nodes to the list
list.addFirst(node1);
list.addLast(node2);
list.addLast(node3);
// print the whole list
console.log(JSON.stringify(list.head, null, 2));
