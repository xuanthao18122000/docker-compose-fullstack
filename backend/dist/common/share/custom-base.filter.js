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
exports.BaseFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_transformer_2 = require("class-transformer");
const enums_1 = require("../enums");
class BaseFilter {
}
exports.BaseFilter = BaseFilter;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '( Page > 0 )',
        example: 1,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => typeof o.page === 'number'),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1, { message: 'Page must be greater than 0' }),
    __metadata("design:type", Object)
], BaseFilter.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '( perPage > 0 )',
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1, { message: 'perPage must be greater than 0' }),
    __metadata("design:type", Number)
], BaseFilter.prototype, "perPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter Fields',
        example: { name: '' },
        required: false,
    }),
    (0, class_transformer_2.Transform)(({ value }) => {
        try {
            return JSON.parse(value);
        }
        catch (err) {
            return false;
        }
    }),
    (0, class_validator_1.IsObject)({
        message: 'Invalid filter',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], BaseFilter.prototype, "filter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.SORT_ENUM, required: false }),
    (0, class_validator_1.IsEnum)(enums_1.SORT_ENUM),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseFilter.prototype, "sort", void 0);
//# sourceMappingURL=custom-base.filter.js.map