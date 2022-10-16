const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
      this.rootData = null;}

  root() {
    return this.rootData;
    
  }

  add(data) {
    this.rootData = rutData(this.rootData, data);

    function rutData(node, data) {
      if (!node) {
        node = new Node(data);
        return node;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = rutData(node.right, data);
      }

      if (node.data > data) {
        node.left = rutData(node.left, data);
        }

        return node;
    }
  }

  has(data) {
    return searchData(this.rootData, data);

    function searchData (node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return searchData(node.right, data);
      } else {
        return searchData(node.left, data);
      }
    }
  }

  find(data) {
    return searchNode(this.rootData, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
  }

  remove(data) {
        this.rootData = removeNode(this.rootData, data);

        function removeNode(node, data) {
          if (!node) {
            return null;
          }

          if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
          } else if (node.data > data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            if (!node.left && !node.right) {
              return null;
            }

            if (!node.left) {
              node = node.right;
              return node;
            }

            if (!node.right) {
              node = node.left;
              return node;
            }

            let curData = node.right.data;
            let nextNode = node.right.left;

            while (nextNode){
              curNode = nextNode.data;
              nextNode = nextNode.left.data;
            }

            node.data = curData;
            node.right = removeNode(node.right, curData);
            return node;
          }
        }
  }

  min(startNode = this.rootData) {
    if (!startNode){
      return null;
    }

    let curNode = startNode.data;
    let nextNode = startNode.left;

    while (nextNode){
      curNode = nextNode.data;
      nextNode = nextNode.left;
    }
    return curNode;
  }

  max(startNode = this.rootData) {
    if (!startNode){
      return null;
    }

    let curNode = startNode.data;
    let nextNode = startNode.right;

    while (nextNode){
      curNode = nextNode.data;
      nextNode = nextNode.right;
    }
    return curNode;
  }
}

module.exports = {
  BinarySearchTree
};