/**
 * 中介者模式是一种行为设计模式，它提供了一种将对象之间的交互抽象化并集中管理的机制。
 * 通过引入一个中介对象，可以将多个对象之间的交互关系简化，使得对象之间的耦合度降低，提高了系统的可维护性和可扩展性。
 * 在JavaScript中，中介者模式可以用于解决多个对象之间复杂的交互问题。
 * 它通过定义一个中介对象来管理其他对象之间的交互，使得这些对象之间的通信变得简单和直观
 */

// 中介者类
class Mediator {
  subscribers: ConcreteMediator[] = [];
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber: ConcreteMediator) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: ConcreteMediator) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  send(message: string) {
    this.subscribers.forEach((subscriber) => subscriber.receive(message));
  }
}

// 具体对象类
class ConcreteMediator {
  mediator: Mediator;
  constructor(mediator: any) {
    this.mediator = mediator;
  }
  send(message: string) {
    this.mediator.send(message);
  }
  receive(message: string) {
    console.log(`Received message: ${message}`);
  }
}

// 使用中介者模式
const mediator = new Mediator();
const subscriber1 = new ConcreteMediator(mediator);
const subscriber2 = new ConcreteMediator(mediator);
mediator.subscribe(subscriber1);
mediator.subscribe(subscriber2);
mediator.send('Hello, world!'); // Outputs: Received message: Hello, world! Received message: Hello, world!
