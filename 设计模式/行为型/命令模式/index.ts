/**
 * ，它将请求封装成一个对象，从而允许我们参数化其他对象中的客户端请求、将请求排队、记录请求日志，以及支持可撤销的操作
 */
// 命令接口
// 命令接口
interface Command {
  execute(): void;
  undo(): void;
}

// 具体命令类 - 开灯命令
class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

// 具体命令类 - 关灯命令
class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

// 接收者类 - 电灯
class Light {
  turnOn(): void {
    console.log('Light is ON');
  }

  turnOff(): void {
    console.log('Light is OFF');
  }
}

// 调用者类 - 遥控器
class RemoteControl {
  private command: Command | null = null;
  private history: Command[] = [];

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
      this.history.push(this.command);
    }
  }

  undoButton(): void {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      if (lastCommand) {
        lastCommand.undo();
      }
    }
  }
}

// 使用示例
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // 输出: Light is ON

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // 输出: Light is OFF

remoteControl.undoButton(); // 撤销，输出: Light is ON
