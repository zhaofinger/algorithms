const TreeNode = require('./tree-node');

/**
 * 二叉树前序遍历
 * @param {TreeNode} treeNode
 */
function inOrder(treeNode) {
  if (treeNode) {
    inOrder(treeNode.left);
    console.log(treeNode.val);
    inOrder(treeNode.right);
  }
}