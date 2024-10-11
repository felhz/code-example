import 'reflect-metadata';
console.log(Reflect);

let target_: any;
const enumerable = (value: boolean) => {
  console.log(value);

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    target_ = target;
    console.log(target, 11);
    descriptor.enumerable = value;
  };
};
const prop = (target: any, propertyKey: string) => {
  console.log('prop', target, propertyKey);
  // Reflect.defineMetadata('a', 1, target, propertyKey);
};

class Greeter {
  @prop
  a = 2;
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
  @Reflect.metadata('a', 22)
  getName() {}
}
const instance: any = new Greeter('world');
console.log(instance.__proto__ === target_); // true
console.log('a装饰器的值', Reflect.getMetadata('a', instance, 'getName')); // 1
console.log('getName上的装饰器', Reflect.getMetadataKeys(instance, 'getName')); // [ 'design:returntype', 'design:paramtypes', 'design:type', 'a' ]
