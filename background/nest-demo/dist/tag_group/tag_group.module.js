"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagGroupModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const tag_group_controller_1 = require("./tag_group.controller");
const tag_group_providers_1 = require("./tag_group.providers");
const tag_group_service_1 = require("./tag_group.service");
let TagGroupModule = class TagGroupModule {
};
exports.TagGroupModule = TagGroupModule;
exports.TagGroupModule = TagGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [tag_group_controller_1.TagGroupController],
        providers: [tag_group_service_1.TagGroupService, ...tag_group_providers_1.tagsProviders],
    })
], TagGroupModule);
//# sourceMappingURL=tag_group.module.js.map