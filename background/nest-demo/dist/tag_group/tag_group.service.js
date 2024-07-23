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
exports.TagGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TagGroupService = class TagGroupService {
    constructor(groups) {
        this.groups = groups;
    }
    create(createTagGroupDto) {
        return 'This action adds a new tagGroup';
    }
    findAll() {
        return this.groups.find({ relations: ['tags'] });
    }
    findOne(id) {
        return `This action returns a #${id} tagGroup`;
    }
    update(id, updateTagGroupDto) {
        return `This action updates a #${id} tagGroup`;
    }
    remove(id) {
        return `This action removes a #${id} tagGroup`;
    }
};
exports.TagGroupService = TagGroupService;
exports.TagGroupService = TagGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TagGroupRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TagGroupService);
//# sourceMappingURL=tag_group.service.js.map