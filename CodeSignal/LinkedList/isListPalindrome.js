// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    let node = l
    let values = []

    while (node) {
        values.push(node.value)
        node = node.next
    }

    return values.join('') === values.reverse().join('')

    // *****************
    // const array = [];
    // let node = l;

    // while(node) {
    //     array.push(node.value);
    //     node = node.next;
    // }

    // return array.join('') === array.reverse().join('');
}
