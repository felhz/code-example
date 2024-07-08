/**
 *
 *
 */
class Subsystem {
  method1() {
    console.log('Subsystem method 1');
  }

  method2() {
    console.log('Subsystem method 2');
  }
}

class Facade {
  subsystem: Subsystem;
  constructor(subsystem: Subsystem) {
    this.subsystem = subsystem;
  }

  simplifiedMethod() {
    this.subsystem.method1();
    this.subsystem.method2();
  }
}

// 客户端代码
const subsystem = new Subsystem();
const facade = new Facade(subsystem);
facade.simplifiedMethod(); // Outputs: Subsystem method 1 Subsystem method 2
