/**
 *它将一个类的接口转换成客户希望的另一个接口，使得原本由于接口不兼容而不能一起工作的类可以一起工作。
 适配器模式的应用场景包括处理复杂的UI组件、与第三方库交互等。
 在JavaScript中，实现适配器模式的方法包括组合和继承。
 适配器模式的好处包括提高代码的灵活性和可扩展性、提高代码的可读性和可维护性，以及实现真正的组件化。
 *
 */

// 定义目标接口
class Target {
  request() {
    console.log('Target request');
  }
}

// 定义源类
class Adaptee {
  specificRequest() {
    console.log('Adaptee specific request');
  }
}

// 创建适配器类
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    console.log('Adapter request');
    this.adaptee.specificRequest();
  }
}

// 使用适配器模式
const target = new Target();
target.request(); // 输出：Target request

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // 输出：Adapter request，Adaptee specific request
