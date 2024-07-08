/**
 * 装饰器模式
 * 应用场景：在不改变原有对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求
 */
const routes = new Map();
let ob: any = null;
const get = (path: string) => {
  const method = 'GET';
  return (obj: any, key: string, descriptor: any) => {
    console.log('===obj===', obj);
    ob = obj;
    const route = [{ [key]: path, fn: descriptor.value, method }];
    if (!routes.has(obj)) {
      routes.set(obj, [route]);
    } else {
      routes.get(obj).push(route);
    }
  };
};

const Controller = (prefix: string) => {
  return (...args: any) => {
    console.log('===Controller====', args[0]);
    const classObj = args[0];

    [...routes.entries()].map(([instace, value]) => {
      if (instace.constructor === classObj) {
        value.prefix = prefix;
      }
    });
  };
};

@Controller('/home')
class HomeController {
  name = 'test';
  constructor() {
    console.log('初始化');
  }
  @get('home')
  home() {
    console.log('home');
  }
  @get('about')
  about() {
    console.log('about');
  }
}

console.log([...routes.values()]);
