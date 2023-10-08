"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_config_1 = require("./configs/env.config");
const swagger_1 = require("@nestjs/swagger");
const validation_exception_1 = require("./common/exceptions/validation.exception");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.useGlobalFilters(new validation_exception_1.ValidationExceptionFilter());
    app.useStaticAssets((0, path_1.join)(__dirname, 'assets', 'imgs'), {
        prefix: '/',
    });
    if ((0, env_config_1.cfg)('APP_NODE_ENV') !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('NESTJS BOILERPLATE API')
            .setDescription('NESTJS API description')
            .addServer((0, env_config_1.cfg)('APP_URL'))
            .setVersion('0.1')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, document);
    }
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map