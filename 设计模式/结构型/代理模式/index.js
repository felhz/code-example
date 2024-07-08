"use strict";
const obj = { name: 12, age: 1 };
const proxy = new Proxy(obj, {
    get(target, key) {
        console.log(target, key);
        return obj[key];
    },
});
console.log(proxy.name);
