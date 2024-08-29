self.onmessage = function (event) {
  const n = event.data;
  const result = fibonacci(n); // 计算斐波那契数列
  console.log(22);

  self.postMessage(result); // 将结果发送给主线程
};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
