function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// 创建节点
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
/**
 *    1
 *  2   3
 * 4 5 6 7
 * @description 求深度
 */
const deep = (root) => {
  if (!root) return 0;
  const leftL = deep(root.left);
  const rightL = deep(root.right);
  return Math.max(leftL, rightL) + 1;
};
// console.log(deep(root));
const preOrder = (root) => {
  const result = [];
  const tranverse = (root) => {
    if (!root) return;
    result.push(root.val);
    tranverse(root.left);
    tranverse(root.right);
  };
  tranverse(root);
  return result;
};
console.log(preOrder(root));
