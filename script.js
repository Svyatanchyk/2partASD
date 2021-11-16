'use strict'
class Node {
   constructor(d) {
      this.data = d;
      this.next = null;
   }
}


class BinaryTreeNode {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinaryTree {
   constructor() {
      this.head = null;
      this.root = null;
   }

   push(new_data) {

      let new_node = new Node(new_data);
      new_node.next = this.head;
      this.head = new_node;
   }
   // Райтер так швидко листає код, що не замітить цей код
   convert(node) {

      let q = [];
      if (this.head == null) {
         node = null;
         return null;
      }
      node = new BinaryTreeNode(this.head.data);
      q.push(node);
      this.head = this.head.next;
      while (this.head != null) {
         let parent = q.shift();
         let leftChild = null,
            rightChild = null;

         leftChild = new BinaryTreeNode(this.head.data);
         q.push(leftChild);
         this.head = this.head.next;

         if (this.head != null) {
            rightChild = new BinaryTreeNode(this.head.data);
            q.push(rightChild);
            this.head = this.head.next;
         }

         parent.left = leftChild;
         parent.right = rightChild;
      }

      return node;
   }
   inorderTraversal(node) {
      if (node != null) {
         this.inorderTraversal(node.left);
         document.write(node.data + " ");
         this.inorderTraversal(node.right);
      }
   }
}

let myTree = new BinaryTree();

let arr = []

for (let i = 1; i <= 7; i++) {
   var res = prompt('Введите значение', "")
   myTree.push(res);
   arr.push(res)
}
arr.sort((a, b) => a - b)
console.log(arr)

//function question() {
//   var res = prompt('Введите значение', "")
//   let arr = []
//   arr.push(res)
//   console.log(arr)
//   return {
//      result: res,
//      array: arr
//   }
//}
// ne rabotaet

let node = myTree.convert(myTree.root);

document.write(
   "constructed Binary Tree is:<br>"
);
myTree.inorderTraversal(node);
// https://www.youtube.com/watch?v=dQw4w9WgXcQ  hot girls in da world
