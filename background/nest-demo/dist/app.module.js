"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cats_module_1 = require("./cats/cats.module");
const cats_service_1 = require("./cats/cats.service");
const database_module_1 = require("./database/database.module");
const docs_module_1 = require("./docs/docs.module");
const gitlab_controller_1 = require("./gitlab/gitlab.controller");
const tag_group_module_1 = require("./tag_group/tag_group.module");
const tags_module_1 = require("./tags/tags.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cats_module_1.CatsModule, tags_module_1.TagsModule, tag_group_module_1.TagGroupModule, docs_module_1.DocsModule],
        controllers: [app_controller_1.AppController, gitlab_controller_1.GitlabController],
        providers: [app_service_1.AppService, cats_service_1.CatsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map