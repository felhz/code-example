"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catsProviders = void 0;
const cat_schema_1 = require("../schemas/cat.schema");
exports.catsProviders = [
    {
        provide: 'CAT_MODEL',
        useFactory: (connection) => connection.model('catsd', cat_schema_1.CatSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cats.providers.js.map