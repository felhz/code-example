const enumerable = (value: boolean) => {
  console.log(value);

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(target, propertyKey, descriptor, 11);
    descriptor.enumerable = value;
  };
};

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
