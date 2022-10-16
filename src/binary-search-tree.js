const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
      this.value = null;}

  root() {
    return this.value;
    
  }

  add(value) {
    this.rootValue = rutValue(this.rootValue, value);

    function rutValue(node, value) {
      if (!node) {
        node = new Node(value);
        return node;
      }

      if (node.value === value) {
        return node;
      }

      if (node.value < value) {
        node.right = rutValue(node.right, value);
      }

      if (node.value > value) {
        node.left = rutValue(node.left, value);
        }

        return node;
    }
  }

  has(value) {
    return searchValue(this.rootValue, value);

    function searchValue (node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      if (node.value < value) {
        return searchValue(node.right, value);
      } else {
        return searchValue(node.left, value);
      }
    }
  }

  find(value) {
    return searchNode(this.rootValue, value);

    function searchNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return node;
      }

      if (node.value < value) {
        return searchNode(node.right, value);
      } else {
        return searchNode(node.left, value);
      }
    }
  }

  remove(value) {
        this.rootValue = removeNode(this.rootValue, value);

        function removeNode(node, value) {
          if (!node) {
            return null;
          }

          if (node.value < value) {
            node.right = removeNode(node.right, value);
            return node;
          } else if (node.value > value) {
            node.left = remove(node.left, value);
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

            let curValue = node.right.value;
            let nextNode = node.right.left;

            while (nextNode){
              curValue = nextNode;
              nextNode = nextNode.left;
            }

            node.value = curValue;
            node.right = removeNode(node.right, curValue);
            return node;
          }
        }
  }

  min(startNode = this.rootValue) {
    if (!startNode){
      return null;
    }

    let curNode = startNode.value;
    let nextNode = startNode.left;

    while (nextNode){
      curNode = nextNode.value;
      nextNode = nextNode.left;
    }
    return curNode;
  }

  max(startNode = this.rootValue) {
    if (!startNode){
      return null;
    }

    let curNode = startNode.value;
    let nextNode = startNode.right;

    while (nextNode){
      curNode = nextNode.value;
      nextNode = nextNode.right;
    }
    return curNode;
  }
}

module.exports = {
  BinarySearchTree
};