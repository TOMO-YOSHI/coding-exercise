// A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function (index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}
// The insertAt() function contains the steps to insert a node at a given index.

LinkedList.prototype.insertAt = function (data, index) {
    // if the list is empty i.e. head = null

    if (!this.head) {
        this.head = new Node(data);
        return;
    }

    // if new node needs to be inserted at the front of the list i.e. before the head. 
    if (index === 0) {
        this.head = new Node(data, this.head);
        return;
    }

    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
}