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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagGroupController = void 0;
const common_1 = require("@nestjs/common");
const tag_group_service_1 = require("./tag_group.service");
const create_tag_group_dto_1 = require("./dto/create-tag_group.dto");
const update_tag_group_dto_1 = require("./dto/update-tag_group.dto");
let TagGroupController = class TagGroupController {
    constructor(tagGroupService) {
        this.tagGroupService = tagGroupService;
    }
    create(createTagGroupDto) {
        return this.tagGroupService.create(createTagGroupDto);
    }
    findAll() {
        return this.tagGroupService.findAll();
    }
    findOne(id) {
        return this.tagGroupService.findOne(+id);
    }
    update(id, updateTagGroupDto) {
        return this.tagGroupService.update(+id, updateTagGroupDto);
    }
    remove(id) {
        return this.tagGroupService.remove(+id);
    }
};
exports.TagGroupController = TagGroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_group_dto_1.CreateTagGroupDto]),
    __metadata("design:returntype", void 0)
], TagGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagGroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tag_group_dto_1.UpdateTagGroupDto]),
    __metadata("design:returntype", void 0)
], TagGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagGroupController.prototype, "remove", null);
exports.TagGroupController = TagGroupController = __decorate([
    (0, common_1.Controller)('tag-group'),
    __metadata("design:paramtypes", [tag_group_service_1.TagGroupService])
], TagGroupController);
//# sourceMappingURL=tag_group.controller.js.map