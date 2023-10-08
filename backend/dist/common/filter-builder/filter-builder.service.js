"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../enums");
let FilterBuilderService = class FilterBuilderService {
    buildQuery(Class, entityName, queryBuilder, query = {
        filter: {
            selectFields: [],
            numberFields: [],
            stringFields: [],
            unaccentFields: [],
            dateFields: {
                dateName: null,
                startDateField: null,
                endDateField: null,
            },
            sortName: null,
        },
        page: 0,
        perPage: 10000,
        sort: enums_1.SORT_ENUM.DESC,
    }) {
        const { filter, perPage, sort } = query;
        let { page } = query;
        const { dateFields, numberFields, selectFields, stringFields, unaccentFields, sortName, } = filter;
        if (selectFields.length > 0) {
            queryBuilder = queryBuilder.select(selectFields.map((field) => `${entityName}.${field}`));
        }
        for (const field of numberFields) {
            if (field) {
                queryBuilder.andWhere({
                    [field]: field ? field : (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                });
            }
        }
        for (const field of stringFields) {
            if (query[field]) {
                queryBuilder.andWhere({
                    [field]: field ? (0, typeorm_1.ILike)(`%${query[field]}%`) : (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                });
            }
        }
        for (const field of unaccentFields) {
            if (query[field]) {
                queryBuilder.andWhere(`unaccent(LOWER(${entityName}.${field})) ILIKE unaccent(LOWER(:${field}))`, {
                    [field]: `%${query[field]}%`,
                });
            }
        }
        if (dateFields &&
            dateFields.dateName &&
            (query[dateFields.startDateField] || query[dateFields.endDateField])) {
            queryBuilder.andWhere(`${dateFields.startDateField} >= :startDate`, {
                startDate: query[dateFields.startDateField],
            });
            queryBuilder.andWhere(`${dateFields.endDateField} <= :endDate`, {
                endDate: query[dateFields.endDateField],
            });
        }
        if (typeof page === 'number') {
            if (page && perPage)
                page = (page - 1) * perPage;
            queryBuilder.skip(page);
            if (perPage)
                queryBuilder.take(perPage);
        }
        if (sort === 'ASC' || sort === 'DESC') {
            queryBuilder.orderBy(`${sortName}`, sort);
        }
        return queryBuilder;
    }
};
FilterBuilderService = __decorate([
    (0, common_1.Injectable)()
], FilterBuilderService);
exports.default = FilterBuilderService;
//# sourceMappingURL=filter-builder.service.js.map