"use strict";
// 观察者
class Observer {
    update(data) {
        // 观察者接收到主题的更新通知后执行的操作
        console.log('Received update:', data);
    }
}
// 主题
class Subject {
    constructor() {
        this.observers = [];
    }
    // 添加观察者
    addObserver(observer) {
        this.observers.push(observer);
    }
    // 通知所有观察者更新
    notify(data) {
        this.observers.forEach((observer) => {
            observer.update(data);
        });
    }
}
// 实例化观察者和主题
const observer1 = new Observer();
const observer2 = new Observer();
const subject = new Subject();
// 将观察者添加到主题中
subject.addObserver(observer1);
subject.addObserver(observer2);
// 主题通知所有观察者更新
subject.notify('Hello, observers!');
