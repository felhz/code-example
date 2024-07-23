"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsProviders = void 0;
const tags_entity_1 = require("./entity/tags.entity");
exports.tagsProviders = [
    {
        provide: 'TagsRepository',
        useFactory: (dataSource) => dataSource.getRepository(tags_entity_1.Tag),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=tags.providers.js.map