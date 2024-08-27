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
const dfs = (data) => {
  arr.push(data.name);
  data.children?.forEach((i) => {
    dfs(i);
  });
};
dfs(data[0]);
console.log(arr);
