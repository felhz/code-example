"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://root:example@10.254.32.243:27017/test'),
    },
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: '10.254.32.243',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'dev',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map