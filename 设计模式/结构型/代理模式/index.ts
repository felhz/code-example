const obj = { name: 12, age: 1 };
type objKey = keyof typeof obj;

const proxy = new Proxy(obj, {
  get(target, key: objKey) {
    console.log(target, key);
    return obj[key];
  },
});

console.log(proxy.name);
