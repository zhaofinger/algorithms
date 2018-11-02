const TreeNode = require('./tree-node');

/**
 * 二叉树前序遍历
 * @param {TreeNode} treeNode
 */
function inOrder(treeNode) {
  if (treeNode) {
    console.log(treeNode.val);
    prevOrder(treeNode.left);
    prevOrder(treeNode.right);
  }
}