let json = { a: { b: { c: 123 } }, d: { e: 456 } };

// 获取c的值
const way = ["a", "b", "c"];
let res = json;

way.forEach((item) => {
  res = res[item];
});

console.log(res);
