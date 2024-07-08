// 定义一个处理者基类
// 责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许你将请求沿着处理者链进行传递。请求在链上传递直到有一个处理者处理它为止。这个模式在JavaScript中可以通过函数和对象来实现
class Handler {
  constructor(successor) {
    this.successor = successor;
  }

  // 声明一个处理请求的抽象方法
  handleRequest(request) {
    if (this.successor) {
      return this.successor.handleRequest(request);
    }

    // 如果当前处理者没有后续处理者，或者决定自己处理请求，可以在这里实现具体逻辑
    throw new Error('No handler for this request');
  }
}

// 定义具体的处理者类，继承自Handler基类
class ConcreteHandler1 extends Handler {
  handleRequest(request) {
    if (request === 'request1') {
      console.log('ConcreteHandler1 handled request1');
    } else {
      return super.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handleRequest(request) {
    if (request === 'request2') {
      console.log('ConcreteHandler2 handled request2');
    } else {
      return super.handleRequest(request);
    }
  }
}

// 使用责任链模式
const handler1 = new ConcreteHandler1(null); // 最后一个处理者，没有后继处理者
const handler2 = new ConcreteHandler2(handler1); // handler2的后继处理者是handler1

handler2.handleRequest('request1'); // 输出: ConcreteHandler1 handled request1
handler2.handleRequest('request2'); // 输出: ConcreteHandler2 handled request2
handler2.handleRequest('unknown'); // 抛出错误: No handler for this request
