/**
 * 享元模式（Flyweight Pattern）是一种结构型设计模式，它旨在通过共享对象来减小内存使用或计算开销，以提高性能。
 * 在享元模式中，相似的对象可以共享一个对象实例，而不是创建多个相似的对象。这种共享能够减少内存占用，提高性能
 */
// 享元工厂（Flyweight Factory）
// 享元接口
interface Flyweight {
  operation(): void;
}

// 具体享元实现
class ConcreteFlyweight implements Flyweight {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  operation(): void {
    console.log(`ConcreteFlyweight with key ${this.key} is being operated.`);
  }
}

// 享元工厂
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  getFlyweight(key: string): Flyweight {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }

  getFlyweightsCount(): number {
    return Object.keys(this.flyweights).length;
  }
}

// 客户端
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('A');
flyweight1.operation();

const flyweight2 = factory.getFlyweight('B');
flyweight2.operation();

const flyweight3 = factory.getFlyweight('A'); // 重复使用相同的享元
flyweight3.operation();

console.log(`Number of flyweights: ${factory.getFlyweightsCount()}`);
