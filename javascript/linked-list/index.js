'use strict';

const { val } = require("cheerio/lib/api/attributes");
const { flatten } = require("cheerio/lib/options");

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

    append(value) {
        const node = new Node(value);
        let current = this.head;

        if (!this.head) {
            this.head = node;
            return;
        }

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

    insertBefore(value, newValue) {
        const node = new Node(newValue)
        let current = this.head

        while (current) {
            if (current.next.value === value) {
                node.next = current.next
                current.next = node
                return
            }
            current = current.next
        }
    }

    insertAfter(value, newValue) {
        const node = new Node(newValue)
        let current = this.head

        while (current) {
            if (current.value === value) {
                node.next = current.next
                current.next = node
                return
            }
            current = current.next
        }
    }

    kthFromEnd(k) {
        let current = this.head
        let length = 0
        let nodeMap = {}

        while (current) {
            nodeMap[length] = current
            current = current.next
            length++
        }

        const index = (length - k)
        return nodeMap[index]
    }

}

let linkedList = new LinkedList()

// linkedList.addToFront(6)
// linkedList.append(4)
// linkedList.append(6)
// linkedList.append(7)
// linkedList.append(3)
// linkedList.append(2)
// linkedList.insertBefore(2, 10)
// linkedList.insertBefore(7, 77)
// linkedList.insertAfter(6, 76)
// linkedList.insertAfter(77, 78)
// linkedList.traverse()
// console.log(linkedList.kthFromEnd(2))

module.exports = linkedList
