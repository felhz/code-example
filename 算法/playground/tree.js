class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function buildBinaryTree() {
  // 创建根节点
  let root = new TreeNode(1);

  // 创建左子树
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  // 创建右子树
  root.right = new TreeNode(3);
  root.right.right = new TreeNode(6);

  return root;
}

let root = buildBinaryTree();
const inorderTraversal = function (node) {
  if (node === null) return;

  inorderTraversal(node.left);
  console.log(node.value);
  inorderTraversal(node.right);
};
console.log(inorderTraversal(root));
