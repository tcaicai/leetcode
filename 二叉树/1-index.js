/**
 * 1、满二叉树：只有度为0和2的节点，且度为0的节点在同一层
 * 2、完全二叉树：
 * 1、二叉排序树（搜索二叉树）：左节点小于跟节点，右节点大于根节点
 * 2、平衡二叉树：节点深度相差不大于1
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

// 前序遍历 dfs
function dfs(tree) {
  let res = [];
  const order = (tree) => {
    if (tree) res.push(tree.val);
    if (tree.left) order(tree.left);
    if (tree.right) order(tree.right);
  };
  order(tree);
  return res;
}
let res = dfs(tree);
// console.log(res);

// 层级遍历 bfs
function bfs(tree) {
  let queue = [],
    res = [];
  if (tree) queue.push(tree);

  while (queue.length) {
    let curLevelLength = queue.length;
    res.push([]);
    for (let i = 0; i < curLevelLength; i++) {
      const node = queue.shift();
      res[res.length - 1].push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
}
let bfsRes = bfs(tree);
console.log(bfsRes);
