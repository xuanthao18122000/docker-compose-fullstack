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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const error_payload_dto_1 = require("../../common/response/error-payload.dto");
const status_code_config_1 = require("../../configs/status-code.config");
const entities_1 = require("../../database/entities");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const filter_builder_service_1 = require("../../common/filter-builder/filter-builder.service");
let UserService = class UserService {
    constructor(userRepo, _filterBuilder) {
        this.userRepo = userRepo;
        this._filterBuilder = _filterBuilder;
    }
    async getAll(query) {
        const { page = 1, perPage = 10 } = query;
        query.filter = {
            selectFields: [
                'id',
                'fullName',
                'email',
                'avatar',
                'phoneNumber',
                'gender',
                'address',
                'status',
                'createdAt',
                'updatedAt',
            ],
            unaccentFields: ['fullName'],
            numberFields: [],
            stringFields: ['phoneNumber'],
            dateFields: {
                dateName: 'createdAt',
                startDateField: 'startDate',
                endDateField: 'endDate',
            },
            sortName: 'Id',
        };
        const entityName = 'users';
        const queryBuilder = this.userRepo.createQueryBuilder(entityName);
        const users = this._filterBuilder.buildQuery(entities_1.User, entityName, queryBuilder, query);
        const [list, total] = await users.getManyAndCount();
        return { list, total, page: Number(page) / 1, perPage: perPage / 1 };
    }
    async getOne(id) {
        const user = await this.findUserByPk(id);
        if (!user) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.CONFLICT, status_code_config_1.default['USER_NOT_FOUND'].code, status_code_config_1.default['USER_NOT_FOUND'].type);
        }
        return user.serialize();
    }
    async create(body) {
        const { email, password, fullName, gender, phoneNumber } = body;
        const isExistUser = await this.userRepo.findOneBy({
            email,
        });
        if (isExistUser) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.CONFLICT, status_code_config_1.default['USER_EXISTED'].code, status_code_config_1.default['USER_EXISTED'].type);
        }
        const user = this.userRepo.create({
            email,
            password: this.hashPassword(password),
            phoneNumber,
            status: 1,
            fullName,
            gender,
        });
        return await this.userRepo.save(user);
    }
    hashPassword(password) {
        return bcrypt.hashSync(password, 12);
    }
    async update(id, body) {
        const { fullName, phoneNumber, gender, address } = body;
        const user = await this.findUserByPk(id);
        if (fullName)
            user.fullName = fullName;
        if (phoneNumber)
            user.phoneNumber = phoneNumber;
        if (gender)
            user.gender = gender;
        if (address)
            user.address = address;
        return await this.userRepo.save(user);
    }
    async findUserByPk(id) {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.NOT_FOUND, status_code_config_1.default['USER_NOT_FOUND'].code, status_code_config_1.default['USER_NOT_FOUND'].type);
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_builder_service_1.default])
], UserService);
//# sourceMappingURL=user.service.js.map