//Binary Search Tree
    class Node {
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BinaryTree {
        constructor(){
            this.root = null;
        }
        insert(value){
            const newNode = new Node(value);
            if (this.root === null){
                this.root = newNode;
                return this;
            } else {
                let currentNode = this.root;
                while (currentNode !== null){
                    if (value < currentNode.value){
                        if (currentNode.left === null){
                            currentNode.left = newNode;
                            return this;
                        }
                        currentNode = currentNode.left;
                    }
                    else if (value > currentNode.value){
                        if (currentNode.right === null){
                            currentNode.right = newNode
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                    else if (value === currentNode.value) return 'Value already exist';
                }
            }
        }
        lookUp(value){
            if (value === this.root.value){
                return this.root;
            } else {
                let currentNode = this.root;
                while (currentNode !== null){
                    if (currentNode.value < value){
                        currentNode = currentNode.right;    
                    }
                    else if (currentNode.value > value){
                        currentNode = currentNode.left;
                    }
                    else if (currentNode.value === value){
                        return currentNode;
                    }
                }
            }
            return 'Not find';
        }
    }



    function traverse(node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : traverse(node.left);
        tree.right = node.right === null ? null : traverse(node.right);
        return tree;
      }

      const myTree = new BinaryTree();
      myTree.insert(9);
      myTree.insert(4);
      myTree.insert(6);
      myTree.insert(20);
      myTree.insert(170);
      myTree.insert(15);
      myTree.insert(1);
      console.log(myTree.root);
    //   console.log(JSON.stringify(traverse(myTree.root)));