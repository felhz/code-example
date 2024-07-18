/**
 * 访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法与对象结构分离开来，使得在不改变对象结构的前提下可以添加新的操作。
 * 在 JavaScript 中，访问者模式通常用于遍历复杂对象结构并对其执行操作，而不需要修改对象本身的代码
 */
// 定义 Visitor 接口
class Visitor {
  visitConcreteElementA(element) {
    // 访问并操作具体元素 A 的逻辑
    console.log(`Visiting ConcreteElementA: ${element.operationA()}`);
  }

  visitConcreteElementB(element) {
    // 访问并操作具体元素 B 的逻辑
    console.log(`Visiting ConcreteElementB: ${element.operationB()}`);
  }
}

// 定义 Element 接口
class Element {
  accept(visitor) {
    // 接受访问者对象，并调用访问者的方法
  }
}

// 具体 Element 类 A
class ConcreteElementA extends Element {
  operationA() {
    return 'Operation A';
  }

  accept(visitor) {
    visitor.visitConcreteElementA(this);
  }
}

// 具体 Element 类 B
class ConcreteElementB extends Element {
  operationB() {
    return 'Operation B';
  }

  accept(visitor) {
    visitor.visitConcreteElementB(this);
  }
}

// 使用示例
const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

const visitor = new Visitor();

elementA.accept(visitor); // 输出：Visiting ConcreteElementA: Operation A
elementB.accept(visitor); // 输出：Visiting ConcreteElementB: Operation B
