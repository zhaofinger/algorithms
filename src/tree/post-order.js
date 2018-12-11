const TreeNode = require('./tree-node');

/**
 * 二叉树后序遍历
 * @param {TreeNode} treeNode
 */
function postOrder(treeNode) {
  if (treeNode) {
    postOrder(treeNode.left);
    postOrder(treeNode.right);
    console.log(treeNode.val);
  }
}