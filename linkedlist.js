"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.addFirst = function (node) {
        node.next = this.head;
        this.head = node;
    };
    LinkedList.prototype.addLast = function (node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        var ref = this.head;
        while (ref.next)
            ref = ref.next;
        ref.next = node;
    };
    return LinkedList;
}());
exports.default = LinkedList;
