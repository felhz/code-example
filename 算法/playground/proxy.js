const proxy = new Proxy(
  { a: 12 },
  {
    get(obj, key) {
      if (obj[key]) {
        return obj[key];
      } else {
        return () => {
          console.log(11);
        };
      }
    },
  }
);
console.log(proxy.a, proxy.b);
