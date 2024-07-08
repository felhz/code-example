/**
 * 它使对象在其内部状态改变时改变其行为。这种模式通常用于处理具有复杂的状态转换逻辑的情况
 */
// 定义状态接口
interface State {
  handle(): void;
}

// 具体状态类 - 状态1
class ConcreteState1 implements State {
  handle(): void {
    console.log('ConcreteState1 is handling the request.');
  }
}

// 具体状态类 - 状态2
class ConcreteState2 implements State {
  handle(): void {
    console.log('ConcreteState2 is handling the request.');
  }
}

// 上下文类
class Context {
  private state: State;

  constructor() {
    // 初始状态
    this.state = new ConcreteState1();
  }

  // 设置新状态
  setState(state: State): void {
    this.state = state;
  }

  // 上下文类使用当前状态来处理请求
  request(): void {
    this.state.handle();
  }
}

// 使用示例
const context = new Context();

context.request(); // 输出: ConcreteState1 is handling the request.

// 切换到状态2
const newState = new ConcreteState2();
context.setState(newState);

context.request(); // 输出: ConcreteState2 is handling the request.
