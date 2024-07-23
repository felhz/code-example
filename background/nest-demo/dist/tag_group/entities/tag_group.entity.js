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
exports.TagGroup = void 0;
const typeorm_1 = require("typeorm");
const tags_entity_1 = require("../../tags/entity/tags.entity");
let TagGroup = class TagGroup {
};
exports.TagGroup = TagGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TagGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], TagGroup.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tags_entity_1.Tag, (tag) => tag.groups),
    __metadata("design:type", Array)
], TagGroup.prototype, "tags", void 0);
exports.TagGroup = TagGroup = __decorate([
    (0, typeorm_1.Entity)('tag_group')
], TagGroup);
//# sourceMappingURL=tag_group.entity.js.map