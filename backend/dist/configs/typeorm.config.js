"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const env_config_1 = require("./env.config");
exports.dataSourceOptions = {
    type: (0, env_config_1.cfg)('DB_DRIVER'),
    host: (0, env_config_1.cfg)('DB_HOST'),
    port: (0, env_config_1.cfg)('DB_PORT', Number),
    username: (0, env_config_1.cfg)('DB_USERNAME'),
    password: (0, env_config_1.cfg)('DB_PASSWORD'),
    database: (0, env_config_1.cfg)('DB_NAME'),
    logging: true,
    synchronize: true,
    migrationsRun: false,
    entities: [(0, path_1.join)(__dirname, '..', '/database/entities/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '..', '/database/migrations/*.{js,ts}')],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map