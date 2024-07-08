var a = {
  a: {
    a: 12,
    b: 12,
    c: 12,
  },
  b: {
    b: 12,
    a: 12,
  },
};
const keysSet = [];
const keys = (obj, deep) => {
  Object.keys(obj).map((key) => {
    if (keysSet[deep]) {
      if (!keysSet[deep].includes(key)) {
        keysSet[deep].push(key);
      }
    } else {
      keysSet.push([key]);
    }
    if (typeof obj[key] === 'object') {
      keys(obj[key], deep + 1);
    }
  });
};
keys(a, 0);
console.log(keysSet);

const arr = {
  name: 'root',
  child: [
    { name: 1, child: [{ name: 1.1 }, { name: 1.2 }] },
    { name: 2, child: [{ name: 2.1 }, { name: 2.2 }] },
    { name: 3, child: [{ name: 3.1 }, { name: 3.2 }] },
  ],
};
// 广度优先
const withTran = (arr) => {
  let nodes = [];
  let stacks = [arr];
  while (stacks.length) {
    let node = stacks.shift();
    let child = node.child;
    nodes.push(node.name);
    if (child) {
      for (let index = 0; index < child.length; index++) {
        stacks.push(child[index]);
      }
    }
  }
  console.log(nodes);
};
withTran(arr);

const temp = [];
// 深度优先
const deepTran = (arr) => {
  temp.push(arr.name);
  if (arr.child) {
    arr.child.map((node) => {
      deepTran(node);
    });
  }
};
deepTran(arr);
console.log(temp);
