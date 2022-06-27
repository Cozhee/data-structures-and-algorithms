'use strict';

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addToFront(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            return;
        }
        node.next = this.head;
        this.head = node
    }

    addToEnd(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {

            current = current.next;
        }
        current.next = node;

    }

    traverse() {
        let current = this.head
        let str = ''
        while (current) {
              str += `{ ${current.value} } -> `
              current = current.next
        }
        str += `NULL`
        console.log(str)
        return str

    }

    includes(value) {
        let current = this.head
        let contains = false
        while (current) {
            if (current.value === value) {
                contains = true
            }
            current = current.next
        }
        return contains
    }
}

let linkedList = new LinkedList()

// linkedList.addToFront(4)
// linkedList.traverse()
// linkedList.addToEnd(6)
// linkedList.traverse()
// linkedList.addToEnd(7)
// linkedList.traverse()

module.exports = linkedList
