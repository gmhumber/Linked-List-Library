//Library for creating doubly linked lists

class Node {
    constructor(nodeValue) {
        this.value = nodeValue;
        this.next = null;
        this.previous = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Get node by index
    getNode(index) {
        if (
            index < -1 ||
            index > this.length - 1 ||
            this.length === 0 ||
            this.head === null ||
            this.tail === null
        ) {
            console.log(undefined);
            return undefined;
        }

        if (index === -1 || index === this.length - 1) {
            return this.tail;
        }

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    //Select a node by index and print its value to the console
    printNode(index) {
        if (this.length === 0 || index < -1 || index > this.length - 1) {
            console.log(undefined);
            return undefined;
        }

        const node = this.getNode(index);

        console.log(`Index ${index}:`, node.value);
    }

    //Print index and value of all nodes
    printList(detailedView = false) {
        if (this.length === 0) {
            console.log(undefined);
            return undefined;
        }

        let currentNode = this.head;

        for (let i = 0; i < this.length; i++) {
            if (!detailedView) {
                console.log(`Index ${i}:`, currentNode.value);
            } else {
                console.log(
                    `Index ${i} | Current Value: ${
                        currentNode.value
                    } | Next Value: ${
                        currentNode.next?.value || currentNode.next
                    } | Previous Value: ${
                        currentNode.previous?.value || currentNode.previous
                    }`
                );
            }

            currentNode = currentNode.next;
        }
    }

    //Convert list values to an array
    toArray() {
        const listValuesArray = [];
        let currentNode = this.head;

        for (let i = 0; i < this.length; i++) {
            listValuesArray[i] = currentNode.value;
            currentNode = currentNode.next;
        }

        return listValuesArray;
    }

    //Insert by index and return the new node. Node will be inserted on the tail if index is -1. The newly added node is returned.
    insertNode(index, value) {
        if (index < -1 || index > this.length) {
            console.log(undefined);
            return undefined;
        }

        if (this.length === 0 || this.head === null) {
            //Create new head node if list is empty
            const newHeadNode = new Node(value);
            this.head = newHeadNode;
            this.tail = newHeadNode;
            this.length++;
            return newHeadNode;
        } else if (index === -1 || index === this.length) {
            //Insert new node at the tail
            const currentLastNode = this.getNode(this.length - 1);
            const newLastNode = new Node(value);
            newLastNode.previous = currentLastNode;
            currentLastNode.next = newLastNode;
            this.tail = newLastNode;
            this.length++;
            return newLastNode;
        } else if (index === 0) {
            //Insert new node at the head
            const newHeadNode = new Node(value);
            this.head.previous = newHeadNode;
            newHeadNode.next = this.head;
            this.head = newHeadNode;
            this.length++;
            return newHeadNode;
        } else {
            //After dealing with all other cases above, the new node must be between the head and tail. Insert the new in-between node as such.
            const previousNode = this.getNode(index - 1);
            const newNextNode = previousNode.next;
            const newMiddleNode = new Node(value);
            previousNode.next = newMiddleNode;
            newNextNode.previous = newMiddleNode;
            newMiddleNode.previous = previousNode;
            newMiddleNode.next = newNextNode;
            this.length++;
            return newMiddleNode;
        }
    }

    //Remove by index
    removeNode(index) {
        if (
            this.length === 0 ||
            this.head === null ||
            index < -1 ||
            index > this.length - 1
        ) {
            console.log(undefined);
            return undefined;
        }

        if (this.length === 1) {
            const oldHeadNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return oldHeadNode;
        }

        if (index === 0) {
            //Remove head node
            const oldHeadNode = this.getNode(index);
            const newHeadNode = oldHeadNode.next;
            newHeadNode.previous = null;
            this.head = newHeadNode;
            this.length--;
            return oldHeadNode;
        } else if (index === -1 || index === this.length - 1) {
            //Remove tail node
            const oldLastNode = this.getNode(this.length - 1);
            const newLastNode = oldLastNode.previous;
            newLastNode.next = null;
            this.tail = newLastNode;
            this.length--;
            return oldLastNode;
        } else {
            //After dealing with all other cases above, the deleted node must be between the head and tail. Delete the in-between node as such.
            const deletedNode = this.getNode(index);
            const previousNode = deletedNode.previous;
            const newNextNode = deletedNode.next;
            previousNode.next = newNextNode;
            newNextNode.previous = previousNode;
            this.length--;
            return deletedNode;
        }
    }
}
