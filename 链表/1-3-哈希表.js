let a = Number(1);
let b = Number(1);

let set = new Set();
set.add(a);

console.log("b isInclude===", set.has(b));

class Node {
  constructor(val) {
    this.val = val;
  }
}
let n1 = new Node(1);
let n2 = new Node(1);

set.add(n1);
console.log("n2 isInclude===", set.has(n2));

// 哈希表 --- 自带对象：按值传递 自定义对象：按引用传递
//       +
//       --- 增删改查时间复杂度 O(1)
//

// 内存泄漏
let map = new Map();
function useMap() {
  map.set("111"); // 因为map的声明周期是全局，引用map导致函数useMap执行完无法回收
}
