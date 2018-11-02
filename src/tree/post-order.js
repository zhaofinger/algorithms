const TreeNode = require('./tree-node');

/**
 * 二叉树后序遍历
 * @param {TreeNode} treeNode
 */
function inOrder(treeNode) {
  if (treeNode) {
    prevOrder(treeNode.left);
    prevOrder(treeNode.right);
    console.log(treeNode.val);
  }
}