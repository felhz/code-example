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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
let CatsController = class CatsController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello() {
        const cats = await this.appService.findAll();
        console.log(cats);
        return cats;
    }
    async create() {
        const cats = await this.appService.create({
            user: 'test',
            name: 'test',
        });
        console.log(cats);
        return '1';
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('/cat'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map