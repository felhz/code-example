/**
 *
 * 桥接模式是一种结构型设计模式，它将抽象部分与实现部分分离，使它们可以独立变化。
 * 在JavaScript中，桥接模式主要应用于对象和类的设计，
 * 它通过将对象的行为和状态与它们如何实现这些行为和状态分离，使得对象的行为和状态可以被独立地改变。
 */
// 抽象接口
interface Implementation {
  concreteOperation(): void;
}

class Abstraction {
  implementation: Implementation;
  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }
  operation() {
    console.log('抽象接口操作');
    this.implementation.concreteOperation();
  }
}

// 具体类
class ConcreteImplementationA {
  concreteOperation() {
    console.log('具体类A的具体操作');
  }
}

class ConcreteImplementationB {
  concreteOperation() {
    console.log('具体类B的具体操作');
  }
}

// 使用桥接模式
const abstraction = new Abstraction(new ConcreteImplementationA());
abstraction.operation(); // 输出：抽象接口操作，具体类A的具体操作

const abstraction2 = new Abstraction(new ConcreteImplementationB());
abstraction2.operation(); // 输出：抽象接口操作，适配器具体操作，具体类B的具体操作
