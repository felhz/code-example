/**
 *
 * 允许我们将对象组合成树形结构，一次处理整个树形结构中的所有对象。
 * 组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。
 * 组合模式将客户端代码以一致的方式处理单个对象和复合对象，从而使代码更加灵活和可扩展
 */
class Component {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Composite extends Component {
  children: Component[] = [];
  constructor(name: string) {
    super(name);
  }

  add(component: Component) {
    this.children.push(component);
  }

  remove(component: Component) {
    this.children = this.children.filter((child) => child !== component);
  }

  getChildren() {
    return this.children;
  }

  traverse(callback: any) {
    for (let child of this.children) {
      if (child instanceof Composite) {
        child.traverse(callback);
      } else if (child instanceof Component) {
        callback(child);
      }
    }
  }
}

const root = new Composite('root');
const compositeA = new Composite('compositeA');
const compositeB = new Composite('compositeB');
const leafA1 = new Component('leafA1');
const leafA2 = new Component('leafA2');
const leafB1 = new Component('leafB1');
const leafB2 = new Component('leafB2');

root.add(compositeA);
root.add(compositeB);
compositeA.add(leafA1);
compositeA.add(leafA2);
compositeB.add(leafB1);
compositeB.add(leafB2);

root.traverse((component) => {
  console.log(component.name); // 输出每个组件的名称
});
