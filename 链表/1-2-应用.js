let json = { a: { b: { c: 123 } }, d: { e: 456 } };

// č·åcēå¼
const way = ["a", "b", "c"];
let res = json;

way.forEach((item) => {
  res = res[item];
});

console.log(res);
