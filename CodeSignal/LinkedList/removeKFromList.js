// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    // ************************
    let node = l;
    if (node === null) {
        return l;
    }

    while (node) {
        if (node.next && node.next.value === k) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    if (l.value === k) {
        l = l.next
    }

    return l;

}
