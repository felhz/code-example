let portMap = new Map();
onconnect = function (e) {
  var port = e.ports[0];
  portMap.set(port, port);
  // 不能使用addEventListener
  port.onmessage = function (e) {
    //广播
    Array.from(portMap.values()).forEach((i) => {
      i.postMessage(JSON.stringify(i));
    });
  };

  port.postMessage('1231');
};
console.log(11);
