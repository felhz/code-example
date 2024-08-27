const data = [
  {
    name: 'root',
    children: [
      {
        name: 'child1',
        children: [
          {
            name: 'child1-1',
          },
        ],
      },
      {
        name: 'child2',
        children: [
          {
            name: 'child2-1',
          },
        ],
      },
    ],
  },
];
const arr = [];
const bfs = (data) => {
  const stack = [data];
  while (stack.length) {
    let ele = stack.shift();
    arr.push(ele.name);
    if (ele.children) {
      stack.push(...ele.children);
    }
  }
};
bfs(data[0]);
console.log(arr);
