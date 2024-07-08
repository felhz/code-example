"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 装饰器模式
 * 应用场景：在不改变原有对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求
 */
const routes = new Map();
let ob = null;
const get = (path) => {
    const method = 'GET';
    return (obj, key, descriptor) => {
        console.log('===obj===', obj);
        ob = obj;
        const route = [{ [key]: path, fn: descriptor.value, method }];
        if (!routes.has(obj)) {
            routes.set(obj, [route]);
        }
        else {
            routes.get(obj).push(route);
        }
    };
};
const Controller = (prefix) => {
    return (...args) => {
        console.log('===Controller====', args[0]);
        const classObj = args[0];
        [...routes.entries()].map(([instace, value]) => {
            if (instace.constructor === classObj) {
                value.prefix = prefix;
            }
        });
    };
};
let HomeController = class HomeController {
    constructor() {
        this.name = 'test';
        console.log('初始化');
    }
    home() {
        console.log('home');
    }
    about() {
        console.log('about');
    }
};
__decorate([
    get('home'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "home", null);
__decorate([
    get('about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "about", null);
HomeController = __decorate([
    Controller('/home'),
    __metadata("design:paramtypes", [])
], HomeController);
console.log([...routes.values()]);
