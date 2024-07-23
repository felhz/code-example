"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsProviders = void 0;
const tag_group_entity_1 = require("./entities/tag_group.entity");
exports.tagsProviders = [
    {
        provide: 'TagGroupRepository',
        useFactory: (dataSource) => dataSource.getRepository(tag_group_entity_1.TagGroup),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=tag_group.providers.js.map