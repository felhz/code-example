"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocProviders = void 0;
const doc_entity_1 = require("./entities/doc.entity");
exports.DocProviders = [
    {
        provide: 'DocRepository',
        useFactory: (dataSource) => dataSource.getRepository(doc_entity_1.Doc),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=docs.providers.js.map