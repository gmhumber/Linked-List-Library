# JavaScript Linked List Library

## Usage

Import the library with: `import LinkedList from "your_path/linked-list-lib.js"`

### LinkedList Class Properties
`length`: length of the list
`head`: reference to the head node
`tail`: reference to the tail node

### LinkedList Class methods
`printList()`: Prints the index and values of each node in the list to the console, or `undefined` if the list is empty.

`printNode(index)`: Prints the value of the node passed in as the index parameter to the console, or `undefined` if the list is empty.

`getNode(index)`: Returns a node by index number specified in the index parameter. The tail node will be returned if the index parameter is -1. Returns `undefined` if list is empty.

`toArray()`: Returns an array of all node values in the order of the nodes from head to tail. Returns an empty array if the list is empty.

`insertNode(index, value)`: Inserts a node with the specified value into the list at the specified index. If the list is empty, the new node will be created as the head node. An index value of -1 will add the new node to the tail. Returns `undefined` if the specified index is out of bounds.

`removeNode(index)`: Removes the node at the specified index. Use an index value of -1 to remove the tail node. Returns `undefined` if the specified index is out of bounds.
