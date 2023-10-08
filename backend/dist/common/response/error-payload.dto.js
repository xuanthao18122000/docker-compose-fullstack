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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorException = exports.ErrorPayloadDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class ErrorPayloadDto {
    constructor({ code, success = false, msg = '', errors = [] }) {
        this.code = code;
        this.success = success;
        this.msg = msg;
        this.errors = errors;
    }
}
exports.ErrorPayloadDto = ErrorPayloadDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ErrorPayloadDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ErrorPayloadDto.prototype, "msg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ErrorPayloadDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [] }),
    __metadata("design:type", Object)
], ErrorPayloadDto.prototype, "errors", void 0);
class ErrorException extends common_1.HttpException {
    constructor(statusCode, code, msg) {
        super({ code, success: false, msg }, statusCode);
    }
}
exports.ErrorException = ErrorException;
//# sourceMappingURL=error-payload.dto.js.map