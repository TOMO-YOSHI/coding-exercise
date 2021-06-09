// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    let aNode = a
    let bNode = b
    let sum
    let result = new ListNode()
    let rNode = result

    const getBigInt = (node) => {
        let num = ''
        while (node) {
            num +=
                node.value < 10 ? '000' + node.value :
                    node.value < 100 ? '00' + node.value :
                        node.value < 1000 ? '0' + node.value :
                            '' + node.value
            node = node.next
        }
        return BigInt(num)
    }

    sum = (getBigInt(aNode) + getBigInt(bNode)).toString()
    console.log(sum)
    for (let i = Math.floor(sum.length / 4); i >= 0; i--) {
        if (i === Math.floor(sum.length / 4) - 1) {
            console.log(sum.slice(-4 + i * -4, i * -4))
            rNode.value = parseInt(sum.slice(-4 + i * -4, i * -4))
        } else if (i < Math.floor(sum.length / 4)) {
            // console.log(i)
            // console.log(sum.slice(-4 + i * -4))
            if (i > 0) {
                rNode.next = new ListNode(parseInt(sum.slice(-4 + i * -4, i * -4)))
            } else if (i === 0) {
                rNode.next = new ListNode(parseInt(sum.slice(-4 + i * -4)))
            }
            rNode = rNode.next
        }
    }

    return result


    // **************
    // let aInt = [];
    // let aNode = a;
    // let bInt = [];
    // let bNode = b;
    // let sum;
    // let sumArr = [];
    // let sumNode;

    // const getArrayFromNode = (node, array) => {
    //     while(node) {
    //         if(node.value.toString().length === 1) {
    //             array.push('000' + node.value);
    //         } else if(node.value.toString().length === 2) {
    //             array.push('00' + node.value);
    //         } else if(node.value.toString().length === 3) {
    //             array.push('0' + node.value);
    //         } else if(node.value.toString().length === 4) {
    //             array.push(node.value);
    //         }

    //         node = node.next;
    //     }
    // }

    // getArrayFromNode(aNode, aInt)
    // getArrayFromNode(bNode, bInt)

    // sum = BigInt(aInt.join('')) + BigInt(bInt.join(''));

    // const getSumArray = (string, array) => {
    //     for(let i = 0; i < string.length; i += 4) {
    //         array.unshift(
    //             i == 0 ?
    //             string.slice(-4 - i)
    //             : string.slice(-4 - i, 0 - i) ?
    //             string.slice(-4 - i, 0 - i) :
    //             string.slice(string.length * - 1, 0 - i)
    //         );
    //     }
    // }

    // getSumArray(sum.toString(), sumArr);

    // sumNode = new ListNode(parseInt(sumArr[0]));
    // let node = sumNode;

    // for(let i = 1; i < sumArr.length; i++) {
    //     node.next = new ListNode(parseInt(sumArr[i]));
    //     node = node.next;
    // }

    // return sumNode;
}
