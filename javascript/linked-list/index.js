'use strict';

const { add } = require("cheerio/lib/api/traversing");
const { contains } = require("cheerio/lib/static");


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

    add(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            return;
        }
        node.next = this.head
        this.head = node
        return
    }

    traverse() {
        let current = this.head

        while (current) {
            console.log(current.value)
            current = current.next
        }
        console.log('Done traversing')
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


linkedList.add(1)
linkedList.add(2)
linkedList.add(3)

console.log(linkedList.includes(3))
// linkedList.traverse()