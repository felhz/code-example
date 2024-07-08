class Singleton {
  a: string = '12';
  constructor(name: any) {
    this.name = name;
    this.instance = null;
  }
  // 该接口用于对该类进行实例化
  static getInstance(name) {
    //this 指向类
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}
const single = Singleton.getInstance('111');
console.log(single);
const single1 = Singleton.getInstance('1');
console.log(single1);
