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
exports.Tag = void 0;
const tag_group_entity_1 = require("../../tag_group/entities/tag_group.entity");
const typeorm_1 = require("typeorm");
let Tag = class Tag {
};
exports.Tag = Tag;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tag.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tag_group_entity_1.TagGroup, (tag_group) => tag_group.tags),
    (0, typeorm_1.JoinColumn)({ name: 'group' }),
    __metadata("design:type", tag_group_entity_1.TagGroup)
], Tag.prototype, "groups", void 0);
exports.Tag = Tag = __decorate([
    (0, typeorm_1.Entity)({ name: 'tags' })
], Tag);
//# sourceMappingURL=tags.entity.js.map